import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import AppBar from "./components/AppBar";

const Layout = ({n_gen, setN_gen}) => {

    return (
        <div>
            <Outlet n_gen={n_gen}/>
            <AppBar setN_gen={setN_gen} n_gen={n_gen}/>
        </div>
    );
};

export default Layout;