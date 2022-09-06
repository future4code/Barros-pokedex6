import React from "react";
import Pagination from "./Pagination";
import Pokemon from "./Pokemon";
import { PokedexStyle } from "./Styled";
const Pokedex = (props) => {
  const { pokemons, loading,page,totalPages } = props;
  const onLeftClickHandler =() =>{
    console.log("Voltar");
  }
  const onRightClickHandler =() =>{
    console.log("Avançar");
  }
  return (
    <PokedexStyle>
      <div className="header-pokedex">
        <h1>Pokedex</h1>
      <Pagination
        page={page+1}
        totalPages={totalPages}
        onLeftClick={onLeftClickHandler}
        onRightClick={onRightClickHandler}
      />
      </div>
      
      {loading ? (
        <div>Carregando, Calma ae... </div>
      ) : (
        <div className="pokedex-grid">
            {pokemons && pokemons.map((pokemon,index)=>{
                return (<Pokemon key={index} pokemon={pokemon}/>
                    );
            })}
        </div>
      )}
    </PokedexStyle>
  );
};
export default Pokedex;
