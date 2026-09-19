from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import schedule
import ai_module


app = FastAPI(title="AI Schedule API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], #Host
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/data-base/lessons")
async def read_lessons():
    lessons = await schedule.get_all_lessons()
    return {"status": "success", "data": lessons}"

@app.post("/data-base/search")
async def search_document(payload: ai_module.AIRequest):
    ai_result = await ai_module.process_request(payload.topic_name)
    return {
        "status": "success",
        "lesson_id": payload.lesson_id,
        "ai_response": ai_result
    }