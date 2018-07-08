import React, {Component} from 'react';
import BoundForm from '../forms/Form';
import authService from '../../webModule/authService';

class Loginpage extends Component {
    onFormSubmit = (res) => {
        authService.logIn(res);
        this.props.history.push('/');
    }

    render() {        
        return (
            <div className='page register-page'>
                <BoundForm formTitle='REGISTER' onSubmit={this.onFormSubmit} endPoint={'auth/signup'}>
                    <label className='control-label col-sm-4' htmlFor='email'>Email:</label>
                    <input name='email' id='email' className='form-control' type='email' />
                    <span className='error' data-name='email'></span>
                    <label className='control-label col-sm-4' htmlFor='name'>Name:</label>
                    <input name='name' id='name' className='form-control' type='text' />
                    <span className='error' data-name='email'></span>
                    <label className='control-label col-sm-4' htmlFor='password'>Password:</label>
                    <input name='password' id='password' className='form-control' type='password' />
                    <span className='error' data-name='password'></span>
                    <label className='control-label col-sm-4' htmlFor='repeatPassword'>Password:</label>
                    <input name='repeatPassword' id='repeatPassword' className='form-control' type='password' />
                    <span className='error' data-name='password'></span>
                    <input id='submit' className='btn btn-sm btn-success' type='submit' value='Register' />
                </BoundForm>
            </div>
        )
    }
}

export default Loginpage;