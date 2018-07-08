import React, { Component } from 'react';
import authService from '../../webModule/authService';
import observer from '../../infrastructure/observer';

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {user: authService.getProfile().name  || 'Guest'};
        //Resubcribes on every logout
        observer.subscribe(observer.events.logoutUser, this.checkUser);
    }

    checkUser = () => this.setState({user: authService.getProfile().name  || 'Guest'});

    componentDidMount = () => this.checkUser();

    render() {
        return (
            <div className="home-page">                
                <h1>Welcome {this.state.user}</h1>
            </div>
        )
    }
}

export default HomePage;