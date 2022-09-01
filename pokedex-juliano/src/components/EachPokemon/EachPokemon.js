import React, { useState } from "react";
import { useContext } from "react";
import { GlobalStateContext } from "../../global/GlobalStateContext";
import {
  Container,
  CircleBlue,
  CircleRed,
  CircleYellow,
  CircleGreen,
  ContainerCircles,
  BorderBlack,
  BorderWhite,
  ImgPoke,
  ButtonPoke,
  ContainerButton
} from "./style";
import { EachPokemonContainer } from "./style";
import Fight from "../../img/fight-pokemon.png";
import Remove from "../../img/delete-sign.png";

const EachPokemon = (props) => {
  const { pokedex, setPokedex, pokemonDetail, setPokemonDetail } =
    useContext(GlobalStateContext);
  const [name, setName] = useState(props.poke.name);
  const [photo, setPhoto] = useState(
    props.poke.sprites.versions["generation-v"]["black-white"].animated
      .front_default
  );
  const removeFromPokedex = () => {
    const pokeIndex = pokedex.findIndex((item) => {
      return item.name === props.poke.name;
    });

    const newPokedexList = [...pokedex];
    newPokedexList.splice(pokeIndex, 1);

    const newPokemonList = [...pokemonDetail, props.poke];
    const order = newPokemonList.sort((a, b) => {
      return a.id - b.id;
    });

    setPokedex(newPokedexList);
    setPokemonDetail(order);
  };

  let totalPower = props.poke.stats.reduce(
    (powerBefore, power) => powerBefore + power.base_stat,
    0
  );

  return (
    <EachPokemonContainer>
      <Container>
        <ContainerCircles>
          <CircleBlue />
          <CircleRed />
          <CircleYellow />
          <CircleGreen />
        </ContainerCircles>

        <BorderBlack>
          <BorderWhite>
            <ImgPoke
              src={
                props.poke.sprites.versions["generation-v"]["black-white"]
                  .animated.front_default
              }
            />
            <p>{props.poke.name}</p>
          </BorderWhite>
        </BorderBlack>
        <ContainerButton>
          <ButtonPoke
            onClick={() => props.comparePowerOfBattle(totalPower, name, photo)}
          >
            <img src={Fight} />
            {/* <Icon src={pokeIcon} /> */}
          </ButtonPoke>
          <ButtonPoke onClick={removeFromPokedex}>
            <img src={Remove} />
            {/* <Icon src={pokeIcon} /> */}
          </ButtonPoke>
        </ContainerButton>
      </Container>
    </EachPokemonContainer>
  );
};

export default EachPokemon;
