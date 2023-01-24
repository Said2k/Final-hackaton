import axios from "axios";
import React, { createContext, useContext, useReducer } from "react";
import { useProducts } from "./productContext";

const API = 'http://34.134.203.27/favorites/'

export const favoriteContext = createContext()

export const useFavorites = () =>{

   return useContext(favoriteContext)
}

const INIT_STATE = {
    favorites: [],

}

const reducer = (state=INIT_STATE, action) =>{
    switch(action.type){
        case 'GET_FAVORITES':
            return {
                ...state, favorites: action.payload,
            }
        default:
            return state
    }
    
}


const FavoritesContextProvider = ({children}) =>{
    const [state, dispatch] = useReducer(reducer,INIT_STATE)


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
        dispatch({
            type: 'GET_FAVORITES',
            payload: res.data 
        })
        console.log(res.data);
    } catch (error) {
        console.log(error);
    }
}

let values ={
    getFavorites,
    favorites: state.favorites,
}


return(

        <favoriteContext.Provider value={values}>{children}</favoriteContext.Provider>
    )

}

export default FavoritesContextProvider;
