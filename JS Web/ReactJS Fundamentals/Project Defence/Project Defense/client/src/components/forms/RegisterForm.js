import React, { Component } from 'react';
import Form from './Form';

const REGISTER_ENDPOINT = '/auth/signUp';

class RegisterForm extends Component {
    saveToken = (res) => {
        localStorage.setItem('token', res.token);
    }
    render() {
        const registerForm = {
            formType: 'register',
            endPoint: REGISTER_ENDPOINT,
            callback: this.saveToken,
            redirect: '/',
            fields: [
                { name: 'email', type: 'email', val: 'Email' },                
                { name: 'name', type: 'text', val: 'name' },
                { name: 'password', type: 'password', val: 'Password' },
                { name: 'repeatPassword', type: 'password', val: 'Repeat Password' }
            ]
        };
        return <Form {...registerForm} />;
    }
}

export default RegisterForm;