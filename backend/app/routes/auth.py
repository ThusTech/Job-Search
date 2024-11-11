from fastapi import APIRouter, HTTPException
from ..database import Database
from ..models import Auth
from ..utils import Utils
from ..jwt import JWT


router = APIRouter()


@router.post('/api/auth/signin')
async def sign_in(auth: Auth):
    db = await Database.database("users")

    user =  await db['auth'].find_one({"email": auth.email})

    if not Utils.validate_user(user=user, password=auth.password):
        raise HTTPException(status_code = 404, detail = "Authentication failed")
    
    access_token = JWT.create_token(minutes=30)
    refresh_token = JWT.create_token(minutes=150)
    
    return {"access_token": access_token,
            "refresh_token": refresh_token}

@router.post('/api/auth/signup')
async def sign_up():
    pass