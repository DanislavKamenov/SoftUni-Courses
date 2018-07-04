import React, { Component } from 'react';

const withErrorMessage = (WrappedComponent) => class WithErrorMessage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: '',
            errors: ''
        }        
    }

    getErrors = (res) => this.setState({message: res.message || '', errors: res.errors || ''});

    render = () => <WrappedComponent getErrors={this.getErrors} {...this.state} {...this.props} />
}

export default withErrorMessage;