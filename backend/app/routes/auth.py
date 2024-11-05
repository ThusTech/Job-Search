from fastapi import APIRouter
from ..database import Database
# from ..utils import 


router = APIRouter()


@router.post('api/auth/signin')
async def sign_in():
    pass

@router.post('api/auth/signup')
async def sign_up():
    pass