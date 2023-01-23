import React, { createContext, useContext, useReducer } from "react";
import axios from "axios";


const orgaContext = createContext()

export const useOrgaContext = () =>useContext(orgaContext)

const API = 'http://34.134.203.27/organizations/'

const INIT_STATE = {
    orgaProducts: [],
    oneProductOrga: {},
}

const reducer = (state=INIT_STATE, action) =>{
    switch(action.type){
        case  'GET_ORGA': 
        return {
            ...state, orgaProducts: action.payload,
        }
        case 'GET_ONE_ORGA':
            return {
                ...state, oneProductOrga: action.payload,
            }
            default: 
            return state
    }
}



const OrgaContextProvider =({children})=>{

    const [state, dispatch] = useReducer(reducer, INIT_STATE)



    const addOrga = async(newProduct) =>{
        try {
            const token = JSON.parse(localStorage.getItem('token'))
            const Authorization = `Bearer ${token.access}`
            console.log(Authorization);
            const config = {
                headers:{
                    Authorization,
                }
            }
            const res = await axios.post(`${API}`,newProduct, config)
            console.log(res);
        } catch (error) {
            console.log(error);

        }
    }

    const getOrga = async ()=>{
        try {
            const res = await axios(`${API}`)
            dispatch({
                type: 'GET_ORGA',
                payload: res.data.results
            })
            console.log(res.data);
        } catch (error) {
            console.log(error);
        }
    }

    const getOneOrga = async(id) =>{
        try {
            const res = await axios(`${API}${id}/`)
            console.log(res);    
            dispatch({
                type: 'GET_ONE_ORGA',
                payload: res.data
            })
        } catch (error) {
            console.log(error);
            
        }
        
    }

    const editOrga = async (id, newObj) =>{
        try {
            const token = JSON.parse(localStorage.getItem('token'))
            const Authorization = `Bearer ${token.access}`
            console.log(Authorization);
            const config = {
                headers:{
                    Authorization,
                }
            }
            const res = await axios.patch(`${API}${id}/`,newObj,config)
            console.log(res.data.results);
            getOrga()
        } catch (error) {
            console.log(error);
        }
    }

    const deleteOrga = async (id) =>{
        try {
            const token = JSON.parse(localStorage.getItem('token'))
            const Authorization = `Bearer ${token.access}`
            const config = {
                headers:{
                    Authorization,
                }
            }
            const res = await axios.delete(`${API}${id}/`,config)
            console.log(res);
            getOrga()
        } catch (error) {
            console.log(error);
        }
    }


    const likeOrga = async (id) =>{
        try {
            const token = JSON.parse(localStorage.getItem('token'))
            const Authorization = `Bearer ${token.access}`
            const config = {
                headers:{
                    Authorization,
                }
            }
            const res =await axios.post(`${API}${id}/like/`,{},config)
            console.log(res);
            getOrga()
        } catch (error) {
            console.log(error);
        }
    }

    const ratingOrga = async (id) =>{
        try {
            const token = JSON.parse(localStorage.getItem('token'))
            const Authorization = `Bearer ${token.access}`
            const config = {
                headers:{
                    Authorization,
                }
            }
            const res =await axios.post(`${API}${id}/rating/`,{value: 3},config)
            console.log(res);
            getOrga()
        } catch (error) {
            console.log(error);
        }
    }
   

    
    const values = {
        addOrga,
        getOrga,
        getOneOrga,
        editOrga,
        deleteOrga,
        likeOrga,
        ratingOrga,


        orgaProducts: state.orgaProducts,
        oneProductOrga: state.oneProductOrga,
    }

    return(
        <orgaContext.Provider value={values}>{children}</orgaContext.Provider>
    )

}

export default OrgaContextProvider;