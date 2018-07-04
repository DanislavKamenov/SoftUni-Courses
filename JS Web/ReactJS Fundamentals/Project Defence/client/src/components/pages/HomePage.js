import React, { Component } from 'react';
import LoginButton from '../buttons/LoginButton';
import RegisterButton from '../buttons/RegisterButton';
import authService from '../../webModule/authService';

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {user: authService.getProfile().name  || 'Guest'};
    }    

    render() {
        return (
            <div className="home-page">
                <LoginButton />
                <RegisterButton />
                <h1>Welcome {this.state.user}</h1>
            </div>
        )
    }
}

export default HomePage;