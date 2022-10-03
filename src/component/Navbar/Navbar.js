import React from 'react';
import Link from '../Link/Link';

const Navbar = () => {

    const route = [
        {
            id: 1,
            name: 'Home',
            path: '/home'
        },
        {
            id: 2,
            name: 'Products',
            path: '/products'
        },
        {
            id: 3,
            name: 'Orders',
            path: '/orders'
        },
        {
            id: 4,
            name: 'About',
            path: '/about'
        },
        {
            id: 5,
            name: 'Contacts',
            path: '/contacts'
        },
    ]

    return (
        <ul className='bg-slate-300 flex justify-evenly'>

            {route.map(route => <Link route={route}></Link>)}
        </ul>
    );
};

export default Navbar;