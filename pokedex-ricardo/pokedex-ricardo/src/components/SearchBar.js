import React from "react"
import { useState } from "react"

const SearchBar = (props) => {
    const {onSearch} = props
    const [search, setSearch] = useState("dito")

    const onChangeHandle = (e) => {
        console.log("pokemon: ", e.target.value);
        setSearch(e.target.value)
    }

    const onButtonClickHandler = () => {
        onSearch(search);
    }
    return (
        <div className="searchbar-container">
            <div className="searchbar">
                <input placeholder="Buscar Pokemon" onChange={onChangeHandle}/>
            </div>

            <div className="searchbar-btn">
                <button onClick={onButtonClickHandler} >Buscar</button>
            </div>
        </div>
    )
    
}

export default SearchBar;