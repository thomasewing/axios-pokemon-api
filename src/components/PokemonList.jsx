import React, {useState} from 'react';
import axios from 'axios';

const PokemonList=(props)=>{

    const[pokemonList, setPokemonList]=useState([]);

    const buttonClickHandler = e =>{
        // e.preventDefault();
        axios.get("https://pokeapi.co/api/v2/pokemon")
            .then(res => {
                console.log(res.data);
                setPokemonList(res.data.results)
            })
    }
    return(
        <div>
            
                <button onClick={buttonClickHandler}>Gotta catch 'em all!</button>
                <ul>
                    {
                        pokemonList.map(pokemon=>{
                            return(
                                <li key={pokemon.url}>
                                    {pokemon.name}
                                </li>
                            )
                        })
                    }
                </ul>
            
        </div>
    );
}
export default PokemonList;