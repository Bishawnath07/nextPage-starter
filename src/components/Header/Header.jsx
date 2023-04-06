import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BoltIcon, Bars3BottomRightIcon , XMarkIcon } from '@heroicons/react/24/solid'
import ActiveLink from '../ActiveLink/Active';

const Header = () => {
    const {isMenuOpen, setIsMenuOpen} = useState(false)


    return (
        
            <nav className='bg-slate-400 md:flex justify-between items-center h-20 md:h-16 '>
                <Link to='/home' className='inline-flex items-center md:ml-10'>
                <BoltIcon className='h-7 w-7 text-orange-600'></BoltIcon>
               <h2 className ='text-4xl md:text-3xl font-bold ml-4'> Next Page</h2>
                </Link>
                <div className='space-x-14 mr-16 text-xl'>
                <ActiveLink  to="/home">Home</ActiveLink >
                <ActiveLink className='text-xl font-semibold mr-16' to ="/books">Books</ActiveLink>
                <ActiveLink className='text-xl font-semibold mr-16' to="/about">About</ActiveLink>

                </div>
            



            </nav>
        
    );
};

export default Header;