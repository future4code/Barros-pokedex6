import React from "react";
import PokeApi from "../image/pokeapi.png"
import { NavBarStyle } from "./Styled";
const NavBar=()=> {
    return(
        <NavBarStyle>
            <nav>
               <img 
               alt="PokeApi"
               src={PokeApi}
               className= "poke-api-img"/>
            </nav>
        </NavBarStyle>
    )
};
export default NavBar;