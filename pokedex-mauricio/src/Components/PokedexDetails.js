import React from "react";
import {useNavigate} from "react-router-dom"
function PokedexDetails () {
    const navigate = useNavigate()
    const goToHome=() => navigate("/")
    const  goToPokedex=() => navigate(-1)
    return (
        <div>
            <h1>PokedexDetails</h1>
            <button onClick={goToPokedex}>Voltar</button>
            <button onClick={goToHome}>Home</button>
            </div>
    )
};
export default PokedexDetails;