import base64
import hashlib
import json
import hmac
from .config import settings
import datetime

class JWT:
    @classmethod
    def access_token(cls,email="Demo@gmail.com"):
        header = cls._header(alg="HS256",typ="JWT")

        exp = (datetime.datetime.now() + datetime.timedelta(minutes = 45)).ctime()

        payload = cls._payload(exp=exp)

        token = cls._signature(header=header, payload=payload)

        return token



    @classmethod
    def _header(cls, **kwargs):
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
    def _payload(cls, **kwargs):
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
    def _signature(cls, **kwargs):
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
        except Exception as err:
            pass

        return base64.urlsafe_b64encode(signature).rstrip(b'=')
    
    @classmethod
    def verify_token(cls):
        pass
