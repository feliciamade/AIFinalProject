import textwrap
import chromadb
import numpy as np
from numpy.linalg import norm
from google.genai import types
import pandas as pd
from sentence_transformers import SentenceTransformer, util

from chromadb import Documents, EmbeddingFunction, Embeddings

from google import genai
from dotenv import load_dotenv
import os
import time

load_dotenv()

key = os.environ['GEMINI_API_KEY']

client = genai.Client(api_key=key)

for m in client.models.list():
  if 'embedContent' in m.supported_actions:
    print(m.name)

data_path = "./RestaurantData.csv" #@param{type:"string"}

df = pd.read_csv(data_path)
df= df.drop(columns='Neighborhood')
df = df.drop_duplicates(subset='Description')
df = df.reset_index(drop=True)
df.info()

def restaurant_info_layout(restaurants):
    # Iterate over the houses
        # For each house, append the information to the string using f-strings
        # The following way using brackets is a good way to make the code readable as in each line you can start a new f-string that will appended to the previous one
    layout = (f"Restaurant Name: {restaurants['Name']}, Cuisine Type: {restaurants['Cuisine Type']}, Service Style: {restaurants['Service Style']}"
            f"Meal Focus: {restaurants['Meal Focus']} Description: {restaurants['Description']} \n\n")
        
    return layout

client = genai.Client()

model = SentenceTransformer("multi-qa-mpnet-base-cos-v1")

df["layout"] = df.apply(restaurant_info_layout, axis=1)

print(df["layout"].head())

def get_embedding(text: str) -> list[float]:
    if not text.strip():
      print("Attempted to get embedding for empty text.")
      return []

    embedding = model.encode(text)
    return embedding.tolist()

#add an embedding column to the dataframe to hold the embeddings
df["embedding"] = df["layout"].apply(get_embedding)

#The data is also stored in the backend in a folder called vectorstore.
#This was created by a persistent client.
#chroma_client = chromadb.PersistentClient(path="./vectorstore")

#Connecting to chroma cloud
chroma_client = chromadb.CloudClient(
  api_key='ck-4ZHQ41171HcAmeUvuNx3giWmsQStDsa3EzmMEhLkzsQC',
  tenant='c29efb95-933f-4582-bb95-07481e3a03a0',
  database='Restaurants2'
)

collection = chroma_client.create_collection(name="restaurantlist7")

# Adding the data to chroma.
for i, row in df.iterrows():
    collection.add(
        ids=[str(i)],
        embeddings=[row["embedding"]],
        metadatas= [{
            "vegan": bool(row["Vegan"]),
            "gluten-free": bool(row["Gluten‑Free"]),
            "dairy-free": bool(row["Dairy‑Free"])
        }],
        documents=[row["layout"]]
    )

#Code to delete a collection in chroma
# try:
#     chroma_client.delete_collection(name="restaurantlist")
#     print("Existing collection deleted.")
# except Exception as e:
#     print("No existing collection to delete.", e)
