import React from 'react';
import './Form.css';
import withChange from '../handlerComponents/withChange';
import withSubmit from '../handlerComponents/withSubmit';
import withContent from './withContent';
import withErrorMessage from './../handlerComponents/withErrorMessage';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

const Form = ({ formType, fields, handleChange, handleSubmit, message, errors }) => {
    const formBody = fields.map((f, idx) =>
        <div key={idx} className='form-group'>
            <label className='control-label col-sm-4' htmlFor={f.name}>{f.val}</label>
            <input name={f.name} id={f.name} className='form-control' type={f.type} onChange={handleChange} />
            {errors && <span className='error'>{errors[f.name]}</span>}
        </div>
    );

    return (
        <div className={formType + '-panel panel-default col-md-4 border'}>
            <div className="panel-heading">
                <h1 className='panel-title'>{formType}</h1>
            </div>
            <div className='panel-body'>
                <form className={formType + '-form'} onSubmit={handleSubmit}>
                    <fieldset>
                        <span className='error'>{message}</span>
                        {formBody}
                        <input name='submit' id='submit' className='btn btn-sm btn-success' type='submit' value='submit' />
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

const LoginForm = compose(    
    withContent('LoginForm'),
    withErrorMessage,
    withChange,
    withRouter,
    withSubmit    
)(Form);

const RegisterForm = compose(    
    withContent('RegisterForm'),
    withErrorMessage,
    withChange,
    withRouter,
    withSubmit
)(Form);

export { LoginForm, RegisterForm };