import React from 'react';
import '../styles/Details.css';
import { useLocation, useNavigate } from 'react-router';
import Header from '../component/Header';

function Details() {
    const location = useLocation();
  const pokemon = location.state;
  const navigate=useNavigate();
  if (!pokemon) return <p>No data available</p>;

  const image = pokemon?.sprites?.front_default;
  const types = pokemon?.types?.map((t) => t.type.name).join(', ');
  const abilities = pokemon?.abilities?.map((a) => a.ability.name).join(', ');
  const stats = pokemon?.stats?.map((s) => ({
    name: s.stat.name,
    
    value: s.base_stat,
  }));
  const moves = pokemon?.moves?.slice(0, 5).map((m) => m.move.name).join(', ');

  return (
    <><Header />
    <div className="details-container">
      
      {image && (
        <img src={image} alt={pokemon.name} className="pokemon-image" />
      )}
      <h2 className="pokemon-name">{pokemon.name}</h2>

      <div className="details-info">
        <p><strong>ID:</strong> {pokemon.id}</p>
        <p><strong>Base Experience:</strong> {pokemon.base_experience}</p>
        <p><strong>Height:</strong> {pokemon.height}</p>
        <p><strong>Weight:</strong> {pokemon.weight}</p>
        <p><strong>Type:</strong> {types}</p>
        <p><strong>Abilities:</strong> {abilities}</p>
        <p><strong>Moves (first 5):</strong> {moves}</p>
      </div>

      <div className="stats-section">
        <h3>Stats</h3>
        <ul>
          {stats?.map((stat) => (
            <li key={stat.name}>
              <strong>{stat.name}:</strong> {stat.value}
            </li>
          ))}
        </ul>
      </div>
     
    </div>
    </>
  );
  
}

export default Details;
