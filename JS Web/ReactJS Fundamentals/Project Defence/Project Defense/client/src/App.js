import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';
import RegisterPage from './components/pages/RegisterPage';

import './App.css';

class App extends Component { 
  render() {
    return (
        <div className="App">
        <Switch>
            <Route path='/' exact component={HomePage}/>
            <Route path='/login' component={LoginPage}/>  
            <Route path='/register' component={RegisterPage}/>      
        </Switch>
        </div>
    );
  }
}

export default App;
