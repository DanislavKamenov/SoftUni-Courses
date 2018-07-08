import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';
import RegisterPage from './components/pages/RegisterPage';
import CreateDraftPage from './components/pages/CreateDraftPage';
import Draft from './components/draft/Draft';

const Router = () => (
    <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/login' component={LoginPage} />
        <Route path='/register' component={RegisterPage} />
        <Route path='/draft/start' component={CreateDraftPage} />
        <Route path='/draft/:id' component={Draft} />        
    </Switch>
);

export default Router;