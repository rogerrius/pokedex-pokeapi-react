// import React, { useState, useEffect } from 'react';
// import { getElements } from '../API';
import '../css/Home.css';
import { useNavigate } from 'react-router-dom';

// TO DO: CANVIAR ELS TIPUS D'IMATGES DELS POKEMONS PER UN ALTRE QUE ES VEGIN TOTS ELS POKEMONS BÉ

const Home = ({n_gen, pokemon, entradaPokemon, setEntradaPokemon, currentPokemonId, setCurrentPokemonId, shiny}) => {

    const navigate = useNavigate()
    const handlePokemonClick = (id) => {
        setCurrentPokemonId(id);
        console.log(currentPokemonId);
        setEntradaPokemon(true);
        navigate(`/pokemon/${id}`);
    };
    
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

    return (
        <div className="Ferran">
            <div className="Jutgol">
                {pokemon ? (
                    pokemon.map((poke, index) => (
                        <div className="Home" key={index} onClick={() => handlePokemonClick(poke.id)}>
                            <div className="divcaixes" style={{ backgroundColor: tipoColorDict[poke.types[0].type.name] }}>
                                <div className="divnom">
                                    <p className='nom'>{poke.name}</p>
                                    <div className='buit'></div>
                                    <p className="id">#{poke.id}</p>
                                </div>
                                <div className='divambdivs'>
                                    <div className="divfotos">
                                        <img className='foto' src={shiny ? poke.sprites.front_shiny : poke.sprites.front_default} alt={poke.name} />
                                    </div>
                                    <div className="divtipus">
                                        {poke.types.map((i) => (
                                            <p className='tipus11' style={{ backgroundColor: tipoColorDict[i.type.name] }} >{i.type.name}</p>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>Carregant, esperi un moment...</p>
                )}
            </div>
        </div>
    );
};

export default Home;
