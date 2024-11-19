from pydantic import BaseModel, Field
from typing import Optional, Union


class Signup(BaseModel):
    firstName: str
    lastName: str
    email: str
    password: str

class Auth(BaseModel):
    email: str
    password: str
