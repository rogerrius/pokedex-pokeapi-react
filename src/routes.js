import React from "react";
import Layout from "./Layout";
import Home from "./components/Home";
import PagPokemon from "./components/PagPokemon";

const routes = () => [
    
    {
        path: "/",
        element: <Layout />,
        children: [ 
            { path: "/", element: <Home /> },
            { path: "/pokemon/:id", element: <PagPokemon /> }
        ],
    },
];

export default routes;
