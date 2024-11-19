from fastapi import APIRouter, HTTPException, status


router = APIRouter()

@router.get("/api/users/{userId}")
async def get_users():
    pass

@router.get("/api/profiles/{userId}")
async def get_user_profile():
    pass

@router.put("/api/profiles/{userId}")
async def update_user_profile():
    pass

@router.delete("/api/profiles/{userId}")
async def delete_user_profile():
    pass