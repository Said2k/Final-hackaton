import axios from "axios";
import React, { createContext, useContext } from "react";

const API = 'http://34.134.203.27/favorites/'

export const favoriteContext = createContext()

export const useFavorites = () =>{
   return useContext(favoriteContext)
}


const FavoritesContextProvider = ({children}) =>{
const getFavorites = async() =>{
    try {
        const token = JSON.parse(localStorage.getItem('token'))
        const Authorization = `Bearer ${token.access}`
        console.log(Authorization);
        const config = {
            headers:{
                Authorization,
            }
        }
        let res = await axios(`${API}`,config)
        console.log(res);
    } catch (error) {
        console.log(error);
    }
}




let values ={
    getFavorites,
}


return(

        <favoriteContext.Provider value={values}>{children}</favoriteContext.Provider>
    )

}

export default FavoritesContextProvider;
