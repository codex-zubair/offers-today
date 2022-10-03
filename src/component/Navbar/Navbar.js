import React from 'react';
import Link from '../Link/Link';
// import {HiMenuAlt4} from 'react-hero-icon/solid';
import {Menu} from 'react-hero-icon/solid';

const Navbar = () => {
    const route = [

        {
            name: 'Home',
            link: '/home'
        },
        {
            name: 'Products',
            link: '/home'
        },
        {
            name: 'Users',
            link: '/home'
        },
        {
            name: 'Login',
            link: '/home'
        },

    ]
    return (
        <nav className='bg-slate-600'>
        
            <ol className='flex w-6/12 mx-auto justify-between py-5'>
          

           <button className='text-white'><Menu/></button>
            {route.map((route, index) => <Link key={index} route ={route}></Link>)}
            </ol>
           
        </nav>
    );
};

export default Navbar;