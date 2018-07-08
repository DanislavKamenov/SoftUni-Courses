import React, { Component } from 'react';
import UnauthNav from './UnauthNav';
import AuthNav from './AuthNav';
import authService from '../../webModule/authService';
import observer from '../../infrastructure/observer';

class NavigationBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn: false
        }
        observer.subscribe(observer.events.loginUser, this.checkLoggedIn);
        observer.subscribe(observer.events.logoutUser, this.checkLoggedIn);
    }

    checkLoggedIn = () => this.setState({isLoggedIn: authService.loggedIn()});

    componentDidMount = () => this.checkLoggedIn();

    render = () => this.state.isLoggedIn ? <AuthNav /> : <UnauthNav />;
}

export default NavigationBar