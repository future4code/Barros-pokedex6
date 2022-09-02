import React from "react";
import { Progress, Stack, Text } from "@chakra-ui/react";
import { BASE_URL } from "../../constants/Url/BASE_URL";
import { useParams } from "react-router-dom";
import useRequestDetail from "../../hooks/useRequestDetail";
import Header from "../../components/Header/Header";
import {
  DetailsContainer,
  DetailsCard1,
  DetailsCard2,
  DetailsCard3,
  Title,
  ContainerMaster,
  Load,
} from "./style";
import Pictures from "../../components/Pictures/Pictures";
import pokeball from "../../img/pokeball.gif";

const PokemonDetail = () => {
  const params = useParams();
  const detailPoke = useRequestDetail([], `${BASE_URL}/${params.id}`);

  const poderes =
    detailPoke.stats &&
    detailPoke.stats.map((stat) => {
      return (
        <>
          <h3>
            <p>{stat.stat.name}</p>
            <p>{stat.base_stat}</p>
          </h3>
          <Progress
            colorScheme="red"
            size="sm"
            max={150}
            value={stat.base_stat}
          />
        </>
      );
    });

  const ataques =
    detailPoke.moves &&
    detailPoke.moves.map((ataque, index) => {
      return (
        index < 5 && (
          <Text key={ataque.move.name} fontSize={16} fontWeight="bold">
            {ataque.move.name}
          </Text>
        )
      );
    });
  const name = detailPoke.stats && detailPoke.stats.map((stat) => {
    return <Title>{stat.stat.name}</Title>
  })

  return (
    <ContainerMaster>
      <Header />{console.log(detailPoke)}
      {detailPoke && detailPoke.sprites ? (
        <DetailsContainer>
          <DetailsCard1>
            <Title>{detailPoke.name}  </Title>
            <img
              src={detailPoke.sprites.other["official-artwork"].front_default}
            />
            <Text fontWeight="bold">Type:</Text>
            {detailPoke &&
              detailPoke.types.map((type) => {
                return <Text key={type.type.name}>{type.type.name}</Text>;
              })}
          </DetailsCard1>
          <Stack spacing={2} justify="center">
            <Title>Powers</Title>
            <div>{poderes}</div>
          </Stack>
          <DetailsCard2>
            <Title>Attacks</Title>
            <br />
            <br />
            {ataques}
          </DetailsCard2>
          <DetailsCard3>
            <Title>Images</Title>
            <br />
            <Pictures />
          </DetailsCard3>
        </DetailsContainer>
      ) : (
        <Load src={pokeball} />
      )}
    </ContainerMaster>
  );
};
export default PokemonDetail;
