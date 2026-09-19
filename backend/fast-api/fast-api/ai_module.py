import asyncio
from pydantic import BaseModel

class AIRequest(BaseModel):
    lesson_id: int #ID of the lesson
    topic_name: str #Theme Text

async def ask_local_neuroset(topic: str) -> dict:
    await asyncio.sleep(2)

    return {
        "summary": f"Описание темы '{topic}' сгенерировано локальной нейросетью.",
        "documents": [
            {"title": f"Сайт с документацией: '{topic}'", "url": "*URL"},
        ]
        }