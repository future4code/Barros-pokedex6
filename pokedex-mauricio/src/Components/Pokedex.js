import React from "react";
const Pokedex = (props) => {
    const {pokemons, loading} = props;
    return (
    <div>
        <div className="header-pokedex">
        <h1>Pokedex</h1>
        </div>
        <div>Paginação:</div>
        {loading ? (<div>Carregando, Calma ae... </div>) :
        (<div className="pokedex-grid" ></div>)}
    
    </div>
    )
};
export default Pokedex;