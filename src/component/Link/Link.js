import React from 'react';
import './Link.css'

const Link = ({route}) => {
    return (
        <div>
                <a href={route.path}>{route.name}</a>
        </div>
    );
};

export default Link;