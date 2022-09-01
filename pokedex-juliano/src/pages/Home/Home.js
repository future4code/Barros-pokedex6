import React, { useContext } from "react";
import { ContainerCard, HomeContainer } from "./style";
import Header from "../../components/Header/Header";
import { GlobalStateContext } from "../../global/GlobalStateContext";
import CardPoke from "../../components/CardPoke/CardPoke";
import Pagination from "../../components/Pagination/Pagination";


const Home = () => {
  const { pokemonDetail, setCurrentPageUrl, nextPageUrl, prevPageUrl } =
    useContext(GlobalStateContext);

  const listPokemons = pokemonDetail.map((poke) => {

    return <CardPoke poke={poke} />

  });

  function goNextPage() {
    setCurrentPageUrl(nextPageUrl)
  }

  function goPrevPage() {
    setCurrentPageUrl(prevPageUrl)
  }

  return (
    <HomeContainer>
      <Header />
      <ContainerCard>{listPokemons}</ContainerCard>
      <Pagination
        goNextPage={nextPageUrl ? goNextPage : null}
        goPrevPage={prevPageUrl ? goPrevPage : null}
      />
    </HomeContainer>
  );
};

export default Home;
