from pydantic import BaseModel, Field
from typing import Optional, Union


class Signup(BaseModel):
    firstname: str
    lastname: str
    email: str
    password: str

class Signin(BaseModel):
    email: str
    password: str

class Auth(BaseModel):
    email: str
    hashedPassword: str
    accessToken: str = Field(default=None)
    refreshToken: str = Field(default=None)
