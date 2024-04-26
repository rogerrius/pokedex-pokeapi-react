import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getElements } from '../API';
import '../css/PagPokemon.css'

const PagPokemon = () => {
    const { id } = useParams();
    const [pokemon, setPokemon] = useState(null);
    const [descrip, setDescrip] = useState(null);

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

    return (
        <div>
            {pokemon ? (
                    <div className="divcaixes">
                        
                        <div className='divambdivs'>

                            <div className="divfotos">
                                <img className='foto' src={pokemon.sprites.front_default} alt={pokemon.name} />
                            </div>

                            <div className="divnom">
                                <p className='nom'>{pokemon.name}</p>
                            </div>

                            <div className="divID">
                                <p className="id">Nº {pokemon.id}</p>
                            </div>

                            <div className="divtipus">
                                <p className='tipus1'>{pokemon.types[0].type.name}</p>
                                <p className='tipus2'>{pokemon?.types[1]?.type?.name}</p>
                            </div>

                            <div className="descrip">
                                <p>{descrip?.flavor_text_entries[0]?.flavor_text}</p>
                            </div>

                            <div className="infopoke">
                                <p>info pokemon:</p>
                                <p className="pes">{pokemon.weight / 10} kg</p>
                                <p className="alt">{pokemon.height / 10} m</p>
                                <p className="moviment">{pokemon.abilities[0].ability.name}</p>
                            </div>

                            <div className="divstats">
                                <p className='stats'>Estadístiques</p>
                                <p className='stats'>HP: {pokemon.stats[0].base_stat}</p>
                                <p className='stats'>Attack: {pokemon.stats[1].base_stat}</p>
                                <p className='stats'>Defense: {pokemon.stats[2].base_stat}</p>
                                <p className='stats'>Sp. Atk: {pokemon.stats[3].base_stat}</p>
                                <p className='stats'>Sp. Def: {pokemon.stats[4].base_stat}</p>
                                <p className='stats'>Speed: {pokemon.stats[5].base_stat}</p>
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
