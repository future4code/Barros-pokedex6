import React, { useState } from "react";
import { searchPokemon } from "../api";
import { SearchBarStyle } from "./Styled";
const SearchBar = () => {
    const [search,setSearch] = useState("ditto");
    const [pokemon,setPokemon] = useState()
  const onChangeHandler = (e) => {
    setSearch(e.target.value)
  };

  const onButtonClickHandler = () =>{
    onSearchHandler(search)
  };

  const onSearchHandler = async (pokemon) =>{
    const result = await searchPokemon(pokemon)
    setPokemon(result)
    console.log("Pokemon", result)
  }
  
  return (
    <SearchBarStyle>
      <div>
        <input placeholder="Buscar Pokemon" onChange={onChangeHandler} />
      </div>
      <div className="search-btn">
        <button onClick={onButtonClickHandler}>Buscar</button>
      </div>
      {pokemon ? (
        <div>
          <div>Nome:{pokemon.name}</div>
          <div>Peso:{pokemon.weight}</div>
          <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
        </div>
      ): null}
    </SearchBarStyle>
  );
};
export default SearchBar;
