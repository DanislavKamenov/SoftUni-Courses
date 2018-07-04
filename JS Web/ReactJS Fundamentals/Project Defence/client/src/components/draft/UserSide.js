import React, { Component } from 'react';
import webApi from '../../webModule/webApi';

class UserSide extends Component {
    componentDidMount() {
        webApi.get('draft/' + this.props.match.params.id, console.log);
    }

    render() {
        return <div>User Side</div>
    }
}

export default UserSide;