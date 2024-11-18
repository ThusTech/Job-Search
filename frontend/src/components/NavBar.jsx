import { Link } from 'react-router-dom'
import { FiSearch } from 'react-icons/fi';
import logo from '../assets/images/logo-color.png'
import { useState } from 'react';
import { 
    DropdownMenu, 
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator, 
    DropdownMenuItem,
    DropdownMenuGroup} from '@radix-ui/react-dropdown-menu';

import {LogOut,
    User,
    Settings,
    LogIn,
    MenuIcon,
    HomeIcon,
    PenIcon
} from 'lucide-react'


export default function NavBar(){

    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className='bg-gray-600 border-b border-indigo-500'>
            <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
                <div className='flex h-20 items-center justify-between'>
                    <div className='flex flex-1 items-center justify-center md:items-start justify-start'>
                        <a className='flex flex-shrink-0 items-center mr-4'>
                            <h2 className='mx-auto pr-2 text-indigo-500 text-2xl font-bold md:pr-5 md:text-4xl md:font-extrabold'>StudentHub</h2>
                            
                                <input
                                    type="text"
                                    className="block border-2 rounded text-gray-800 pl-10 pr-4 py-2"
                                    placeholder="Search..."
                                    // value={search}
                                    // onChange={(e) => setSearch(e.target.value)}
                                    />
                            
                        </a>

                        <div className='md:ml-auto'>
                            <div className='flex space-x-2'>
                                <Link className='hover:bg-blue-900 hover:text-white rounded-md text-white px-3 py-2 hidden md:block' 
                                to="/">
                                    Home
                                </Link>

                                <Link className='hover:bg-blue-900 hover:text-white rounded-md text-white px-3 py-2 hidden md:block' 
                                to="/jobs">
                                    Jobs
                                </Link>

                                <DropdownMenu>
                                    <DropdownMenuTrigger onMouseEnter={()=> setIsOpen(true)}>
                                        <MenuIcon className='text-white'/>
                                    </DropdownMenuTrigger>

                                    { isOpen && (
                                        <DropdownMenuContent 
                                        className='bg-gray-600 w-56 rounded border border-indigo-500'
                                        onMouseLeave = {() => setIsOpen(false)}
                                        >
                                        <DropdownMenuGroup className='px-5 py-2'>
                                            <DropdownMenuLabel>
                                                <span className='text-white'>My Account</span>
                                            </DropdownMenuLabel>
                                            <DropdownMenuSeparator className='py-1 border-b'/>

                                            <DropdownMenuItem className='py-1 flex'>
                                                <HomeIcon className='text-white'/>
                                                <Link className='hover:text-indigo-500 text-white mx-4'
                                                to='/'>
                                                    Home
                                                </Link>
                                            </DropdownMenuItem>

                                            <DropdownMenuItem className='py-1 flex'>
                                                <LogIn className='text-white'/>
                                                <Link className='hover:text-indigo-500 text-white mx-4'
                                                to='/login'>
                                                    Login
                                                </Link>
                                            </DropdownMenuItem>

                                            <DropdownMenuItem className='py-1 flex'>
                                                <User className='text-white'/>
                                                <span className='mx-4 text-white'>Profile</span>
                                            </DropdownMenuItem>

                                            <DropdownMenuItem className='py-1 flex'>
                                                <Settings className='text-white'/>
                                                <span className='mx-4 text-white'>Settings</span>
                                            </DropdownMenuItem>

                                            <DropdownMenuItem className='py-1 flex'>
                                                <PenIcon className='text-white'/>
                                                <span className='mx-4 text-white'>Services</span>
                                            </DropdownMenuItem>

                                            <DropdownMenuItem className='py-1 flex'>
                                                <LogOut className='text-white'/>
                                                <span className='mx-4 text-white'>Log out</span>
                                            </DropdownMenuItem>
                                        </DropdownMenuGroup>
                                    </DropdownMenuContent>
                                    )}
                                    
                                </DropdownMenu>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}