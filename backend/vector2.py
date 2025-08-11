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
df.info()
df.head()


client = genai.Client()

model = SentenceTransformer("multi-qa-mpnet-base-cos-v1")

def get_embedding(text: str) -> list[float]:
    if not text.strip():
      print("Attempted to get embedding for empty text.")
      return []

    embedding = model.encode(text)
    return embedding.tolist()

chroma_client = chromadb.PersistentClient(path="./vectorstore")

collection = chroma_client.create_collection(name="restaurantlist")

for i, row in df.iterrows():
    collection.add(
        ids=[str(i)],
        embeddings=[row["embedding"]],
        metadatas= [{
            "vegan": bool(row["Vegan"]),
            "gluten-free": bool(row["Gluten‑Free"]),
            "dairy-free": bool(row["Dairy‑Free"])
        }],
        documents=[row["Description"]]
    )
