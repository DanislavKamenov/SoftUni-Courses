import React, {Component} from 'react';
import CreateForm from '../forms/CreateForm';
import List from '../partials/List';
import webApi from '../../webModule/webApi';

const POKEDEX_ENDPOINT = '/pokedex/pokedex'

class CreatePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemon: []
        }
    }

    componentDidMount() {
        this.updateList();
    }

    updateList = (res) => {
        console.log('updating');
        webApi.get(POKEDEX_ENDPOINT, res => this.setState({pokemon: res.pokemonColection}));
    }

    render() {               
        return (
            <div className='page create-page'>                
                <CreateForm updateList={this.updateList} />
                <List pokemon={this.state.pokemon} />
            </div>
        )
    }
}

export default CreatePage;