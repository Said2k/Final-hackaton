import axios from "axios";
import React, { createContext, useContext, useReducer } from "react";
import { useProducts } from "./productContext";

const API = 'http://34.134.203.27/favorites/'

export const favoriteContext = createContext()

export const useFavorites = () =>{

   return useContext(favoriteContext)
}

const INIT_STATE = {
    favorites_Id: [],
    showFav: [],

}

const reducer = (state=INIT_STATE, action) =>{
    switch(action.type){
        case 'GET_FAVORITES':
            return {
                ...state, favorites_Id: action.payload,
            }
            case 'SHOW_FAVORITES': 
            return{
                ...state, showFav: action.payload
            }
        default:
            return state
    }
    
}


const FavoritesContextProvider = ({children}) =>{
    const [state, dispatch] = useReducer(reducer,INIT_STATE)
    const {getOneProduct, oneProduct} = useProducts()


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



    // const showFavorites =  async() =>{
    //     await getFavorites()
    //     console.log(oneProduct);

    //     state.favorites_Id.map((item)=>{
    //         getOneProduct(item.id, item.product)
    //         dispatch({
    //             type: 'SHOW_FAVORITES',
    //             payload: oneProduct,
    //         })
    //     })
    // }




let values ={
    getFavorites,
    // showFavorites,
    favorites: state.favorites_Id,
}


return(

        <favoriteContext.Provider value={values}>{children}</favoriteContext.Provider>
    )

}

export default FavoritesContextProvider;
