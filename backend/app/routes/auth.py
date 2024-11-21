from fastapi import APIRouter, HTTPException, status
from fastapi.responses import JSONResponse
from ..database.database import Database
from ..models.auth_models import Signup, Auth, Signin
from ..models.user_models import User, Profile
from ..utils.utils import Utils
from ..core.jwt import JWT
from ..core.core import PyObjectId
from bson import ObjectId


router = APIRouter()


@router.post('/api/auth/login')
async def sign_in(auth: Signin):
    db = await Database.database("users")

    user =  await db['auth'].find_one({"email": auth.email})

    if not Utils.validate_user(user=user, password=auth.password):
        raise HTTPException(status_code = status.HTTP_404_NOT_FOUND, detail = "Authentication failed")

    access_token = JWT.create_token(minutes=15, email = auth.email)
    refresh_token = JWT.create_token(minutes=60, email = auth.email)

    response = JSONResponse(content={"message":"Login successful"})
    response.set_cookie(key="access_token", value=access_token, httponly=True)
    
    return response

@router.post('/api/auth/signup')
async def sign_up(signup: Signup):
    email = signup.email

    db = await Database.database("users")
    user = await db['users'].find_one({"email": email})

    if user:
        return HTTPException(status_code = status.HTTP_400_BAD_REQUEST, detail = "user email exists")
    
    users_collection = db['users']
    profile_collection = db['profiles']
    auth_collection = db['auth']
    

    result = await users_collection.insert_one(
        User(
            email=email,
            role="user",
            isActive=True,
            username="demo086"
            ).model_dump(by_alias=True))
    
    id = str(result.inserted_id)

    profile_collection.insert_one(
        Profile(
            userId = id,
            firstname = signup.firstname,
            lastname = signup.lastname
        ).model_dump()
    )

    auth_collection.insert_one(
        Auth(
            email = email,
            hashedPassword = Utils.hash_password(signup.password)
        ).model_dump()
    )
    
    return JSONResponse(content={"message": "registered successfully"})

@router.get("/protected-route")
async def protected_route():
    pass