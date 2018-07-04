import React from 'react';
import authService from '../../webModule/authService';

const withContent = (contentType) => (WrappedComponent) => (props) => {
    let formData;
    switch (contentType) {
        case 'LoginForm':
            formData = {
                formType: 'login',                
                redirect: '/',
                onSubmit: authService.logIn,
                fields: [
                    { name: 'email', type: 'email', val: 'email' },
                    { name: 'password', type: 'password', val: 'Password' }
                ],
            };
            break;
        case 'RegisterForm':
            formData = {
                formType: 'register',               
                redirect: '/',
                onSubmit: authService.register,
                fields: [
                    { name: 'email', type: 'email', val: 'Email' },
                    { name: 'name', type: 'text', val: 'name' },
                    { name: 'password', type: 'password', val: 'Password' },
                    { name: 'repeatPassword', type: 'password', val: 'Repeat Password' }
                ]
            };
            break;
        default:
            return null;
    }

    return <WrappedComponent {...formData} />
}

export default withContent;