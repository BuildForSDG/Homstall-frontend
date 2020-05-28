import React from 'react';

import { SearchContainer, SearchIcon } from './search.container';
const Search = () => {
  return (
    <SearchContainer>
      <SearchIcon />
      <input type="search" placeholder="Search" />
    </SearchContainer>
  );
};

export default Search;
