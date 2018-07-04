import React, {Component} from 'react';
import './List.css';

class List extends Component {
    render() {
        const pokemon = this.props.pokemon.map((p, idx) => 
                <div key={idx} className="pokemon">
                    <h3 className="pokemon-name">{p.pokemonName}</h3>
                    <img src={p.pokemonImg} alt={p.pokemonName} className="pokemon-image"/>
                    <p className="pokemon-info">{p.pokemonInfo}</p>
                </div>    
        );
        
        return (
            <div className='list pokemon-list'>
                {pokemon}
            </div>
        );
    }
}

export default List;