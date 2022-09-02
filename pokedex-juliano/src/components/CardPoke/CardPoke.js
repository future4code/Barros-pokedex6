import React from "react";
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
import { Link } from "react-router-dom";
import { useContext } from "react";
import { GlobalStateContext } from "../../global/GlobalStateContext";
import Pokebola from '../../img/pokebola.png'
import Camera from '../../img/camera.png'

function CardPoke(props) {
  const { pokedex, setPokedex, pokemonDetail, setPokemonDetail } = useContext(GlobalStateContext)

  const addToPokedex = () => {
    const pokeIndex = pokemonDetail.findIndex((item) => {
      return item.name === props.poke.name
    })

    const newPokemonList = [...pokemonDetail]
    newPokemonList.splice(pokeIndex, 1)
    const newPokedexList = [...pokedex, props.poke]

    setPokedex(newPokedexList)
    setPokemonDetail(newPokemonList)
    // swal('Adicionado a Pokedex')
  }

  const goToDetail = ((id) => {
    { localStorage.setItem("id", id) }
  })

  return (
    <Container>
      <ContainerCircles>
        <CircleBlue></CircleBlue>
        <CircleRed></CircleRed>
        <CircleYellow></CircleYellow>
        <CircleGreen></CircleGreen>
      </ContainerCircles>

      <BorderBlack>
        <BorderWhite>
          <ImgPoke src={props.poke.sprites.versions['generation-v']['black-white'].animated.front_default} />
          <p>{props.poke.name}</p>
        </BorderWhite>
      </BorderBlack>
      <ContainerButton>
        <ButtonPoke onClick={addToPokedex}>
          <img src={Pokebola} />
        </ButtonPoke>

        <Link to={`/pokemon/${props.poke.id}`}>

          <ButtonPoke
            onClick={() => goToDetail(props.poke.id)}
          >
            <img src={Camera} />
          </ButtonPoke>
        </Link>
      </ContainerButton>
    </Container>
  );
}

export default CardPoke;
