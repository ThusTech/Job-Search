import bcrypt
import base64



class Utils:
    def __init__():
        pass

    @classmethod
    def hash_password(cls,password:str) -> str:
        bytes = password.encode('utf-8')
        salt = bcrypt.gensalt()
        hash = bcrypt.hashpw(bytes, salt)

        # Converting binary string to Base64 string
        base64_hash = base64.b64encode(hash).decode('utf-8')

        return base64_hash
    
    @classmethod
    def verify_password(cls,password: str, hash) -> bool:
        # Converting the base64 string to binary string
        decoded_hash = base64.b64decode(hash)

        bytes = password.encode('utf-8')
        result = bcrypt.checkpw(bytes, decoded_hash)

        return result

    @classmethod
    def validate_user(cls, user, password) -> bool:
        if not user : return False

        hashed = user["hashedPassword"]

        if not cls.verify_password(password=password, hash=hashed): return False

        return True
    
    @classmethod
    def _json_header(cls):
        pass

    @classmethod
    def _json_payload(cls):
        pass

    @classmethod
    def _json_signature(cls):
        pass