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
    PenIcon,
    Joystick,
} from 'lucide-react'


export default function NavBar(){

    const [isOpen, setIsOpen] = useState(false)
    const [search, setSearch] = useState('')

    return (
        <nav className='border-b border-indigo-500'>
            <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
                <div className='flex h-20 items-center justify-between'>
                    <div className='flex flex-1 items-center justify-center md:items-start justify-start'>
                        <div className='flex w-full max-w'>
                            <h2 className='mx-auto pr-2 text-indigo-500 text-2xl font-bold md:pr-5 md:text-4xl md:font-extrabold hidden md:block'>StudentHub</h2>
                            
                                <input
                                    type="text"
                                    className="w-full mr-5 block border-2 rounded-lg text-gray-800 pl-10 pr-4 py-2"
                                    placeholder="Search..."
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    />
                            
                        </div>

                        <div className='md:ml-auto'>
                            <div className='relative'>
                                <div className='absolute z-1'>
                                    <DropdownMenu>
                                        <DropdownMenuTrigger className='bg-indigo-100 w-10 px-2 py-2 rounded-lg border' onMouseEnter={()=> setIsOpen(true)}>
                                            <MenuIcon className=''/>
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
                                                    <Joystick className='text-white'/>
                                                    <Link className='hover:text-indigo-500 text-white mx-4'
                                                    to='/jobs'>
                                                        Jobs
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
                                                    <Link className='hover:text-indigo-500 text-white mx-4'
                                                    to='/profile'>
                                                        Profile
                                                    </Link>
                                                </DropdownMenuItem>

                                                <DropdownMenuItem className='py-1 flex'>
                                                    <Settings className='text-white'/>
                                                    <Link className='hover:text-indigo-500 text-white mx-4'
                                                    to='/settings'>
                                                        Settings
                                                    </Link>
                                                </DropdownMenuItem>

                                                <DropdownMenuItem className='py-1 flex'>
                                                    <PenIcon className='text-white'/>
                                                    <Link className='hover:text-indigo-500 text-white mx-4'
                                                    to='/tools'>
                                                        Tools
                                                    </Link>
                                                </DropdownMenuItem>

                                                <DropdownMenuItem className='py-1 flex'>
                                                    <LogOut className='text-white'/>
                                                    <Link className='hover:text-indigo-500 text-white mx-4'
                                                    to='/logout'>
                                                        Logout
                                                    </Link>
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
            </div>
        </nav>
    )
}