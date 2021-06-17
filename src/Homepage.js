import React from 'react';
import { NavLink } from 'react-router-dom';

function Homepage() {
    return (
        <div className='Homepage'>
            <h1>Welcome to Air Ball News!!</h1>
            <br />
            <NavLink exact to='/login'>
                <h3>Login Here</h3>
            </NavLink>
            <NavLink exact to='/signup'>
                <h3>Signup Here</h3>
            </NavLink>
        </div>)
}

export default Homepage;