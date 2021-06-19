import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css';
import UserContext from './auth/UserContext';

function Homepage() {
    const { currentUser } = useContext(UserContext);
    return (
        <div className="Homepage">
        <div className="container text-center">
          <h1 className="mb-4 font-weight-bold">Air Ball News</h1>
          <p className="lead">News and stats for your favorite basketball team.</p>
          {currentUser
            ? null : (
                <p>
                    <Link className="btn btn-primary font-weight-bold mr-3"
                            to="/login">
                        Log in
                    </Link>
                    <Link className="btn btn-primary font-weight-bold"
                            to="/signup">
                        Sign up
                    </Link>
                </p>
            )}
        </div>
      </div>
    )
}

export default Homepage;