from fastapi import APIRouter, HTTPException
from ..database import Database
from ..models import Job


router = APIRouter()

@router.get("/jobs")
async def getJobs(response_model = Job):
    db = await Database.database("JobListing")
    jobs_cursor = db["Jobs"].find()

    jobs_list = await jobs_cursor.to_list()

    if not jobs_cursor:
        raise HTTPException(status_code = 404, detail = "No jobs found")
    
    return jobs_list