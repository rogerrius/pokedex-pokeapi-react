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

    const tipoColorDict = {
        "normal": "rgb(168, 167, 122)",
        "fire": "rgb(238, 129, 48)",
        "water": "rgb(99, 144, 240)",
        "electric": "rgb(247, 208, 44)",
        "grass": "rgb(122, 199, 76)",
        "ice": "rgb(150, 217, 214)",
        "fighting": "rgb(194, 46, 40)",
        "poison": "rgb(163, 62, 161)",
        "ground": "rgb(226, 191, 101)",
        "flying": "rgb(169, 143, 243)",
        "psychic": "rgb(249, 85, 135)",
        "bug": "rgb(166, 185, 26)",
        "rock": "rgb(182, 161, 54)",
        "ghost": "rgb(115, 87, 151)",
        "dragon": "rgb(111, 53, 252)",
        "dark": "rgb(112, 87, 70)",
        "steel": "rgb(183, 183, 206)", 
        "fairy": "rgb(214, 133, 173)"
    };

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

    const handlePokemonClick = (id) => {
        window.location.href = `/pokemon/${id}`;
    };
    
    return (

        <div className="Jutgol">

                {pokemon && pokemon.map((poke, index) => (

                    <div className="Home" key={index} onClick={() => handlePokemonClick(poke.id)}>
                    
                        <div className="divcaixes" style={ { backgroundColor: tipoColorDict[poke.types[0].type.name] }}>

                            <div className="divnom">
                                <p className='nom'>{poke.name}</p>
                                <div className='buit'></div>
                                <p className="id">#{poke.id}</p>
                            </div>

                            <div className='divambdivs'>
                                <div className="divfotos">
                                    <img className='foto' src={poke.sprites.other.dream_world.front_default} alt={poke.name} />
                                </div>
                            
                                <div className="divtipus">
                                    {/* <p className='tipus1' style={ { backgroundColor: tipoColorDict[poke.types[0].type.name] }} >{poke.types[0].type.name}</p>
                                    <p className='tipus2' style={ { backgroundColor: tipoColorDict[poke?.types[1]?.type.name] }} >{poke?.types[1]?.type?.name}</p> */}
                                    {poke.types.map((i) => (
                                        <p className='tipus1' style={ { backgroundColor: tipoColorDict[i.type.name] }} >{i.type.name}</p>
                                    ))}
                                </div>

                            </div>
                        </div>

                    </div>
                ))}
            </div>
    );
};

export default Home;
