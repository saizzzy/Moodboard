import json
import os

DB_FILE = "/data-base/lessons.json" #The name of the database file.

def init_db():
    if not os.path.exists(DB_FILE):
        initial_data = [
    {"id": 1,"name": "Математика","time": "9:00"},
    {"id": 2,"name": "Физика","time": "10:00"}
    ]
    with open(DB_FILE, "w", encoding="utf-8") as f:
            json.dump(initial_data, f, ensure_ascii=False, indent=4)

async def get_all_lessons():
    """Открывает файл, читает его и возвращает список уроков в FastAPI"""
    init_db()  #Scan
    with open(DB_FILE, "r", encoding="utf-8") as f:
        return json.load(f) #Load info
