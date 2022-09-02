import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from '../constants/Url/BASE_URL';
import { GlobalStateContext } from "./GlobalStateContext";

export const GlobalState = (props) => {
  const [pokemonsNames, setPokemonsNames] = useState([]);
  const [pokedex, setPokedex] = useState([])
  const [pokemonDetail, setPokemonDetail] = useState([])
  const [currentPageUrl, setCurrentPageUrl] = useState(BASE_URL)
  const [nextPageUrl, setNextPageUrl] = useState()
  const [prevPageUrl, setPrevPageUrl] = useState()


  useEffect(() => {
    getPokemonNames()
  }, [currentPageUrl]);

  useEffect(() => {
    pokemonsDetail();
  }, [pokemonsNames])

  const getPokemonNames = () => {
    let cancel
    axios.get(currentPageUrl, {
      cancelToken: new axios.CancelToken(c => cancel = c)
    }).then((response) => {
      setNextPageUrl(response.data.next)
      setPrevPageUrl(response.data.previous)
      setPokemonsNames(response.data.results)
    })
    return () => cancel()
  };

  const pokemonsDetail = () => {
    const newPokemonDetail = []
    pokemonsNames.forEach((poke) => {
      axios.get(poke.url)
        .then((res) => {
          newPokemonDetail.push(res.data)
          if (newPokemonDetail.length === 20) {
            const order = newPokemonDetail.sort((a, b) => {
              return a.id - b.id
            })
            setPokemonDetail(order)
          }
        })
        .catch((err) => {
          console.log(err)
        })
    })
  }

  const data = {
    pokedex,
    setPokedex,
    pokemonDetail,
    setPokemonDetail,
    currentPageUrl,
    setCurrentPageUrl,
    nextPageUrl,
    setNextPageUrl,
    prevPageUrl,
    setPrevPageUrl
  };

  return (
    <GlobalStateContext.Provider value={data}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};
