import React from "react";
import {BrowserRouter, Routes,Route} from "react-router-dom"
import HomePage from "./Home";
import Pokedex from "./Pokedex";
import PokedexDetails from "./PokedexDetails";

const Rotas = () =>{
    return (
        <BrowserRouter>
        <Routes>
            <Route index element={<HomePage/>}></Route>
            <Route path="/pokedex" element={<Pokedex/>}></Route>
            <Route path="/podedex/poke-detais" element={<PokedexDetails/>}></Route>
        </Routes>

        </BrowserRouter>
    )
}
export default Rotas;