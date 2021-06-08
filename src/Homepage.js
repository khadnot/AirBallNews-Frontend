import React from 'react';
import { NavLink } from 'react-router-dom';

function Homepage() {
    return (
        <div className='Homepage'>
            <h1>Welcome to my Homepage!! Home of the Raptors!!</h1>
            <br />
            <NavLink exact to='/signup'>
                <h3>Signup Here!</h3>
            </NavLink>
            <NavLink exact to='/login'>
                <h3>Login Here!</h3>
            </NavLink>
            <NavLink exact to='/teams'>
                <h3>Teams Page Here!</h3>
            </NavLink>
            <NavLink exact to='/news'>
                <h3>Click here for News!</h3>
            </NavLink>
        </div>)
}

export default Homepage;