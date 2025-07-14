import { createContext, useState } from "react";


const AuthContext=createContext();

const AuthProvider=({children})=>{
    const userDetails=localStorage.getItem('cvt-user')
    const [user,setUser]=useState(userDetails ?? null);
    
    const login=(userDetails)=>{
        setUser(userDetails)
        localStorage.setItem('cvt-user',JSON.stringify(userDetails))
    }

    const logout=()=>{
        setUser(null)
        
        localStorage.removeItem('cvt-user')

    }

    return <AuthContext.Provider value={{user,login,logout}}>{children}</AuthContext.Provider>
}
export {AuthContext,AuthProvider}