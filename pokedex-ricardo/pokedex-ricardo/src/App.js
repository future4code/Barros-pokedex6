import React from "react"
import './App.css';
import Navbar from './components/NavBar';
import SearchBar from './components/SearchBar';
import searchPokemon from './Api';


const onSearchHandler = async (pokemon) => {
  const result = await searchPokemon(pokemon)
  console.log("pokemon ", result);
}
function App() {
  return (
    <div>
      <Navbar/>
      <SearchBar 
        onSearch={onSearchHandler}
      />

      <div className="App">
        
      </div>
    </div>

  );
}

export default App;
