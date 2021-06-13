import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import UserContext from '../auth/UserContext';

/** Routing component to check for valid current user.
 * 
 * If no current user found, redirects to homepage.
*/

function PrivateRoute({ exact, path, children }) {
    const { currentUser } = useContext(UserContext);

    console.debug(
        'PrivateRoute',
        'exact=', exact,
        'path=', path,
        'currentUser=', currentUser,
    );

    if (!currentUser) {
        return <Redirect to='/' />
    }

    return (
        <Route exact={ exact } path={ path }>
            { children }
        </Route>
    );
}

export default PrivateRoute;