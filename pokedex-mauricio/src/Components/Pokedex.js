import React from "react";
import {useNavigate} from "react-router-dom"
function Pokedex () {
    const navigate = useNavigate()
    const goToHome=() => navigate("/")
    const goToPokedexDetais=() => navigate("/podedex/poke-detais")

    return(
        <div>
            <h1>Pokedex</h1>
            <button onClick={goToPokedexDetais}>Detalhes</button>
            <button onClick={goToHome}>Voltar</button>
        
        </div>
    )
};
export default Pokedex;