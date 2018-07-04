import React, { Component } from 'react';
import RegisterButton from '../buttons/RegisterButton';
import { LoginForm } from '../forms/Form';

class LoginPage extends Component {
    render() {            
        return (
            <div className='page login-page'>
                <RegisterButton />
                <LoginForm />
            </div>
        )
    }
}

export default LoginPage;