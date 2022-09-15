import React, {useContext} from "react";
import FavoriteContext from "../contexts/favoriteContext";
import PokeApi from "../image/pokeapi.png"
import { NavBarStyle } from "./Styled";
const NavBar=()=> {
    const {favoritePokemons} = useContext(FavoriteContext);
    return(
        <NavBarStyle>
            <nav>
               <img 
               alt="PokeApi"
               src={PokeApi}
               className= "poke-api-img"/>
               <div>
                { favoritePokemons.length}
                ❤️
               </div>
            </nav>
            
        </NavBarStyle>
    )
};
export default NavBar;