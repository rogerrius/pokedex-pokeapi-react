import React, { useState, useEffect } from 'react';
import { getElements } from '../API';
import '../css/Home.css';

const Home = ({n_gen}) => {
    const [pokemon, setPokemon] = useState([]);
    
    const gen = [
        'https://pokeapi.co/api/v2/pokemon?limit=151&offset=0',//1
        'https://pokeapi.co/api/v2/pokemon?limit=100&offset=151',//2
        'https://pokeapi.co/api/v2/pokemon?limit=135&offset=251',//3
        'https://pokeapi.co/api/v2/pokemon?limit=107&offset=386',//4
        'https://pokeapi.co/api/v2/pokemon?limit=156&offset=493',//5
        'https://pokeapi.co/api/v2/pokemon?limit=72&offset=649',//6
        'https://pokeapi.co/api/v2/pokemon?limit=88&offset=721',//7
        'https://pokeapi.co/api/v2/pokemon?limit=96&offset=809',//8
        'https://pokeapi.co/api/v2/pokemon?limit=120&offset=905'//9
    ]

    useEffect(() => {
        const getPokemon = async () => {
            const { result } = await getElements(gen[n_gen]);
            const pokemons = await Promise.all(result.results.map(async (poke) => {
                const { result: pokemonData } = await getElements(poke.url);
                return pokemonData;
            }));

            setPokemon(pokemons);
        };

        getPokemon();
    }, [n_gen]);

    useEffect(() => {
        if (pokemon.length === 20) {
            const sortedPokemon = [...pokemon].sort((a, b) => a.id - b.id);
            console.log(sortedPokemon);
            setPokemon(sortedPokemon);
        }
    }, []);

    return (

        <div className="Jutgol">
            <div className="caixapotent">

                {pokemon && pokemon.map((poke, index) => (

                    <div className="Home" key={index}>
                        <div className="divcaixes">
                            
                            <div className="divnom">
                                <p className='nom'>{poke.name}</p>
                            </div>

                            <div className='divambdivs'>
                                <div className="divfotos">
                                    <img className='foto' src={poke.sprites.front_default} alt={poke.name} />
                                </div>

                                <div className="divtipusid">
                                    <div className="divtipus">
                                        <p className='tipus1'>{poke.types[0].type.name}</p>
                                        <p className='tipus2'>{poke?.types[1]?.type?.name}</p>
                                    </div>
                                    <div className="divid">
                                        <p className="id">Nº {poke.id}</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
