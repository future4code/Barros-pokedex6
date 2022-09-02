import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
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
  ContainerButton,
} from "./style";
import { Button } from "@chakra-ui/react";

const Pictures = () => {
  const params = useParams();
  const [currImg, setCurrImg] = useState(0);

  const allPokemonsPictures = [
    {
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${params.id}.png`,
    },
    {
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${params.id}.png`,
    },
    {
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/${params.id}.png`,
    },
    {
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/${params.id}.png`,
    },
    {
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/${params.id}.png`,
    },
    {
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/${params.id}.png`,
    },
    {
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/${params.id}.png`,
    },
    {
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/${params.id}.png`,
    },
    {
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/${params.id}.png`,
    },
    {
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/${params.id}.png`,
    },
    {
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/${params.id}.png`,
    },
    {
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/${params.id}.png`,
    },
    {
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/${params.id}.png`,
    },
    {
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${params.id}.gif`,
    },
    {
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/${params.id}.png`,
    },
    {
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/${params.id}.png`,
    },
    {
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/${params.id}.png`,
    },
    {
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/${params.id}.png`,
    },
    {
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/icons/${params.id}.png`,
    },
  ];

  return (
    <Container>
      <ContainerCircles>
        <CircleBlue />
        <CircleRed />
        <CircleYellow />
        <CircleGreen />
      </ContainerCircles>
      <BorderBlack>
        <BorderWhite>
          <ImgPoke src={allPokemonsPictures[currImg].img} />
        </BorderWhite>
      </BorderBlack>
      <ContainerButton>
        <ButtonPoke>
          <Button
            onClick={() => {
              currImg > 0 && setCurrImg(currImg - 1);
            }}
          >
            back
          </Button>
          <Button
            onClick={() => {
              currImg < allPokemonsPictures.length - 1 &&
                setCurrImg(currImg + 1);
            }}
          >
            next
          </Button>
        </ButtonPoke>
      </ContainerButton>
    </Container>
  );
};
export default Pictures;
