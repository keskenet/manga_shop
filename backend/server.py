from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pymongo import MongoClient
from pydantic import BaseModel
from typing import List, Optional
import os
from dotenv import load_dotenv
import uuid
from bson import ObjectId

# Load environment variables
load_dotenv()

app = FastAPI(title="Manga Shop API")

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# MongoDB connection
MONGO_URL = os.environ.get('MONGO_URL')
client = MongoClient(MONGO_URL)
db = client.manga_shop
manga_collection = db.manga
cart_collection = db.cart

# Pydantic models
class Manga(BaseModel):
    id: Optional[str] = None
    title: str
    author: str
    price: float
    description: str
    image_url: str
    genre: str
    volumes: int
    rating: float

class CartItem(BaseModel):
    manga_id: str
    title: str
    price: float
    quantity: int
    image_url: str

class Cart(BaseModel):
    id: Optional[str] = None
    items: List[CartItem] = []
    total: float = 0.0

# Routes
@app.get("/")
def read_root():
    return {"message": "Manga Shop API"}

@app.get("/api/manga", response_model=List[Manga])
def get_all_manga():
    manga_list = list(manga_collection.find())
    for manga in manga_list:
        manga['id'] = str(manga['_id'])
        del manga['_id']
    return manga_list

@app.get("/api/manga/{manga_id}", response_model=Manga)
def get_manga(manga_id: str):
    manga = manga_collection.find_one({"_id": ObjectId(manga_id)})
    if not manga:
        raise HTTPException(status_code=404, detail="Manga not found")
    manga['id'] = str(manga['_id'])
    del manga['_id']
    return manga

@app.post("/api/cart/{cart_id}/add")
def add_to_cart(cart_id: str, item: CartItem):
    cart = cart_collection.find_one({"cart_id": cart_id})
    if not cart:
        cart = {"cart_id": cart_id, "items": [], "total": 0.0}
        cart_collection.insert_one(cart)
    
    # Check if item already exists in cart
    existing_item_index = -1
    for i, cart_item in enumerate(cart["items"]):
        if cart_item["manga_id"] == item.manga_id:
            existing_item_index = i
            break
    
    if existing_item_index >= 0:
        cart["items"][existing_item_index]["quantity"] += item.quantity
    else:
        cart["items"].append(item.dict())
    
    # Recalculate total
    total = sum(cart_item["price"] * cart_item["quantity"] for cart_item in cart["items"])
    
    cart_collection.update_one(
        {"cart_id": cart_id},
        {"$set": {"items": cart["items"], "total": total}}
    )
    
    return {"message": "Item added to cart", "total": total}

@app.get("/api/cart/{cart_id}")
def get_cart(cart_id: str):
    cart = cart_collection.find_one({"cart_id": cart_id})
    if not cart:
        return {"cart_id": cart_id, "items": [], "total": 0.0}
    
    return {
        "cart_id": cart["cart_id"],
        "items": cart["items"],
        "total": cart["total"]
    }

@app.delete("/api/cart/{cart_id}/item/{manga_id}")
def remove_from_cart(cart_id: str, manga_id: str):
    cart = cart_collection.find_one({"cart_id": cart_id})
    if not cart:
        raise HTTPException(status_code=404, detail="Cart not found")
    
    cart["items"] = [item for item in cart["items"] if item["manga_id"] != manga_id]
    
    # Recalculate total
    total = sum(item["price"] * item["quantity"] for item in cart["items"])
    
    cart_collection.update_one(
        {"cart_id": cart_id},
        {"$set": {"items": cart["items"], "total": total}}
    )
    
    return {"message": "Item removed from cart", "total": total}

@app.put("/api/cart/{cart_id}/item/{manga_id}")
def update_cart_item_quantity(cart_id: str, manga_id: str, quantity: int):
    cart = cart_collection.find_one({"cart_id": cart_id})
    if not cart:
        raise HTTPException(status_code=404, detail="Cart not found")
    
    for item in cart["items"]:
        if item["manga_id"] == manga_id:
            item["quantity"] = quantity
            break
    
    # Remove items with 0 quantity
    cart["items"] = [item for item in cart["items"] if item["quantity"] > 0]
    
    # Recalculate total
    total = sum(item["price"] * item["quantity"] for item in cart["items"])
    
    cart_collection.update_one(
        {"cart_id": cart_id},
        {"$set": {"items": cart["items"], "total": total}}
    )
    
    return {"message": "Item quantity updated", "total": total}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8001)