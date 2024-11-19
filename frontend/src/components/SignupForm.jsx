

export default function SignupForm(){
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="bg-gray-100 w-full max-w-md p-8 space-y-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-center text-gray-800">Signup</h2>
                <form className="space-y-4">
                    <div>
                        <label 
                        for='firstName'
                        className="block text-sm font-medium text-gray-700">First Name</label>
                        <input 
                        id = 'firstName'
                        type="text"
                        placeholder="Jane"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Last Name</label>
                        <input type="text"
                        placeholder="Doe"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">ID Number</label>
                        <input type="number"
                        placeholder="9999999999999"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email Address</label>
                        <input type="email"
                        placeholder="janeDoe@gmail.com"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>


                    <div>
                        <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                        <input type="text"
                        placeholder="0973233233"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    <button
                    className="w-full px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-500" 
                    type="submit">
                        Register
                    </button>
                </form>
            </div>
        </div>
    )
}