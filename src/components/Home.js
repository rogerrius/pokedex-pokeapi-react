// Home.js

import React, { useState, useEffect } from 'react';

const Home = (props) => {
    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        const getPokemon = async () => {
            const { result } = await getElements('https://pokeapi.co/api/v2/pokemon/?limit=50');
            const pokemons = await Promise.all(result.results.map(async (poke) => {
                const { result: pokemonData } = await getElements(poke.url);
                return pokemonData;
            }));

            setPokemon(pokemons);
        };

        getPokemon();
    }, []);

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
