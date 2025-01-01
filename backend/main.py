# backend/main.py
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional
from model.job_matching import JobMatchingModel  # Import the model

# Create FastAPI app instance
app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Initialize the model at startup
@app.on_event("startup")
async def startup_event():
    global model
    model = JobMatchingModel()
    try:
        model.load_data('/Users/vaanya/kaamkar/backend/data/upwork-jobs.csv')  # Update this path
    except Exception as e:
        print(f"Error loading data: {e}")

class UserInput(BaseModel):
    skills: List[str]
    preferred_rate: float
    job_type: str
    experience_level: str
    preferred_location: Optional[str] = None
    description: str

@app.get("/")
async def root():
    return {"message": "Job Matching API is running"}

@app.post("/api/match-jobs")
async def match_jobs(user_input: UserInput):
    try:
        matches = await model.find_matches(user_input.dict())
        return {"matches": matches}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/api/job/{job_id}")
async def get_job(job_id: int):
    try:
        job_details = model.get_job_details(job_id)
        return job_details
    except IndexError:
        raise HTTPException(status_code=404, detail="Job not found")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)