import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import UserContext from '../auth/UserContext';
import './Navigation.css';

/** Navigation bar for site that shows up on every page
 * 
 * When logged in, it shows links for profile page, teams, and signout
 * 
 * When not logged in, it shows login and signup links
 */

function Navigation({ logout }) {
    const { currentUser } = useContext(UserContext);
    console.debug("Navigation", "currentUser=", currentUser);

    function loggedInNav() {
        return (
            <ul className='navbar-nav mr-auto'>
                <li className='nav-item mr-4'>
                    <NavLink className='nav-link' to='/profile'>
                        Profile
                    </NavLink>
                </li>
                <li className='nav-item mr-4'>
                    <NavLink className='nav-link' to='/teams'>
                        Teams
                    </NavLink>
                </li>
                <li className='nav-item'>
                    <Link className='nav-link' to='/' onClick={logout}>
                        Log out
                    </Link>
                </li>
            </ul>
        );
    }

    function loggedOutNav() {
        return (
            <ul className='navbar nav ml-auto'>
                <li className='nav-item mr-4'>
                    <NavLink className='nav-link' to='/login'>
                        Login
                    </NavLink>
                </li>
                <li className='nav-item mr-4'>
                    <NavLink className='nav-link' to='/signup'>
                        Signup
                    </NavLink>
                </li>
            </ul>
        );
    }

    return (
        <nav className='Navigation navbar navbar-expand-md fixed-top py-3 navbar-light justify-content-between'>
            <Link className='navbar-brand' to='/'>
                Air Ball News
            </Link>
            { currentUser ? loggedInNav() : loggedOutNav() }
        </nav>
    )
}

export default Navigation;