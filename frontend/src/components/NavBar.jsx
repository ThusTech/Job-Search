import { Link } from 'react-router-dom'
import { FiSearch } from 'react-icons/fi';
import logo from '../assets/images/logo-color.png'


export default function NavBar(){

    return (
        <nav className='bg-gray-600 border-b border-indigo-500'>
            <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
                <div className='flex h-20 items-center justify-between'>
                    <div className='flex flex-1 items-center justify-center md:items-stretch md:justify-start'>
                        <a className='flex flex-shrink-0 items-center mr-4'>
                            <img className='h-10 rounded-full w-auto hidden md:block mx-8' src={logo} alt='Jobs'/>
                            <div className='relative text-white w-100'>
                                <input
                                    type="text"
                                    className="w-full border-2 rounded-xl text-gray-800 pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-300 transition"
                                    placeholder="Search..."
                                    // value={search}
                                    // onChange={(e) => setSearch(e.target.value)}
                                    />
                                    <FiSearch className="absolute left-3 top-2.5 text-gray-400" />
                            </div>
                        </a>

                        <div className='md:ml-auto'>
                            <div className='flex space-x-2'>
                                <Link className='hover:bg-blue-900 hover:text-white rounded-md text-white px-3 py-2' 
                                to="/">
                                    Home
                                </Link>

                                <Link className='hover:bg-blue-900 hover:text-white rounded-md text-white px-3 py-2' 
                                to="/jobs">
                                    Jobs
                                </Link>

                                <Link className='hover:bg-blue-900 hover:text-white rounded-md text-white px-5 py-2'
                                to='/login'>
                                    Login
                                </Link>

                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}