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
    "Embeddings": [str(emb)[:50] + "..." for emb in sample_data['embeddings'][:3]]  # Truncate embeddings
})

print(dfembed)

model = SentenceTransformer("multi-qa-mpnet-base-cos-v1")

def get_embedding(text):
    return model.encode(text).tolist()

# query_vector = get_embedding("Where can I get a vegan hamburger?")
# results = collection.query(query_embeddings=[query_vector], n_results=1)
# print(results["documents"][0][0])

def generate_prompt(query):
    query_vector = get_embedding(query)
    results = collection.query(query_embeddings=[query_vector], n_results=1)
    restaurant = results["documents"][0][0]
    PROMPT = f"""
    Use the following restaurant information to answer user queries. 
    {restaurant}
    Query: {query}
        """
    return PROMPT

prompt1 = generate_prompt("Where can I get a gluten-free breakfast?")

print(prompt1)

response = client.models.generate_content(
    model="gemini-2.5-flash",
    contents=f"You are a food expert who has a passion for connecting people with delicious food {prompt1}. Make it seem like a review and include what they will enjoy about it.",
    config=types.GenerateContentConfig(
        thinking_config=types.ThinkingConfig(thinking_budget=0) # Disables thinking
    ),
)
print(response.text)


# @app.get("/fruits", response_model=Fruits)
# def get_fruits():
#     print("Hello world")
#     return Fruits(fruits=memory_db["fruits"])

# @app.post("/fruits")
# def add_fruit(fruit: Fruit):
#     memory_db["fruits"].append(fruit)
#     return fruit
    

# if __name__ == "__main__":
#     uvicorn.run(app, host="0.0.0.0", port=8000)