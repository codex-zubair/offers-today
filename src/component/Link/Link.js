import React from 'react';

const Link = ({route}) => {
        const {link, name} = route;
    return (
        <li className=' text-white hover:text-blue-600'>
            <a href= {link}>{name}</a>
        </li>
    );
};

export default Link;