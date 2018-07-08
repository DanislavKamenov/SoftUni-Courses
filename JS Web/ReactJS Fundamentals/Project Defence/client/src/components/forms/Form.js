import React, { Component, Children } from 'react';
import './Form.css';
import webApi from '../../webModule/webApi';
import withErrorMessage from './../handlerComponents/withErrorMessage';

class BoundForm extends Component {
    constructor(props) {
        super(props);
        this.state = stateFromChildren(this.props.children);
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        webApi.post(this.props.endPoint, this.state)
        .then((res) => {        
            this.props.onSubmit(res);
        })
        .catch(err => {
            this.props.getErrors(err);
            console.log(err);
        });       
    }

    render() {
        return (
            <div className={'form-panel panel-default col-md-4 border'}>
                <div className="panel-heading">
                    <h1 className='panel-title'>{this.props.formTitle}</h1>
                </div>
                <div className='panel-body'>
                    <form className={'form'} onSubmit={this.handleSubmit}>
                        <fieldset>
                            <span className='error'>{this.props.message}</span>
                            {Children.map(this.props.children, child => {                                 
                                if (shouldHaveState(child)) {
                                    return <input onChange={this.handleChange} value={this.state[child.props.name]} {...child.props} />
                                }
                                if (isErrorField(child)) {
                                    return <span {...child.props}>{this.props.errors[child.props['data-name']]}</span>
                                }
                                return child;
                            })}
                        </fieldset>
                    </form>
                </div>
            </div>
        );
    }
};

function shouldHaveState(child) {
    return child.type === 'input' && child.props.name;
}

function isErrorField(child) {
    return child.type === 'span' && child.props.className === 'error';
}

function stateFromChildren(chidren) {
    const inputs = {};
    Children.forEach(chidren, child => {
        if (shouldHaveState(child)) {
            inputs[child.props.name] = '';
        }
    });

    return inputs;
}

export default withErrorMessage(BoundForm);