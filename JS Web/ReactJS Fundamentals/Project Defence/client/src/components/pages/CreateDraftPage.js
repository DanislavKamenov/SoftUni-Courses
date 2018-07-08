import React, { Component } from 'react';
import BoundForm from '../forms/Form';
import DraftLinkList from '../draft/DraftLinkList';

class CreateDraftPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            teamOneUrl: '',
            teamTwoUrl: '',
            observerUrl: ''
        }        
    }

    getLinks = ({teamOneUrl, teamTwoUrl, observerUrl}) => {        
        this.setState({ teamOneUrl, teamTwoUrl, observerUrl });
    }   

    render() {
        return (
            <div className="create-draft-page">
                <BoundForm formTitle='Create Draft' onSubmit={this.getLinks} endPoint={'draft/start'}>
                    <label className='control-label col-sm-4' htmlFor='banCount'>Number of available bans:</label>
                    <input name='banCount' id='banCount' className='form-control' type='text' />
                    <span className='error' data-name='banCount'></span>
                    <label className='control-label col-sm-4' htmlFor='teamOne'>Team One</label>
                    <input name='firstTeam' className='form-control' id='teamOne' type='radio' value='teamOne' />
                    <label className='control-label col-sm-4' htmlFor='teamTwo'>Team Two</label>
                    <input name='firstTeam' className='form-control' id='teamTwo' type='radio' value='teamTwo' />
                    <label className='control-label col-sm-4' htmlFor='random'>Random</label>
                    <input name='firstTeam' className='form-control' id='random' type='radio' value='random' />
                    <input id='submit' className='btn btn-sm btn-success' type='submit' value='Create' />
                </BoundForm>
                {this.state.teamOneUrl && <DraftLinkList {...this.state} />}
            </div>
        )
    }
}

export default CreateDraftPage;