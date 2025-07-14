import React, { useContext, useState } from "react";
import "../styles/SearchBar.css";
import { debounce } from "lodash";
import { PokemonContext } from "../context/PokemonContext";

const SearchBar = ({ setPokemonList }) => {
  const [query, setQuery] = useState("");
  const {fullPokemonList}=useContext(PokemonContext);
  const handleSearch =
    debounce((searchTerm) => {
      if (searchTerm.trim() === "") {
        setPokemonList(fullPokemonList);
        return;
      }

      const filtered = fullPokemonList.filter((pokemon) =>
  pokemon.name.toLowerCase().startsWith(searchTerm.toLowerCase())
);

      setPokemonList(filtered);
    }, 300);

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    handleSearch(value);
  };

  return (
    <div className="searchContainer">
      <input
        type="text"
        className="searchInput"
        placeholder="Search Pokémon..."
        value={query}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar;