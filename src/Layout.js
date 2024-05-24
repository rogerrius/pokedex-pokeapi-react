import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import AppBar from "./components/AppBar";

const Layout = ({n_gen, setN_gen, entradaPokemon, setEntradaPokemon, currentPokemonId, setCurrentPokemonId, shiny, setShiny}) => {

    return (
        <div>
            <Outlet n_gen={n_gen}/>
            <AppBar setN_gen={setN_gen} n_gen={n_gen} entradaPokemon={entradaPokemon} setEntradaPokemon={setEntradaPokemon} currentPokemonId={currentPokemonId} setCurrentPokemonId={setCurrentPokemonId} shiny={shiny} setShiny={setShiny}/>
        </div>
    );
};

export default Layout;