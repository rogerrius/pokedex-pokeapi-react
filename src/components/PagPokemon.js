import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getElements } from '../API';
import '../css/PagPokemon.css'

// TO DO: FER BUTÓ DE SHINY A DALT A LA ESQUERRA

const PagPokemon = ({ n_gen, setN_gen, currentPokemonId, setCurrentPokemonId, shiny, setShiny}) => {
    const { id } = useParams();
    const [pokemon, setPokemon] = useState(null);
    const [descrip, setDescrip] = useState(null);
    
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
        const fetchPokemon = async () => {
            const { result: pokemonData } = await getElements(`https://pokeapi.co/api/v2/pokemon/${id}`);
            setPokemon(pokemonData);
        };
        
        const getDescrip = async () => {
            const { result: resultat } = await getElements(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
            setDescrip(resultat)
            };
        getDescrip();

        fetchPokemon();
    }, [id]);

    const canvi_shiny = () => {
        if (shiny) {
            setShiny(false);
        } else {
            setShiny(true);
        }
        console.log(shiny)
    }

    return (
        <div>
            {pokemon ? (
                    <div className="divambtot">
                        
                        <div className='divambmoltsdivs' style={ { backgroundColor: tipoColorDict[pokemon?.types[0]?.type?.name] }}>
                            <div className="divambfotos">
                                <button className="boton_shiny" onClick={() => canvi_shiny()}> 
                                    <svg className='svg_shiny' viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                        <path  d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828l.645-1.937zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.734 1.734 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.734 1.734 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.734 1.734 0 0 0 3.407 2.31l.387-1.162zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L10.863.1z"/>
                                    </svg>
                                </button>
                                <img className='fotospoke' src={shiny? pokemon.sprites.other.showdown.front_shiny : pokemon.sprites.other.showdown.front_default} alt={pokemon.name} />
                            </div>
                            
                            <div className="tensada">
                                <div className="divambnom">
                                    <p className='noms'>{pokemon.name}</p>                                    
                                    <div className="buit"></div>
                                    <p className="id2"># {pokemon.id}</p>
                                </div>
                                
                                <div className="divambtipus">
                                    <p className='tipus1' style={{ backgroundColor: tipoColorDict[pokemon?.types[0]?.type?.name] }}>{pokemon.types[0].type.name}</p>
                                    {pokemon?.types[1]?.type?.name ? <p className='tipus2' style={{ backgroundColor: tipoColorDict[pokemon?.types[1]?.type?.name] }}>{pokemon?.types[1]?.type?.name}</p> : <></>}
                                </div>

                                <div className="descripcio">
                                    <p>{descrip?.flavor_text_entries[0]?.flavor_text}</p>
                                </div>

                                <div className="infopoke">
                                    <p className="pes">
                                        <svg className='svgpes' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                            <path d="M224 96a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm122.5 32c3.5-10 5.5-20.8 5.5-32c0-53-43-96-96-96s-96 43-96 96c0 11.2 1.9 22 5.5 32H120c-22 0-41.2 15-46.6 36.4l-72 288c-3.6 14.3-.4 29.5 8.7 41.2S33.2 512 48 512H464c14.8 0 28.7-6.8 37.8-18.5s12.3-26.8 8.7-41.2l-72-288C433.2 143 414 128 392 128H346.5z"/>
                                        </svg> {pokemon.weight / 10} kg
                                    </p>
                                    <p className="alt"> 
                                        <svg className='svgalt' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                            <path d="M344 0H488c13.3 0 24 10.7 24 24V168c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2l-39-39-87 87c-9.4 9.4-24.6 9.4-33.9 0l-32-32c-9.4-9.4-9.4-24.6 0-33.9l87-87L327 41c-6.9-6.9-8.9-17.2-5.2-26.2S334.3 0 344 0zM168 512H24c-13.3 0-24-10.7-24-24V344c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2l39 39 87-87c9.4-9.4 24.6-9.4 33.9 0l32 32c9.4 9.4 9.4 24.6 0 33.9l-87 87 39 39c6.9 6.9 8.9 17.2 5.2 26.2s-12.5 14.8-22.2 14.8z"/>
                                        </svg> {pokemon.height / 10} m
                                    </p>
                                </div>

                                <br />
                                <hr className="linia" />
                                <br />
                                
                                <div className="divambstats">
                                    <p className='statistics'>-- Statistics --</p>
                                    <div className='stat'>
                                        <p className='stats'><b>HP:</b> {pokemon.stats[0].base_stat}</p>
                                        <div className='stat-bar-container'> 
                                            <div className='stat-bar' style={{ width: `${pokemon.stats[0].base_stat / 2}%`, backgroundColor: tipoColorDict[pokemon?.types[0]?.type?.name] }}></div>
                                        </div>
                                    </div>
                                    <div className='stat'>
                                        <p className='stats'><b>Attack:</b> {pokemon.stats[1].base_stat}</p>
                                        <div className='stat-bar-container'>
                                            <div className='stat-bar' style={{ width: `${pokemon.stats[1].base_stat / 2}%`, backgroundColor: tipoColorDict[pokemon?.types[0]?.type?.name] }}></div>
                                        </div>
                                    </div>
                                    <div className='stat'>
                                        <p className='stats'><b>Defense:</b> {pokemon.stats[2].base_stat}</p>
                                        <div className='stat-bar-container'>
                                            <div className='stat-bar' style={{ width: `${pokemon.stats[2].base_stat / 2}%`, backgroundColor: tipoColorDict[pokemon?.types[0]?.type?.name] }}></div>
                                        </div>
                                    </div>
                                    <div className='stat'>
                                        <p className='stats'><b>Sp. Atk:</b> {pokemon.stats[3].base_stat}</p>
                                        <div className='stat-bar-container'>
                                            <div className='stat-bar' style={{ width: `${pokemon.stats[3].base_stat / 2}%`, backgroundColor: tipoColorDict[pokemon?.types[0]?.type?.name] }}></div>
                                        </div>
                                    </div>
                                    <div className='stat'>
                                        <p className='stats'><b>Sp. Def:</b> {pokemon.stats[4].base_stat}</p>
                                        <div className='stat-bar-container'>
                                            <div className='stat-bar' style={{ width: `${pokemon.stats[4].base_stat / 2}%`, backgroundColor: tipoColorDict[pokemon?.types[0]?.type?.name] }}></div>
                                        </div>
                                    </div>
                                    <div className='stat'>
                                        <p className='stats'><b>Speed:</b> {pokemon.stats[5].base_stat}</p>
                                        <div className='stat-bar-container'>
                                            <div className='stat-bar' style={{ width: `${pokemon.stats[5].base_stat / 2}%`, backgroundColor: tipoColorDict[pokemon?.types[0]?.type?.name] }}></div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
            ): (
                <p>Carregant, esperi un moment...</p>
            )}
        </div>
    );
};

export default PagPokemon;
