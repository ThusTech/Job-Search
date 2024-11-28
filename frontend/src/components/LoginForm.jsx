import {Link} from 'react-router-dom'
import { useState } from 'react'
import loginService from '@/services/LoginService';

export default function LoginForm(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async(event) =>{
        event.preventDefault(); // Prevent page reload

        try{
            await loginService(email, password);
            alert('login successful');
        }catch (err){
            alert(`login failed: ${err.message}`)
        }
    }


    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="w-full max-w-md p-8 space-y-6 bg-gray-100 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-center text-gray-800">Login</h2>
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <label for="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(event)=> setEmail(event.target.value)}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <label for="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(event)=> setPassword(event.target.value)}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <label class="flex items-center">
                        <input type="checkbox" class="w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring focus:ring-blue-500" />
                        <span className="ml-2 text-sm text-gray-600">Remember me</span>
                        </label>
                        <Link to="*" class="text-sm text-blue-600 hover:underline">
                        Forgot password?
                        </Link>
                    </div>
                    <button
                        type="submit"
                        className="w-full px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-500"
                    >
                        Login
                    </button>
                </form>
                <p className="text-sm text-center text-gray-600">
                    Don't have an account?
                    <Link to="/signup" className="text-blue-600 hover:underline">
                    Sign up
                    </Link>
                </p>
            </div>
        </div>
    )
}