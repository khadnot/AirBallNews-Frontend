import React from 'react';
import { NavLink } from 'react-router-dom';

function Homepage() {
    return (
        <div className='Homepage'>
            <h1>Welcome to Air Ball News!!</h1>
            <br />
            <NavLink exact to='/teams'>
                <h3>Teams Page Here!</h3>
            </NavLink>
            <NavLink exact to='/news'>
                <h3>Click here for News!</h3>
            </NavLink>
        </div>)
}

export default Homepage;