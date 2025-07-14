import React, { useContext, useEffect, useState } from 'react';
import Header from '../component/Header';
import { FavouriteContext } from '../context/FavouriteContext';
import PokemonCard from '../component/PokemonCard';

import '../styles/Dashboard.css'; // for styling like grid display

function List() {
  const [pokemons, setPokemons] = useState([]);
  const { favourite } = useContext(FavouriteContext);
  const [loading,setLoading]=useState(false)
  const fetchPokemons = async () => {
    try {
        setLoading(true)
      const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=500'); // Use 100 for performance
      const data = await res.json();

     const detailedData = await Promise.all(
        data.results.map((pokemon) =>
          fetch(pokemon.url).then((res) => res.json())
        )
      );
      
      setPokemons(detailedData);
    } catch (error) {
      console.log(error);
    }finally{
        setLoading(false)
    }
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  // Filter only favourite pokemons
  const favouritePokemons = pokemons.filter(p => favourite.includes(p.id));

  return (
    <>
      <Header />
      <div>
        <h2 style={{textAlign:'center'}}>Favourite Pokemon List</h2>
        {
            loading ? <p>Loading...</p>: <div className="pokemon-grid">
          {favouritePokemons.length > 0 ? (
            favouritePokemons.map((pokemon) => (
              <PokemonCard key={pokemon.id} pokemon={pokemon} />
            ))
          ) : (
            <p>No favourites selected.</p>
          )}
        </div>
        }
       
      </div>
    </>
  );
}

export default List;
