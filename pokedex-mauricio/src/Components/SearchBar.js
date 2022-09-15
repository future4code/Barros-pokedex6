import React, { useState } from "react";

import { SearchBarStyle } from "./Styled";
const SearchBar = (props) => {
  const [search, setSearch] = useState("ditto");
  const { onSearch } = props;
  const onChangeHandler = (e) => {
    setSearch(e.target.value);
    if (e.target.value.lenght === 0) {
      onSearch(undefined);
    }
  };

  const onButtonClickHandler = () => {
    onSearch(search);
  };

  return (
    <SearchBarStyle>
      <div>
        <input placeholder="Buscar Pokemon" onChange={onChangeHandler} />
      </div>
      <div className="search-btn">
        <button onClick={onButtonClickHandler}>Buscar</button>
      </div>
    </SearchBarStyle>
  );
};
export default SearchBar;
