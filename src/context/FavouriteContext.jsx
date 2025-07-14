import { createContext, useEffect, useState } from "react";

const FavouriteContext=createContext();

const FavouriteProvider=({children})=>{
    const userFavourite=JSON.parse(localStorage.getItem('user-favourite')??'[]')
 const [favourite,setFavourite]=useState(userFavourite);

 const toggleChange=(pokemonId)=>{
    const favouriteExists=favourite.find((favouritePokemonId)=>favouritePokemonId === pokemonId);
    if(favouriteExists){
        setFavourite(favourite.filter((favouritePokemonId)=>favouritePokemonId!=pokemonId));
    }else{
        setFavourite([...favourite,pokemonId]);
    }
 }
 useEffect(()=>{
    localStorage.setItem("user-favourite",JSON.stringify(favourite))
 },[favourite])
 return <FavouriteContext.Provider value={{favourite,toggleChange}}>{children}</FavouriteContext.Provider>
}
export {FavouriteContext,FavouriteProvider}