import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Pokedex from "../pages/Pokedex/Pokedex";
import PokemonDetail from "../pages/PokemonDetail/PokemonDetail";
import Error from "../pages/Error/Error";

const RouteManager = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" component={Home} />
        <Route exact path="/pokedex" component={Pokedex} />
        <Route exact path="/pokemon/:id" component={PokemonDetail} />
        <Route component={Error} />
      </Routes>
    </BrowserRouter>
  );
};
export default RouteManager;
