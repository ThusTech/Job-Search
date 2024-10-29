

export default function AddJobsPage(){
    return (
        <section className="bg-gradient-to-br from-purple-600 to-blue-500 py-40 flex items-center justify-center min-h-screen">
            <div className="w-full max-w-3xl p-10 bg-white rounded-lg shadow-lg transform transition hover:scale-105 duration-300">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-indigo-700 mb-2">Post a Job</h2>
                    <p className="text-gray-600">Fill out the details below to attract top talent.</p>
                </div>
                
                <form action="#" method="POST" className="mt-8 space-y-6">

                
                    <div className="relative">
                        <label for="title" className="absolute -top-2.5 left-3 bg-white px-1 text-sm font-medium text-indigo-700">Job Title</label>
                        <input 
                        type="text" 
                        id="title" 
                        name="title" 
                        placeholder="e.g., Senior React Developer" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>

                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        
                        <div className="relative">
                            <label 
                            for="type" 
                            className="absolute -top-2.5 left-3 bg-white px-1 text-sm font-medium text-indigo-700">
                                Job Type
                            </label>
                            <select id="type" name="type" className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500">
                                <option>Full-Time</option>
                                <option>Part-Time</option>
                                <option>Contract</option>
                                <option>Internship</option>
                            </select>
                        </div>
                        
                        <div className="relative">
                            <label for="location" className="absolute -top-2.5 left-3 bg-white px-1 text-sm font-medium text-indigo-700">Location</label>
                            <input 
                            type="text" 
                            id="location" 
                            name="location" 
                            placeholder="e.g., Boston, MA" 
                            className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
                        </div>
                    </div>

                    <div className="relative">
                        <label for="salary" className="absolute -top-2.5 left-3 bg-white px-1 text-sm font-medium text-indigo-700">Salary Range</label>
                        <input 
                        type="text" 
                        id="salary" 
                        name="salary" 
                        placeholder="e.g., $70K - $80K" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
                    </div>

                    
                    <div className="relative">
                        <label for="description" className="absolute -top-2.5 left-3 bg-white px-1 text-sm font-medium text-indigo-700">Job Description</label>
                        <textarea 
                        id="description" 
                        name="description" 
                        rows="4" 
                        placeholder="Write a brief description of the job..." 
                        className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"></textarea>
                    </div>

                    
                    <div className="pt-6 border-t border-gray-200">
                        <h3 className="text-lg font-semibold text-indigo-700 mb-2">Company Information</h3>
                        
                        <div className="relative mb-4">
                            <label for="company_name" className="absolute -top-2.5 left-3 bg-white px-1 text-sm font-medium text-indigo-700">Company Name</label>
                            <input 
                            type="text" 
                            id="company_name" 
                            name="company_name" 
                            placeholder="e.g., NewTek Solutions" 
                            className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
                        </div>

                        
                        <div className="relative mb-4">
                            <label for="company_description" className="absolute -top-2.5 left-3 bg-white px-1 text-sm font-medium text-indigo-700">Company Description</label>
                            <textarea 
                            id="company_description" 
                            name="company_description" 
                            rows="3" 
                            placeholder="Describe your company..." 
                            className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"></textarea>
                        </div>

                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        
                            <div className="relative">
                                <label for="contact_email" className="absolute -top-2.5 left-3 bg-white px-1 text-sm font-medium text-indigo-700">Contact Email</label>
                                <input 
                                type="email" 
                                id="contact_email" 
                                name="contact_email" 
                                placeholder="contact@teksolutions.com" 
                                className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
                            </div>
                        
                            <div className="relative">
                                <label for="contact_phone" className="absolute -top-2.5 left-3 bg-white px-1 text-sm font-medium text-indigo-700">Contact Phone</label>
                                <input 
                                type="tel" 
                                id="contact_phone" 
                                name="contact_phone" 
                                placeholder="555-555-5555" 
                                className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
                            </div>
                        </div>
                    </div>

                    
                    <div className="mt-8">
                        <button type="submit" className="w-full py-3 px-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-bold rounded-md shadow-lg hover:shadow-2xl hover:from-purple-500 hover:to-indigo-500 transition duration-200 ease-in-out transform hover:scale-105">
                        Post Job
                        </button>
                    </div>
                </form>
            </div>
        </section>
    )
}