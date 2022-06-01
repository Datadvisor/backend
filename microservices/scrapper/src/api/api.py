"""
    Author: Lorenzo Carneli
    Create on : 15/12/2021
    About: API Request
"""

from fastapi import FastAPI
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware

from src.website.google_search_engine import search_in_google

app = FastAPI()

origins = [
    "http://domainname.com",
    "https://domainname.com",
    "http://localhost",
    "http://localhost:8080",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/search_by_name")
async def search_by_name(query: str):
    return JSONResponse(content=search_in_google(query))
