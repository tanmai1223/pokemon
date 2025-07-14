import React, { useContext, useEffect, useState } from 'react';
import PokemonCard from '../component/PokemonCard';
import '../styles/Dashboard.css';
import Header from '../component/Header';
import SearchBar from '../component/SearchBar';
function Dashboard() {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [offSet, setOffSet] = useState(0);
   
  const fetchPokemons = async () => {
    setLoading(true);
    try {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${offSet}`);
      const data = await res.json();
      
      const detailedData = await Promise.all(
        data.results.map((pokemon) =>
          fetch(pokemon.url).then((res) => res.json())
        )
      );
      
      setPokemonList(detailedData);
      
    } catch (error) {
      console.log('Error is', error);
    } finally {
      setLoading(false);
    }
    
  };

  useEffect(() => {
    fetchPokemons();
  }, [offSet]);
  
  
  return (
    <>
      <Header />
      <SearchBar
        setPokemonList={setPokemonList}
        
      />
      <div className="dashboard">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="pokemon-grid">
            {pokemonList.map((pokemon) => (
              <PokemonCard key={pokemon.id} pokemon={pokemon} />
            ))}
          </div>
        )}
        <div className="pagination">
          <button
            className="button"
            onClick={() => setOffSet((prev) => (prev - 10 >= 0 ? prev - 10 : 0))}
            disabled={offSet === 0}
          >
            Previous
          </button>
          <button
            className="button"
            onClick={() => setOffSet((prev) => prev + 10)}
            disabled={offSet + 10 >= 500}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
