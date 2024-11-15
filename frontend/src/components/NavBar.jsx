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
    MenuIcon
} from 'lucide-react'


export default function NavBar(){

    // const [search, setSearch] = useState('')

    return (
        <nav className='bg-gray-600 border-b border-indigo-500'>
            <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
                <div className='flex h-20 items-center justify-between'>
                    <div className='flex flex-1 items-center justify-center md:items-start justify-start'>
                        <a className='flex flex-shrink-0 items-center mr-4'>
                            <img className='h-10 rounded-full w-auto hidden md:block mx-8' src={logo} alt='Jobs'/>
                            <div className='relative text-white w-200'>
                                <input
                                    type="text"
                                    className="w-full border-2 rounded text-gray-800 pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-300 transition"
                                    placeholder="Search..."
                                    // value={search}
                                    // onChange={(e) => setSearch(e.target.value)}
                                    />
                                    <FiSearch className="absolute left-3 top-2.5 text-gray-400" />
                            </div>
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
                                    <DropdownMenuTrigger>
                                        <MenuIcon className='text-white'/>
                                    </DropdownMenuTrigger>
                                    
                                    <DropdownMenuContent className='bg-gray-600 w-56 rounded border border-indigo-500'>
                                        <DropdownMenuGroup className='px-5 py-2'>
                                            <DropdownMenuLabel>
                                                <span className='text-white'>My Account</span>
                                            </DropdownMenuLabel>
                                            <DropdownMenuSeparator className='py-1 border-b'/>
                                            
                                            <DropdownMenuItem className='pt-4 flex'>
                                                <LogIn className='text-white'/>
                                                <Link className='hover:text-indigo-500 text-white mx-4'
                                                to='/login'>
                                                    Login
                                                </Link>
                                            </DropdownMenuItem>
                                            <DropdownMenuItem className='pt-2 flex'>
                                                <User className='text-white'/>
                                                <span className='mx-4 text-white'>Profile</span>
                                            </DropdownMenuItem>
                                            <DropdownMenuItem className='pt-2 flex'>
                                                <Settings className='text-white'/>
                                                <span className='mx-4 text-white'>Settings</span>
                                            </DropdownMenuItem>
                                            <DropdownMenuItem className='pt-2 flex'>
                                                <LogOut className='text-white'/>
                                                <span className='mx-4 text-white'>Log out</span>
                                            </DropdownMenuItem>
                                        </DropdownMenuGroup>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}