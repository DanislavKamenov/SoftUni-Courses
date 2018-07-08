import React, { Component } from 'react';
import DraftCountdown from './DraftCountdown';
import webApi from '../../webModule/webApi';
import DraftMapList from './DraftMapList';
import './List.css';

class Draft extends Component {
    constructor(props) {
        super(props);

        this.state = {
            participant: {},
            timeLeft: '',
            maps: []
        }
    }

    getDraftData = () =>
        webApi
            .get('draft/' + this.props.match.params.id)
            .then(this.setDraftState)
            .catch(console.log);


    setDraftState = (res) =>{        
        res.draft && this.setState({
            participant: res.participant,
            timeLeft: res.draft._expiresAt,
            maps: res.draft.maps
        })
    }



    componentDidMount() {
        this.getDraftData();
    }

    render() {
        console.log(this.state);
        return (
            <div className="draft-body">
                <div className="countdown">
                    <DraftCountdown timeLeft={this.state.timeLeft} />
                </div>
                <div className="team-one">     
                    <button>{this.state.participant.name} Ready!</button>
                </div>
                <div className="team-two">
                    <button>{this.state.participant.name} Ready!</button>
                </div>
                <DraftMapList maps={this.state.maps} handleClick={this.setDraftState} />
            </div>
        );
    }
};

export default Draft;