import React from 'react';

import Homepage from './Homepage';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import Teams from './Teams';
import News from './News';
import './App.css';

import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Route exact path='/'>
          <Homepage />
        </Route>
        <Route exact path='/login'>
          <LoginForm />
        </Route>
        <Route exact path='/signup'>
          <SignupForm />
        </Route>
        <Route exact path='/teams'>
          <Teams />
        </Route>
        <Route exact path='/news'>
          <News />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;