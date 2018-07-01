import React, {Component} from 'react';
import Form from './Form';
import formGenerator from './formGenerator';

const CREATE_ENDPOINT = '/pokedex/create';

class CreateForm extends Component {    
    render() {
        let createForm = formGenerator.generateForm(
            'pokemon',
            CREATE_ENDPOINT,
            this.props.updateList, 
            ['pokemonName', 'text', 'pokemon name'], 
            ['pokemonImg', 'text', 'pokemon image'],
            ['pokemonInfo', 'text', 'pokemon info']
            
        );
        return <Form {...createForm}/>;
    }
}

export default CreateForm;