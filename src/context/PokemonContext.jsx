import { Children, createContext, useEffect, useState } from "react";

const PokemonContext= createContext();

const PokemonProvider=({children})=>{
    const [fullPokemonList,setFullPokemonList]=useState([]);

    const fetchPokemons=async()=>{
        const res=await fetch(`https://pokeapi.co/api/v2/pokemon?limit=500`);
        const data=await res.json();
        const detailedData=await Promise.all(
            data.results.map((pokemon) =>
          fetch(pokemon.url).then((res) => res.json())
        )
        )
        setFullPokemonList(detailedData)
    }

    useEffect(()=>{
        fetchPokemons()
    },[])
    return <PokemonContext.Provider value={{fullPokemonList}}>{children}</PokemonContext.Provider>
}

export {PokemonContext,PokemonProvider}