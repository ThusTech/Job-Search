export default function JobPage({id}){
    return (
        <section className="bg-white min-h-screen flex items-center justify-center py-20"> 
            <div className="w-full max-w-lg bg-white rounded-3xl shadow-lg p-8 border-2 border-gray">
                <div className="text-center mb-8">
                    <div class="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center">
                        <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4"></path>
                        </svg>
                    </div>

                    <h1 class="text-3xl font-extrabold text-gray-800 mt-4">Senior React Developer</h1>
                    <p class="text-gray-500">NewTek Solutions - Boston, MA</p>
                </div>

                <div class="flex items-center justify-between bg-blue-50 p-4 rounded-xl mb-6">
                    <span class="text-blue-600 font-bold">Full-Time</span>
                    <span class="text-blue-600 font-bold text-lg">$70K - $80K</span>
                </div>

                <div class="mb-6">
                    <h2 class="flex items-center text-xl font-semibold text-gray-800 mb-2">
                        <svg class="w-6 h-6 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M3 6h18M3 14h18M3 18h18"></path>
                        </svg>
                        Job Description
                    </h2>
                    <p class="text-gray-700 text-sm">
                        We are seeking a talented Front-End Developer to join our team in Boston, MA. The ideal candidate will have strong skills in HTML, CSS, and JavaScript, with experience working with modern JavaScript frameworks such as React or Angular.
                    </p>
                </div>

                <div class="mb-6">
                    <h2 class="flex items-center text-xl font-semibold text-gray-800 mb-2">
                        <svg class="w-6 h-6 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-5a2 2 0 014 0v5M5 10l1-2m13 0l-1-2M4 10h16l-1.5 13H5.5L4 10zm5.5 0v5m5-5v5"></path>
                        </svg>
                        About NewTek Solutions
                    </h2>
                    <p class="text-gray-700 text-sm">
                        NewTek Solutions is a leading technology company specializing in web development and digital solutions. We pride ourselves on delivering high-quality products and services to our clients while fostering a collaborative and innovative work environment.
                    </p>
                </div>

                <div class="p-4 bg-gray-50 rounded-xl mb-6">
                    <p class="text-gray-700 text-sm">
                        <span class="font-semibold">Email:</span> contact@teksolutions.com
                    </p>
                    <p class="text-gray-700 text-sm">
                        <span class="font-semibold">Phone:</span> 555-555-5555
                    </p>
                </div>

                <button class="w-full py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition duration-200">
                    Apply Now
                </button>
            </div>
        </section>
    )
}