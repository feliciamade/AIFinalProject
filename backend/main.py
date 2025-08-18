import uvicorn
import os
import string
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from dotenv import load_dotenv
from typing import List
from google import genai
from google.genai import types
import chromadb
import pandas as pd
from sentence_transformers import SentenceTransformer


##To run use python main.py

load_dotenv()

key = os.environ['GEMINI_API_KEY']
    
app = FastAPI(debug=True)

origins = [
    "http://localhost:3000",
    "http://localhost:5173",
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

#chromaclient = chromadb.PersistentClient(path="./vectorstore")

chromaclient = chromadb.HttpClient(
  ssl=True,
  host='api.trychroma.com',
  tenant='c29efb95-933f-4582-bb95-07481e3a03a0',
  database='Restaurants2',
  headers={
    'x-chroma-token': 'ck-xiDcWSvj1jeYSgCzWGSACn6XTbQAvZtKGew4RDjPA2A'
  }
)

#collection_name = "restaurantlist2"
#collection = chromaclient.get_collection(name=collection_name)

# sample_data = collection.get(include=['documents', 'embeddings', 'metadatas'])

# dfembed = pd.DataFrame({
#     "IDs": sample_data['ids'][:3],
#     "Documents": sample_data['documents'][:3],
#     "Metadatas": sample_data['metadatas'][:3],
    # "Embeddings": [str(emb)[:50] + "..." for emb in sample_data['embeddings'][:3]]  # Truncate embeddings
# })

#print(dfembed)

#model = SentenceTransformer("multi-qa-mpnet-base-cos-v1")

def get_embedding(text):
    model = SentenceTransformer("sentence-transformers/msmarco-bert-base-dot-v5")
    return model.encode(text).tolist()

def intolerancefilter(string):
  intolerance=[]
  gluten=["gluten", "celiac", "gf", "wheat"]
  dairy=["dairy"]
  vegan=["vegan","plant"]
  specificfood=["hamburger","burger","cake", "sandwich", "bakery"]
  lowerstring=string.lower()
  for punctuation in ',.?;"-':
    lowerstring = lowerstring.replace(punctuation, "")
  if any(x in lowerstring for x in gluten):
    intolerance.append({"gluten-free": True})
  if any(x in lowerstring for x in dairy):
    intolerance.append({"dairy-free": True})
  if any(x in lowerstring for x in vegan):
    intolerance.append({"vegan": True})
  #newstring = lowerstring.replace("gluten free", "").replace("no gluten", "").replace("gluten", "").replace("gluten-free", "").replace("non gluten","").replace("wheat free", "").replace("vegan","").replace("dairy free","").replace("non dairy","").replace("no dairy","").replace("nondairy","").replace("dairy","")
  for punctuation in ',.?;"':
    lowerstring = lowerstring.replace(punctuation, "")
    finalstring = lowerstring
    finalstring = finalstring.replace("glutenfree", "gluten-free").replace("dairyfree", "dairy-free").replace("wheatfree", "wheat-free")
  if not any(x in lowerstring for x in specificfood):
    finalstring = lowerstring.replace("gluten free", "").replace("no gluten", "").replace("gluten", "").replace("gluten-free", "").replace("non gluten","").replace("wheat free", "").replace("dairy free","").replace("non dairy","").replace("no dairy","").replace("nondairy","").replace("dairy","").replace("free","")
  values = [finalstring, intolerance]
  return(values)

# query_vector = get_embedding("Where can I get a vegan hamburger?")
# results = collection.query(query_embeddings=[query_vector], n_results=2)
# print(results["documents"][0][0])

conversation_history = [{"role":"system", "content":"Hello! I am Herb. What type of restaurant are you looking for?"}]

def generate_prompt(query):
    conversation_history.append({"role":"user", "content":query})
    collection_name = "restaurantlist9"
    collection = chromaclient.get_collection(name=collection_name)
    filteredqueryandmetadata = intolerancefilter(query)
    filteredquery = filteredqueryandmetadata[0]
    metadata = filteredqueryandmetadata[1]
    query_vector = get_embedding(filteredquery)
    if len(metadata) == 0:
        results = collection.query(query_embeddings=[query_vector], n_results=3)
    if len(metadata) == 1:
        results = collection.query(query_embeddings=[query_vector], where=metadata[0], n_results=3)
    if len(metadata) > 1: 
        results = collection.query(query_embeddings=[query_vector], where={"$and": metadata}, n_results=3)
    restaurant = results["documents"]
    PROMPT = f"""
    query: {query}
    If the query does not ask about a restaurant recommendation or where to get food answer the query as it is.
    If the query asks for a restaurant recommendation or where to get food, use the following restuarant information to answer user query.
    If they use the singular to ask for a restaurant or food, only give them one restaurant. Otherwise, you can recommend multiple.
    {restaurant}
    Conversation history: {conversation_history}
        """
    return PROMPT

def chat_with_gpt(query):
    response = client.models.generate_content(
        model="gemini-2.5-flash",
        contents=f"You are friendly food expert {query}. If the user is getting a restaurant recommendation make it seem like a review and include what they will enjoy about it. Incorporate line breaks in your answer where it is appropriate using <br>.",
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