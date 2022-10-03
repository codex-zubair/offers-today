import React, { useState } from 'react';
import Link from '../Link/Link';
// import {HiMenuAlt4} from 'react-hero-icon/solid';
import {Menu,Stop} from 'react-hero-icon/solid';

const Navbar = () => {

    const [open, setOpen] = useState(false);

    const route = [

        {
            name: 'Home',
            link: '/home'
        },
        {
            name: 'Products',
            link: '/products'
        },
        {
            name: 'Users',
            link: '/users'
        },
        {
            name: 'Login',
            link: '/login'
        },

    ]
    return (
        <nav className='bg-slate-600 relative'>
        
           <button className={`text-white lg:hidden md:hidden block p-3`} onClick={()=> setOpen(!open)} >{open?<Stop/> : <Menu/>} </button>
            <ol className={`md:flex text-center md:static lg:static md:w-6/12 w-11/12 mx-auto justify-between py-5 ${open? '':' sm:absolute sm:top-[-200px]'}`}>
            
            {route.map((route, index) => <Link key={index} route ={route}></Link>)}
            </ol>
           
        </nav>
    );
};

export default Navbar;