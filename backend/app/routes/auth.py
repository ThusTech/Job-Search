from fastapi import APIRouter, HTTPException, status
from fastapi.responses import JSONResponse
from ..database.database import Database
from ..models.auth_models import Signup, Auth, Signin
from ..models.user_models import User, Profile
from ..utils.utils import Utils
from ..core.core import PyObjectId, JWT


router = APIRouter()


@router.post('/api/auth/signin')
async def sign_in(signin: Signin):
    db = await Database.database("users")

    auth_collection = db['auth']

    email = signin.email
    auth =  await auth_collection.find_one({"email": email})

    if not Utils.validate_user(auth=auth, password=signin.password):
        raise HTTPException(status_code = status.HTTP_401_UNAUTHORIZED, detail = "Authentication failed")


    access_token = JWT.create_token(minutes=15, email = signin.email)
    refresh_token = JWT.create_token(minutes=60, email = signin.email)


    result = await auth_collection.update_one(
        {"_id": auth["_id"]},
        { "$set":{"refreshToken":refresh_token}}
    )

    response = JSONResponse(content={"message":"Login successful"})
    response.set_cookie(key="access_token", value=access_token, httponly=True)
    
    return response

@router.post('/api/auth/signup')
async def sign_up(signup: Signup):
    email = signup.email

    db = await Database.database("users")

    users_collection = db['users']

    user = await users_collection.find_one({"email": email})

    if user:
        return HTTPException(status_code = status.HTTP_400_BAD_REQUEST, detail = "user email exists")
    

    profile_collection = db['profiles']
    auth_collection = db['auth']
    

    result = await users_collection.insert_one(
        User(
            email = email,
            role = "user",
            isActive = True,
            username= email.split("@")[0]
            ).model_dump(by_alias=True)
    )
    
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
        ).model_dump(by_alias=True)
    )
    
    return JSONResponse(content={"message": "registered successfully"})


@router.delete('/api/auth/logout')
async def logout():
    pass