import React  from 'react';
import NavBar from './components/NavBar';
import Pokedex from './components/Pokedex';
import SearchBar from './components/SearchBar';
import { useEffect, useState } from 'react';
import { getPokemons, getPokemonsData } from "./api"

function App() {
  const [pokemons, setPokemons] = useState([])
  const [loading, setLoading] = useState(false)
  const fetchPokemons = async () => {
    try {
      setLoading(true)
      const data = await getPokemons();
      const promises = data.results.map(async (pokemon) =>{
        return await getPokemonsData(pokemon.url)
      });
     const results = await Promise.all(promises);
      setPokemons(results);
      setLoading(false);

    } catch (error) {
      console.log("fetchPokemons:", error);
      
    };
   

  }
  useEffect(()=>{
    console.log("carregou");
    fetchPokemons();
  },[])
 
  
  return (
    <div>
      <NavBar/>
      <SearchBar/>
      <Pokedex pokemons={pokemons} loading={loading}/>
      
    </div>
  )
};

export default App;
