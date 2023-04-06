import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BoltIcon, Bars3BottomRightIcon , XMarkIcon } from '@heroicons/react/24/solid'
import ActiveLink from '../ActiveLink/Active';
import img from '../../image/image.jpg'

const Header = () => {
    const {isMenuOpen, setIsMenuOpen} = useState(false)


    return (
        
        <nav className='bg-slate-400 md:flex justify-between items-center h-20  md:h-20 '>
    
                <Link to='/home' className='inline-flex items-center md:ml-10'>
                <BoltIcon className='h-10 w-10 text-orange-600'></BoltIcon>
                <h2 className='text-2xl md:text-4xl font-bold text-blue-800 ml-8'><span className='text-2xl md:text-4xl font-bold text-pink-700'>ONLINE</span> BOOKSHOP</h2>
                </Link>

                <div className='space-x-6 sm:space-x-16 md:space-x-20 ml-10 mr-16 text-xl'>
                <ActiveLink  to="/home">Home</ActiveLink >
                <ActiveLink className='text-xl font-semibold mr-10 md:mr-16' to ="/books">Books</ActiveLink>
                <ActiveLink className='text-xl font-semibold mr-10 md:mr-16' to="/about">About</ActiveLink>
                <ActiveLink className='text-xl font-semibold mr-10 md:mr-16' to="/contact">Contact</ActiveLink>
                

                </div>
            



            </nav>
        
    );
};

export default Header;