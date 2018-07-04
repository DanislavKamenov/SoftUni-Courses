import React, {Component} from 'react';
import LoginButton from '../buttons/LoginButton';
import { RegisterForm } from '../forms/Form';

class Loginpage extends Component {
    render() {        
        return (
            <div className='page register-page'>
                <LoginButton />
                <RegisterForm />
            </div>
        )
    }
}

export default Loginpage;