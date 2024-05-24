import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/AppBar.css';

function AppBar({ n_gen, setN_gen, entradaPokemon, setEntradaPokemon, currentPokemonId, setCurrentPokemonId, shiny, setShiny }) {
    const navigate = useNavigate();
    
    function onClickSumar() {
        if (n_gen < 8 && !entradaPokemon) {
            setN_gen(n_gen + 1);}
        else {
            setCurrentPokemonId(currentPokemonId + 1); 
            moure();
        }
    }

    function moure() {
        navigate(`/pokemon/${currentPokemonId}`);
    }

    function onClickRestar() {
        if (n_gen > 0 && !entradaPokemon) {
            setN_gen(n_gen - 1);}
        else {
            setCurrentPokemonId(currentPokemonId - 1);
            moure()
        }
    }

    useEffect(() => {
        moure()
        setEntradaPokemon(true)
    }, [currentPokemonId]);


    function pokeball(){
        if (entradaPokemon) {
            tornar_home();
        }
        else {
            convertir_shiny();
            console.log(shiny)
        }
    }

    // Funció per tornar a /
    function tornar_home() {
        navigate('/')
        setEntradaPokemon(false);
    }
    
    function convertir_shiny(){
        if (shiny == false) {
            setShiny(true);
        }
        else {
            setShiny(false);
        }
    }


    return (
        <div className='butons'>
            <div className='divesquerra' onClick={onClickRestar}>
                <button className='butesq'>
                    <svg className='svg-esq' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                        <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/>
                    </svg>
                </button>
            </div>

            <div className='pokedex' onClick={() => pokeball()}>
                <button  className='butoPokeball'> </button>
            </div>

            <div className='divdreta' onClick={onClickSumar}>
                <button className='butdreta'>
                    <svg className='svg-dreta' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                        <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/>
                    </svg>
                </button>
            </div>
        </div>
    );
}

export default AppBar;