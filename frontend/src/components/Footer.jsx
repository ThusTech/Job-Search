import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';


export default function Footer(){
    return (
        <footer className="bg-gray-100 py-8 font-sans">
            <div className="container mx-auto px-4">
                <div className="flex flex-col sm:flex-row justify-between">
                    {/* About Us Section */}
                    <div className="mb-10 sm:mb-0 sm:w-1/3">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">About Us</h3>
                        <p className="text-sm text-gray-600 mb-2">
                            At Job-Search, we are redefining how people find jobs and companies find talent. No more endless
                            scrolling or irrelevant listings - just <strong>Smart matches</strong> that connect you to the right
                            opportunities.
                        </p>
                        <p className="text-sm text-gray-600 mb-2">
                            Our AI-driven platform puts <strong>skills, passion, and potential</strong> first, helping job seekers and employers find the perfect fit. 
                            Whether you are looking for remote, part-time, full-time, or work-integrated learning, we make job searching 
                            <strong> simple, inclusive, and meaningful</strong>.
                        </p>
                        <p className="text-sm text-gray-600">
                            Why settle for the old way? Join us and <strong>discover what is next - faster, smarter, better</strong>.
                        </p>
                    </div>

                    {/* Quick Links Section */}
                    <div className="mb-10 sm:mb-0 sm:w-1/3">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Quick Links</h3>
                        <ul className="mt-4 space-y-2">
                            <li>
                                <a href="/" className="text-gray-600 hover:text-gray-800 transition duration-200">Home</a>
                            </li>
                            <li>
                                <a href="/about" className="text-gray-600 hover:text-gray-800 transition duration-200">About Us</a>
                            </li>
                            <li>
                                <a href="/services" className="text-gray-600 hover:text-gray-800 transition duration-200">Services</a>
                            </li>
                            <li>
                                <a href="/contact" className="text-gray-600 hover:text-gray-800 transition duration-200">Contact</a>
                            </li>
                        </ul>
                    </div>

                    {/* Follow Us Section */}
                    <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Follow Us</h3>
                        <div className="flex space-x-4 mt-4">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800 transition duration-200">
                                <FaFacebookF className="h-5 w-5" />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800 transition duration-200">
                                <FaTwitter className="h-5 w-5" />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800 transition duration-200">
                                <FaInstagram className="h-5 w-5" />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800 transition duration-200">
                                <FaLinkedinIn className="h-5 w-5" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center mt-5 text-sm text-gray-600">
                &copy; {new Date().getFullYear()} Job-Search. All rights reserved.
            </div>
        </footer>
    ) 
}