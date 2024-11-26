import axios from "axios";

export default async function SignupService(firstName, lastName, email, password) {

    try{
        const response = await axios.post(
            'http://xxx/api/auth/login',
            {
                firstname: firstName,
                lastname: lastName,
                email: email,
                password: password
            })
        
            return response.data
    }catch (error){

    }
    
}