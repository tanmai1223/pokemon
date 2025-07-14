import React, { useContext } from 'react';
import '../styles/PokemonCard.css';
import { useNavigate } from 'react-router';
import { FavouriteContext } from '../context/FavouriteContext';

function PokemonCard({ pokemon }) {
  const navigate = useNavigate();
  const { favourite, toggleChange } = useContext(FavouriteContext);
  const isFavourite = favourite.includes(pokemon.id);

  return (
    <>
   
    
    <div className="pokemon-card" onClick={() => navigate('/details', { state: pokemon })}>
      
      <button
        className="favourite-button"
        onClick={(e) => {
          e.stopPropagation(); // Prevent navigation
          toggleChange(pokemon.id);
        }}
      >
        {isFavourite ? '★' : '☆'}
      </button>

      <img
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
        className="pokemon-image"
      />
      <h3 className="pokemon-name">{pokemon.name}</h3>
      <p>ID: {pokemon.id}</p>
      <p>Type: {pokemon.types.map((t) => t.type.name).join(", ")}</p>
    </div>
    </>
  );
}

export default PokemonCard;
