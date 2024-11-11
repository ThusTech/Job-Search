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
    
    access_token = JWT.access_token()
    
    return {"access_token": access_token.decode("utf-8")}

@router.post('/api/auth/signup')
async def sign_up():
    pass