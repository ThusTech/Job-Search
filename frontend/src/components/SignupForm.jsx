import {Link} from 'react-router-dom'
import { useState } from 'react'
import SignupService from '@/services/SignupService'

export default function SignupForm(){
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async (event) => {
        event.preventDefault();

        try{
            await SignupService(firstName,lastName,email,password)
            alert("Register Succefully!")
        } catch (err){
            alert(`Registration failed: ${err.message}`)
        }
    }


    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="bg-gray-100 w-full max-w-md p-8 space-y-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-center text-gray-800">Signup</h2>
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <label
                        className="block text-sm font-medium text-gray-700">
                            First Name
                        </label>

                        <input 
                        type="text"
                        placeholder="Jane"
                        required
                        value = {firstName}
                        onChange={(event)=> setFirstName(event.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Last Name</label>

                        <input type="text"
                        placeholder="Doe"
                        required
                        value={lastName}
                        onChange={(event) => setLastName(event.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email Address</label>

                        <input type="email"
                        placeholder="janeDoe@gmail.com"
                        required
                        value={email}
                        onChange={(event)=> setEmail(event.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Password</label>

                        <input type="text"
                        placeholder="0973233233"
                        required
                        value={password}
                        onChange={(event)=> setPassword(event.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    <button
                    className="w-full px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-500" 
                    type="submit">
                        Register
                    </button>
                </form>

                <p className="text-sm text-center text-gray-600">
                    Already have an account?
                    <Link to="/login" className="text-blue-600 hover:underline">
                        Sign in
                    </Link>
                </p>
            </div>
        </div>
    )
}