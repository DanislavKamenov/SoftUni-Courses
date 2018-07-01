import React, {Component} from 'react';
import Form from './Form';

const LOGIN_ENDPOINT = '/auth/login';

class LoginForm extends Component {
    saveToken = (res) => {
        localStorage.setItem('token', res.token); 
    }  
    render() {    
        let loginForm = {
            formType: 'login',
            endPoint: LOGIN_ENDPOINT, 
            redirect: '/',
            callback: this.saveToken,           
            fields: [
                { name: 'email', type: 'email', val: 'email' }, 
                { name: 'password', type: 'password', val: 'Password' }
            ],            
        };        
        return <Form {...loginForm}/>;
    }
}

export default LoginForm;