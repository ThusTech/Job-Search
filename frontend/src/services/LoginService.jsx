import axios from 'axios'

export default async function loginService(email, password){
    const API_URL = import.meta.env.VITE_API_URL;
    
    try{
        const response = await axios.post(`${API_URL}/api/auth/login`, {
            email: email,
            password: password
        });

        return response.data
    }catch (err){
        
    }
}