import React from "react";
import Layout from "./Layout";
import Home from "./components/Home";
import PagPokemon from "./components/PagPokemon";

const routes = (n_gen, setN_gen) => [
    
    {
        path: "/",
        element: <Layout n_gen={n_gen} setN_gen={setN_gen}/>,
        children: [ 
            { path: "/", element: <Home n_gen={n_gen}/> },
            { path: "/pokemon/:id", element: <PagPokemon n_gen={n_gen}/> }
        ],
    },
];

export default routes;
