import React from 'react';
import './index.css';


class GetKantoPokemons extends React.Component {

    const fetchPokemon = () => {
        
    const getPokemonUrl = id => `https://pokeapi.co/api/v2/pokemon/${id}`

    const pokemonPromises = () => Array(151).fill().map((_, index) =>
        fetch(getPokemonUrl(index + 1)).then(response => response.json()))

    Promise.all(pokemonPromises)
    .then(pokemons => {
    pokemons.reduce((pokemon) => {
        const types = pokemon.types.map(typeInfo => typeInfo.type.name)

    }
    render(){
        return (
            `
                <div className="App">
                <li class="card ${types[0]}">
                    <img class="card-image" alt="${pokemon.name}" src="https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png"/>
                        <h2 class="card-title">${pokemon.id}.${pokemon.name}</h2>
                        <p class="card-subtitle">${types.join(' | ')}</p>
                    </li>
                </div>
            `
        );

    }
       
    }, 

}

export default GetKantoPokemons;

