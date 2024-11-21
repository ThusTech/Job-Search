from bson import ObjectId
from fastapi import HTTPException, Request, status, Depends
from typing import Optional, Any
import base64
import hashlib
import json
import hmac
from .config import settings
import datetime
from pydantic_core import core_schema
from pydantic import GetCoreSchemaHandler
from pydantic.json_schema import JsonSchemaValue

class PyObjectId(ObjectId):
    @classmethod
    def validate(cls, value:str):
        if not ObjectId.is_valid(value):
            raise ValueError("Invalid ObjectId")
        
        return ObjectId(value)
    
    @classmethod
    def __get_pydantic_core_schema__(cls, source: Any, handler: GetCoreSchemaHandler) -> Any:
        return core_schema.no_info_after_validator_function(cls.validate, core_schema.str_schema())
    
    @classmethod
    def __get_pydantic_json_schema__(cls, schema: JsonSchemaValue, handler: Any) -> JsonSchemaValue:
        schema.update(type="string")
        return schema


class JWT:
    @classmethod
    def create_token(cls,minutes = 45 , email="Demo@gmail.com") -> bytes:
        header = cls._header(alg="HS256",typ="JWT")

        exp = int((datetime.datetime.now() + datetime.timedelta(minutes)).timestamp())

        payload = cls._payload(email=email, exp=exp)
        signature = cls._signature(header=header, payload=payload)

        return b'.'.join([header, payload, signature])

    @classmethod
    def _header(cls, **kwargs) -> bytes:
        """
        The header typically consists of two parts: the type of token (JWT) and the signing algorithm being used,
        such as HMAC SHA256 or RSA. For example:

        {
            "alg": "HS256",
            "typ": "JWT"
        }
        """
        json_header = json.dumps(kwargs).encode('utf-8')
        return base64.urlsafe_b64encode(json_header).rstrip(b'=')

    @classmethod
    def _payload(cls, **kwargs) -> bytes:
        """
        The payload contains the claims, which are statements about an entity (typically,
        the user) and additional data. Claims are encoded as a JSON object and can include
        standard claims like iss (issuer), exp (expiration time),
        and sub (subject), as well as custom claims. For example:

            {
            "userId": "b07f85be-45da",
            "iss": "https://provider.domain.com/",
            "sub": "auth/some-hash-here",
            "exp": 153452683
            }
        """
        json_payload = json.dumps(kwargs).encode('utf-8')
        return base64.urlsafe_b64encode(json_payload).rstrip(b'=')

    @classmethod
    def _signature(cls, **kwargs) -> bytes:
        """
        The signature is used to verify the authenticity of the token.
        It is created by taking the encoded header and payload,
        concatenating them with a dot (.), and
        signing them using the specified algorithm and a secret key. For example:

            HMACSHA256(
            base64UrlEncode(header) + "." + base64UrlEncode(payload),
            secret
            )
        """
        try:
            signing_input = kwargs['header'] + b'.' + kwargs['payload']
            signature = hmac.new(settings.SECRET.encode('utf-8'), signing_input, hashlib.sha256).digest()

            return base64.urlsafe_b64encode(signature).rstrip(b'=')
        except Exception as err:
            raise Exception(f"Signature generation failed: {str(err)}")

        
    @classmethod
    def get_jwt_from_cookie(request: Request) -> Optional[str]:
        token = request.cookies.get("access_token")

        if not token:
            raise HTTPException(
                status_code=status.HTTP_403_FORBIDDEN,
                detail="Access token missing in cookies"
            )
        return token


    @classmethod
    def verify_jwt_token(cls, token: str = Depends(get_jwt_from_cookie)) -> bool:

        try:
            _token = base64.urlsafe_b64decode(token + "==")
            _header,_payload,_signature = _token.split(".")
        except Exception as err:
            raise HTTPException(status_code=404, detail="Invalid token")
        
        # header = base64.urlsafe_b64decode(_header + "==")
        # payload = base64.urlsafe_b64decode(_payload + "==")
        # signature = base64.urlsafe_b64decode(_signature + "==")


        return True