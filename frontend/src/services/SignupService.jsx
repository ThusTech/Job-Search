import axios from "axios";

export default async function SignupService(firstName, lastName, email, password) {

    const API_URL = import.meta.env.VITE_API_URL;

    try{
        const response = await axios.post(`${API_URL}/api/auth/signup`,{
                firstname: firstName,
                lastname: lastName,
                email: email,
                password: password
            });
        
            return response.data
    }catch (err){
        if (err.response){
            if (err.response.status === 400){
                throw new Error("Error")
            }
        } else if (err.request){
            throw new Error("No response from server")
        } else {
            throw new Error(`error setting up request: ${err.message}`)
        }
    }
    
}