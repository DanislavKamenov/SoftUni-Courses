import React, { Component } from 'react';
import authService from '../../webModule/authService';
import { withRouter } from 'react-router-dom';

class LogoutLink extends Component {
    onLogoutClick = (e) => {
        e.preventDefault();
        authService.logout();
        this.props.history.push('/');
    }

    render = () => <a className="nav-link" href='' onClick={this.onLogoutClick}>logout</a>
}

export default withRouter(LogoutLink);