import logo from '../assets/images/logo.png'


export default function NavBar(){
    return (
        <nav className='bg-indigo-700 border-b border-indigo-500'>
            <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
                <div className='flex h-20 items-center justify-between'>
                    <div className='flex flex-1 items-center justify-center md:items-stretch md:justify-start'>
                        <a className='flex flex-shrink-0 items-center mr-4'>
                            <img className='h-10 w-auto' src={logo} alt='Jobs'/>
                            <span className='hidden md:block text-white text-2xl font-bold ml-2'>
                                Software Development Jobs
                            </span>
                        </a>

                        <div className='md:ml-auto'>
                            <div className='flex space-x-2'>
                                <a className='text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2' href="*">
                                    Home
                                </a>

                                <a className='text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2' href="*">
                                    Jobs
                                </a>

                                <a className='text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2' href="*">
                                    Add Job
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}