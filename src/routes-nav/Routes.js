import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Homepage from '../Homepage';
import LoginForm from '../LoginForm';
import SignupForm from '../SignupForm';
import ProfileForm from '../ProfileForm';
import Teams from '../Teams';
import TeamPage from '../TeamPage';
import PrivateRoute from './PrivateRoute';

/** Routes for site.
 * 
 *  Some pages should only be visible when logged in. 
 * 
 *  They're wrapped by <PrivateRoute>, which is an authorization component.
 * 
 *  If not logged in, route redirects to homepage.
 * 
 * Change team and news back to private route.......>>>>>>>>>>>>>>>>>
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

                <Route exact path='/' component={Homepage}>
                    <Homepage />
                </Route>
                
                <Route exact path='/login'>
                    <LoginForm login={ login } />
                </Route>
                
                <Route exact path='/signup'>
                    <SignupForm signup={ signup } />
                </Route>
                
                <Route exact path='/teams' component={Homepage}>
                    <Teams />
                </Route>

                <Route exact path='/teams/:team' component={Homepage}>
                    <TeamPage />
                </Route>
                
                <PrivateRoute exact path='/profile'>
                    <ProfileForm />
                </PrivateRoute>

                <Redirect to='/' />
                
            </Switch>
        </div>
    );
}

export default Routes;