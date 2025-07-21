#!/usr/bin/env python3

import sys
import os
sys.path.append('/app/backend')

from pymongo import MongoClient
from dotenv import load_dotenv

# Load environment variables
load_dotenv('/app/backend/.env')

# Sample manga data with the images from vision expert
sample_manga = [
    {
        'title': 'Наруто',
        'author': 'Масаші Кішимото',
        'price': 299.99,
        'description': 'Епічна історія про молодого ніндзю, який прагне стати Хокаге.',
        'image_url': 'https://images.unsplash.com/photo-1705831156575-a5294d295a31?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwyfHxtYW5nYXxlbnwwfHx8fDE3NTMwMzczNTR8MA&ixlib=rb-4.1.0&q=85',
        'genre': 'Пригоди',
        'volumes': 72,
        'rating': 4.8
    },
    {
        'title': 'Атака Титанів',
        'author': 'Хайджиме Ісаяма',
        'price': 349.99,
        'description': 'Темна історія про виживання людства проти гігантських титанів.',
        'image_url': 'https://images.unsplash.com/photo-1531501410720-c8d437636169?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwxfHxtYW5nYXxlbnwwfHx8fDE3NTMwMzczNTR8MA&ixlib=rb-4.1.0&q=85',
        'genre': 'Драма',
        'volumes': 34,
        'rating': 4.9
    },
    {
        'title': 'Односкачний',
        'author': 'Віатьон',
        'price': 279.99,
        'description': 'Комедійна історія про героя, який може перемогти будь-кого одним ударом.',
        'image_url': 'https://images.unsplash.com/photo-1709675577966-6231e5a2ac43?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwzfHxtYW5nYXxlbnwwfHx8fDE3NTMwMzczNTR8MA&ixlib=rb-4.1.0&q=85',
        'genre': 'Комедія',
        'volumes': 29,
        'rating': 4.7
    },
    {
        'title': 'Демон Слейер',
        'author': 'Коюхару Гобуне',
        'price': 329.99,
        'description': 'Історія про хлопчика, який стає мисливцем на демонів.',
        'image_url': 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwyfHxhbmltZXxlbnwwfHx8fDE3NTMxMDExNTZ8MA&ixlib=rb-4.1.0&q=85',
        'genre': 'Екшн',
        'volumes': 23,
        'rating': 4.9
    },
    {
        'title': 'Мій Академічний Герой',
        'author': 'Кохей Хорікоші',
        'price': 289.99,
        'description': 'Світ, де майже всі мають суперсили, а головний герой - ні.',
        'image_url': 'https://images.unsplash.com/photo-1601850494422-3cf14624b0b3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwzfHxhbmltZXxlbnwwfHx8fDE3NTMxMDExNTZ8MA&ixlib=rb-4.1.0&q=85',
        'genre': 'Супергерої',
        'volumes': 38,
        'rating': 4.6
    },
    {
        'title': 'Джуджицу Кайсен',
        'author': 'Геге Акутамі',
        'price': 319.99,
        'description': 'Студенти борються з прокльонами у сучасному Токіо.',
        'image_url': 'https://images.unsplash.com/photo-1519638399535-1b036603ac77?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwxfHxhbmltZXxlbnwwfHx8fDE3NTMxMDExNTZ8MA&ixlib=rb-4.1.0&q=85',
        'genre': 'Містика',
        'volumes': 24,
        'rating': 4.8
    }
]

def init_database():
    try:
        MONGO_URL = os.environ.get('MONGO_URL')
        client = MongoClient(MONGO_URL)
        db = client.manga_shop
        
        # Clear existing data
        db.manga.delete_many({})
        
        # Insert sample data
        result = db.manga.insert_many(sample_manga)
        print(f"Inserted {len(result.inserted_ids)} manga items")
        
        # Verify insertion
        count = db.manga.count_documents({})
        print(f"Total manga in database: {count}")
        
        client.close()
        print("Database initialized successfully!")
        
    except Exception as e:
        print(f"Error initializing database: {e}")

if __name__ == "__main__":
    init_database()