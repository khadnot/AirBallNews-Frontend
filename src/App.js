import React, { useState, useEffect } from 'react';
import { BrowserRouter } from "react-router-dom";
import useLocalStorage from "./hooks/useLocalStorage";
import Navigation from "./routes-nav/Navigation";
import Routes from "./routes-nav/Routes";
import Api from './api';
import UserContext from "./auth/UserContext";
import jwt from 'jsonwebtoken';

// Key name for storing token in localStorage for "remember me" re-login
export const TOKEN_STORAGE_ID = "api-token";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useLocalStorage(TOKEN_STORAGE_ID);

  // Load user info from API. Doesn't run until a user is logged in with a token

  useEffect(function loadUserInfo() {
    console.debug("App useEffect loadUserInfo", "token=", token);

    async function getCurrentUser() {
      if (token) {
        try {
          let { username } = jwt.decode(token);
          Api.token = token;
          let currentUser = await Api.getCurrentUser(username);
          setCurrentUser(currentUser);
        } catch(err) {
          console.error('App loadUserInfo: problem loading', err);
          setCurrentUser(null);
        }
      }
    }
    getCurrentUser();
  }, [token]);

  // Handles logging out of site
  function logout() {
    setCurrentUser(null);
    setToken(null);
  }

  // Handles signup to site
  async function signup(signupData) {
    try {
      let token = await Api.signup(signupData);
      setToken(token);
      return { success: true }
    } catch(err) {
      console.log('signup failed', err);
      return { success: false, err };
    }
  }

  // Handles log in to site
  async function login(loginData) {
    try {
      let token = await Api.login(loginData);
      setToken(token);
      return { success: true };
    } catch (err) {
      console.error("login failed", err);
      return { success: false, err };
    }
  }

  return (
    <BrowserRouter>
      <UserContext.Provider
          value={{ currentUser, setCurrentUser}}>
        <div className='App'>
          <Navigation logout={logout} />
          <Routes login={login} signup={signup} />
        </div>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;