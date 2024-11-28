import axios from 'axios'

export default async function loginService(email, password){
    const API_URL = import.meta.env.VITE_API_URL;
    
    try{
        const response = await axios.post(`${API_URL}/api/auth/signin`, {
            email: email,
            password: password
        });
        return response.data
    }catch (err){
        if (err.response){
            if (err.response.status === 404){
                throw new Error("Endpoint not found");
            } else if (err.response.status === 401){
                throw new Error("Authentication Failed");
            } else if (err.response.status === 422){
                throw new Error("Entity Error")
            }
        } else if (err.request){
            throw new Error("No response from server");
        } else {
            throw new Error(`Error setting up request: ${err.message}`)
        }
    }
}