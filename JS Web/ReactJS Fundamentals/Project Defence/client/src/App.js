import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';
import RegisterPage from './components/pages/RegisterPage';
import RequestDraft from './components/draft/ReuqestDraft';

import './App.css';
import UserSide from './components/draft/UserSide';

class App extends Component { 
  render() {
    return (
        <div className="App">
        <Switch>
            <Route path='/' exact component={HomePage} />
            <Route path='/login' component={LoginPage} />  
            <Route path='/register' component={RegisterPage} />     
            <Route path='/draft/start' component={RequestDraft} />
            <Route path='/draft/:id' component={UserSide} />
            <Route path='/logout' /> 
        </Switch>
        </div>
    );
  }
}

export default App;
