import React, { Component } from 'react';
import timer from 'easytimer.js'
import { compose } from 'recompose';
import withChange from '../handlerComponents/withChange';
import withSubmit from '../handlerComponents/withSubmit';

class RequestDraft extends Component {
    constructor(props) {
        super(props);
        this.state = {
            banCount: '',
            seconds: ''
        }
        let countdown = new timer({ countdown: true, startValues: {seconds: 30} })
        countdown.start();
        countdown.addEventListener('secondsUpdated', () => this.setState({seconds: countdown.getTimeValues().toString()}));
    }    

    render() {
        return <div>draftStart
            <form onSubmit={this.props.handleSubmit}>
            <input type='text' name='banCount' onChange={this.props.handleChange} placeholder='Enter Ban Count' />
            <input type="submit" value="submit"/>
            <div>{this.state.seconds}</div>
            </form>
        </div>;
    }
}

const RequestWithChangeAndSubmit = compose(
    withChange,
    withSubmit
)(RequestDraft);

export default RequestWithChangeAndSubmit;