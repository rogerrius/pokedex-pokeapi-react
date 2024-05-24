import React from "react";
import Layout from "./Layout";
import Home from "./components/Home";
import PagPokemon from "./components/PagPokemon";

const routes = (n_gen, setN_gen, pokemon, entradaPokemon, setEntradaPokemon, currentPokemonId, setCurrentPokemonId, shiny, setShiny) => [
    
    {
        path: "/",
        element: <Layout n_gen={n_gen} setN_gen={setN_gen} entradaPokemon={entradaPokemon} setEntradaPokemon={setEntradaPokemon} currentPokemonId={currentPokemonId} setCurrentPokemonId={setCurrentPokemonId} shiny={shiny} setShiny={setShiny}/>,
        children: [ 
            { path: "/", element: <Home n_gen={n_gen} pokemon={pokemon} entradaPokemon={entradaPokemon} setEntradaPokemon={setEntradaPokemon} currentPokemonId={currentPokemonId} setCurrentPokemonId={setCurrentPokemonId} shiny={shiny} setShiny={setShiny}/> },
            { path: "/pokemon/:id", element: <PagPokemon n_gen={n_gen} setN_gen={setN_gen} shiny={shiny} setShiny={setShiny}/> }
        ],
    },
];

export default routes;
