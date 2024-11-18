from fastapi import APIRouter, HTTPException
from fastapi.responses import JSONResponse
from ..database.database import Database
from ..models import Auth
from ..utils import Utils
from ..utils.jwt import JWT


router = APIRouter()


@router.post('/api/auth/login')
async def sign_in(auth: Auth):
    db = await Database.database("users")

    user =  await db['auth'].find_one({"email": auth.email})

    if not Utils.validate_user(user=user, password=auth.password):
        raise HTTPException(status_code = 404, detail = "Authentication failed")

    access_token = JWT.create_token(minutes=30, email = auth.email)
    refresh_token = JWT.create_token(minutes=150, email = auth.email)

    response = JSONResponse(content={"message":"Login successful"})
    response.set_cookie(key="access_token", value=access_token, httponly=True)
    
    return response

@router.post('/api/auth/signup')
async def sign_up():
    pass

@router.get("/protected-route")
async def protected_route():
    pass