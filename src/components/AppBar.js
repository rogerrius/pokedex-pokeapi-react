import React from 'react';
import '../css/AppBar.css';

// TO DO: FER QUE ELS BOTONS CANVIIN EL POKEMON SEGUENT O AL ANTERIOR A DINS DE PAGPOKEMON

function AppBar({n_gen, setN_gen}) {
    
    function onClickSumar() {
        if (n_gen < 8)
            setN_gen(n_gen+1)
    }
    function onClickRestar() {
        if (n_gen > 0)
            setN_gen(n_gen-1)
    }

    return (
        <div className='butons'>

            <div className='divesquerra' onClick={onClickRestar}>
                <button className='butesq' onClick={onClickRestar}>
                    <svg className='svg-esq' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                        <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/>
                    </svg>
                </button>
            </div>

            <div className='pokedex'>
                <button className='butoPokeball'></button>
            </div>

            <div className='divdreta' onClick={onClickSumar}>
                <button className='butdreta' onClick={onClickSumar}>
                    <svg className='svg-dreta' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                        <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/>
                    </svg>
                </button>
            </div>

        </div>
    );
}

export default AppBar;
