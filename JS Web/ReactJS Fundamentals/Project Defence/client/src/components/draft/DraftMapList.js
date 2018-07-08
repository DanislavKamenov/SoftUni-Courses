import React, { Component } from 'react';
import webApi from '../../webModule/webApi';
import withErrorMessage from './../handlerComponents/withErrorMessage';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';

class DraftMapListBase extends Component {
    onMapClick = (e) => {       
        webApi.post(`draft/${this.props.match.params.id}`, {mapName: e.target.dataset.name})
            .then((res) => this.props.handleClick(res))
            .catch(this.props.getErrors);
    }

    //TODO rework error handling Component to impelent notifications.

    render() {        
        const maps = this.props.maps.map((m, idx) => m.isAllowed ?
            <li key={idx} data-name={m.name} className='map-item' onClick={this.onMapClick}>{m.name}</li> :
            <li key={idx} className='disabled map-item'>{m.name}</li>
        );
        return <ul>{maps}</ul>;
    }
}

const DraftMapList = compose(
    withRouter,
    withErrorMessage
)(DraftMapListBase);

export default withErrorMessage(DraftMapList);