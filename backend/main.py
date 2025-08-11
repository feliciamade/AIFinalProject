import uvicorn
import os
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from dotenv import load_dotenv
from typing import List
from google import genai
from google.genai import types
import chromadb
import numpy as np
import pandas as pd
from sentence_transformers import SentenceTransformer


##To run use python main.py

load_dotenv()

key = os.environ['GEMINI_API_KEY']
    
app = FastAPI(debug=True)

origins = [
    "http://localhost:3000",
    # Add more origins here
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

client = genai.Client(api_key=key)

chromaclient = chromadb.PersistentClient(path="./vectorstore")

collection_name = "restaurantlist"
collection = chromaclient.get_collection(name=collection_name)

sample_data = collection.get(include=['documents', 'embeddings', 'metadatas'])

dfembed = pd.DataFrame({
    "IDs": sample_data['ids'][:3],
    "Documents": sample_data['documents'][:3],
    "Metadatas": sample_data['metadatas'][:3],
    # "Embeddings": [str(emb)[:50] + "..." for emb in sample_data['embeddings'][:3]]  # Truncate embeddings
})

#print(dfembed)

model = SentenceTransformer("multi-qa-mpnet-base-cos-v1")

def get_embedding(text):
    return model.encode(text).tolist()

# query_vector = get_embedding("Where can I get a vegan hamburger?")
# results = collection.query(query_embeddings=[query_vector], n_results=1)
# print(results[results["documents"][0][0]])

conversation_history = [{"role":"system", "content":"Hello! I am Erb. What type of restaurant are you looking for?"}]

def generate_prompt(query):
    conversation_history.append({"role":"user", "content":query})
    query_vector = get_embedding(query)
    results = collection.query(query_embeddings=[query_vector], n_results=1)
    restaurant = results["documents"][0][0]
    PROMPT = f"""
    query: {query}
    If the query does not ask about a restaurant recommendation just answer the query as it is.
    If the query asks for a restaurant recommendation, use the following restuarant information to answer user query.
    {restaurant}
        """
    return PROMPT


def chat_with_gpt(query):
    response = client.models.generate_content(
        model="gemini-2.5-flash",
        contents=f"You are friendly food expert {query}. If the user is getting a restaurant recommendation make it seem like a review and include what they will enjoy about it.",
        config=types.GenerateContentConfig(
            thinking_config=types.ThinkingConfig(thinking_budget=0) # Disables thinking
        ),
    )
    chatbot_reply = f"{response.text}"
    conversation_history.append({"role":"assistant", "content":chatbot_reply})
    return conversation_history

class Message(BaseModel):
    message:str

@app.get("/")
def read_root():
    return {"Hello": "World"}


# endpoint to send prompts to chat api. formatted as json body:  {"message": "Translate..." }cd 
@app.post("/ask")
async def create_message(message: Message):
    server_response = chat_with_gpt(generate_prompt(message.message))
    return server_response
    

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 8000))
    uvicorn.run("main:app", host="0.0.0.0", port=port)