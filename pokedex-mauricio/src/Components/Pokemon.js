import React from "react";
import { PokemonStyle} from "./Styled";
const Pokemon = (props) => {
  const { pokemon } = props;
  const onHeartClick =() =>{
    console.log("Favoritar");
  };
  const heart = "❤️"
  

  return (<PokemonStyle>
  <div className="pokemon-card">
    <div className="image-container">
  <img alt={pokemon.name} src={pokemon.sprites.front_default}/>
  </div>
  <div className="card-body" >
    
  </div>
  <div className="card-top" >
    <h3>{pokemon.name}</h3>
    <div>#{pokemon.id}</div>

  </div>
  <div className="card-bottom" >
    <div className="pokemon-type">
    {pokemon.types.map((type,index)=>{
        return (
            <div key={index} className="pokemon-type" >{type.type.name}</div>
        )
    })}
   

  </div>
  <button className="pokemon-heart-btn" onClick={onHeartClick}/>
  {heart}
  </div>
  </div>
  </PokemonStyle> );
};
export default Pokemon;
