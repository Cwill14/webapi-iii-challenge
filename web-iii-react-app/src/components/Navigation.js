import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav>
            <h1>LOTR</h1>
            <NavLink className='link' exact to='/'>User List</NavLink>    
            <NavLink className='link' to='/form'>Form</NavLink>
        </nav>
    );
};

export default Navigation;