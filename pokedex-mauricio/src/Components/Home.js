import React from "react";
import {useNavigate} from "react-router-dom"


function HomePage (){
    const navigate = useNavigate()
    const goToPokedex=() => navigate("/pokedex")
    return(
        <div>
            <h1>PokeApi</h1>
            <button onClick={goToPokedex}>Pokedex</button>
        </div>
       
    )
};
export default HomePage;