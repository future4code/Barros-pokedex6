import React  from 'react';
import NavBar from './components/NavBar';
import Pokedex from './components/Pokedex';
import SearchBar from './components/SearchBar';
import { useEffect, useState } from 'react';
import { getPokemons, getPokemonsData, searchPokemon } from "./api"
import { FavoriteProvider } from './contexts/favoriteContext';
import { NotFoundStyle } from './components/Styled';
const favoritesKey = "Favoritos"
function App() {
  
  const [page,setPage] = useState(0)
  const [totalPages,setTotalPages] = useState(0)
const [notFound, setNotFound] = useState(false)
  const [pokemons, setPokemons] = useState([])
  const [loading, setLoading] = useState(false)
  const itensPerPage = 25
  const [favorites, setFavorites] = useState([])
  
  const fetchPokemons = async () => {
    try {
      setLoading(true)
      setNotFound(false);
      const data = await getPokemons(itensPerPage, itensPerPage * page);
      const promises = data.results.map(async (pokemon) =>{
        return await getPokemonsData(pokemon.url)
      });
     const results = await Promise.all(promises);
      setPokemons(results);
      setLoading(false);
      setTotalPages(Math.ceil(data.count/ itensPerPage))

    } catch (error) {
      console.log("fetchPokemons:", error);
      
    };
   

  };
 const loadFavoritePokemons = () =>{
 const pokemons= JSON.parse(window.localStorage.getItem(favoritesKey)) || []
 setFavorites(pokemons)

 }
  useEffect(()=>{
    loadFavoritePokemons()
    
  },[]);
  useEffect(()=>{
    console.log("carregou");
    fetchPokemons();
    
  },[page]);

  const updateFavoritePokemons = (name) =>{
    const updateFavorites = [...favorites]
    const favoriteIndex = favorites.indexOf(name)
    if(favoriteIndex >= 0){
      updateFavorites.slice(favoriteIndex, 1);

    }else{
      updateFavorites.push(name);

    };
    window.localStorage.setItem(favoriteIndex, JSON.stringify(updateFavorites))
    setFavorites(updateFavorites);
  }
 
 const onSearchHandler = async (pokemon) =>{
  if(!pokemon){
   return fetchPokemons();
  };
  setLoading(true)
  setNotFound(false)
  const result = await searchPokemon(pokemon)
  if(!result){
    
    setNotFound(true)
  } else{
    setPokemons([result])
    setPage(0)
    setTotalPages(1)
  }
  setLoading(false)
 } 
  return (
    <FavoriteProvider
    value={{favoritePokemons: favorites , updateFavoritePokemons: updateFavoritePokemons}}>
    <div>
      <NavBar/>
      <SearchBar onSearch={onSearchHandler} />
      {notFound ? (
        <NotFoundStyle className='Not-found'> Não encontrado </NotFoundStyle>
      ) : 
     ( <Pokedex setPage={setPage} pokemons={pokemons} loading={loading} page={page} totalPages={totalPages}/>)}
      
    </div>
    </FavoriteProvider>
  )
};

export default App;
