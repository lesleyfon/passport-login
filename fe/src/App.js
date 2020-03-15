import React from 'react';
import logo from './logo.svg';
import {Route} from 'react-router-dom'
import './App.css';
import Form from './Form';
import Profile from './Profile';

function App() {
  return (
    <div className="App">
        <Route 
          path='/'
          exact
          component={Form}
        />
        <Route 
          path='/profile'
          exact
          component={Profile}
        />

    </div>
  );
}

export default App;
