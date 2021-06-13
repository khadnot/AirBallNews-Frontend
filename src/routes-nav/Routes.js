import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Homepage from '../Homepage';
import LoginForm from '../LoginForm';
import SignupForm from '../SignupForm';
import ProfileForm from '../ProfileForm';
import Teams from '../Teams';
import News from '../News';
import PrivateRoute from './PrivateRoute';

/** Routes for site.
 * 
 *  Some pages should only be visible when logged in. 
 * 
 *  They're wrapped by <PrivateRoute>, which is an authorization component.
 * 
 *  If not logged in, route redirects to homepage.
 */

function Routes({ login, signup }) {
    console.debug(
        'Routes',
        `login=${typeof login}`,
        `register=${typeof register}`
    );

    return (
        <div className='pt-5'>
            <Switch>

                <Route exact path='/'>
                    <Homepage />
                </Route>
                
                <Route exact path='/login'>
                    <LoginForm login={ login } />
                </Route>
                
                <Route exact path='/signup'>
                    <SignupForm signup={ signup } />
                </Route>
                
                <PrivateRoute exact path='/teams'>
                    <Teams />
                </PrivateRoute>
                
                <PrivateRoute exact path='/news'>
                    <News />
                </PrivateRoute>
                
                <PrivateRoute exact path='/profile'>
                    <ProfileForm />
                </PrivateRoute>

                <Redirect to='/' />
                
            </Switch>
        </div>
    );
}

export default Routes;