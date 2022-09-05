import React from "react"
import { useState } from "react"

const SearchBar = () => {
    const [search, setSearch] = useState("dito")

    const onChangeHandle = (e) => {
        console.log("pokemon: ", e.target.value);
        setSearch(e.target.value)
    }
    return (
        <div className="searchbar-container">
            <div className="searchbar">
                <input placeholder="Buscar Pokemon" onChange={onChangeHandle}/>
                {search}
            </div>
        </div>
    )
    
}

export default SearchBar;