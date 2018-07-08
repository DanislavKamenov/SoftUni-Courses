import React, { Component } from 'react';

const withChange = (WrappedComponent) => class WithChange extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    handleChange = (e) => {

        const { name, value } = e.target;        
        this.setState({ [name]: value });
    }
    
    render() {
        return <WrappedComponent handleChange={this.handleChange} payload={this.state} {...this.props} />
    }
}

export default withChange;