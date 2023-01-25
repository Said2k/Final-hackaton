import axios from 'axios'
import react, { createContext, useContext, useReducer } from 'react'
import { useLocation } from 'react-router-dom'

export const recommendContext = createContext()

export const useRecommend = () =>{
   return useContext(recommendContext)
}


const API = 'http://34.134.203.27/'

const INIT_STATE = {
    recommend: [],
    history: [],
    searchProd: [],
    quations: [],
    answer: [],

}

const reducer = (state=INIT_STATE, action) =>{
    switch(action.type){
        case 'GET_RECOMMEND':
            return {
                ...state, recommend: action.payload
            }
            case 'GET_HISTORY':
                return {
                    ...state, history: action.payload
                }
            case 'GET_SEARCH':
                return {
                    ...state, searchProd: action.payload
                }
            case 'GET_QUATIONS' :
                return {
                    ...state, quations: action.payload
                } 
            case 'GET_ANSWER': 
            return {
                ...state, answer: action.payload
            }    
        default:
            return state
    }
    
}

const RecommendContextProvider = ({children}) =>{
    const [state, dispatch] = useReducer(reducer, INIT_STATE)
    const location = useLocation()


    const getRec = async()=>{
        try {
            const token = JSON.parse(localStorage.getItem('token'))
            const Authorization = `Bearer ${token.access}`
            const config = {
                headers:{
                    Authorization,
                }
            }
            let res = await axios(`${API}recommendations/`,config)
            dispatch({
                type: 'GET_RECOMMEND',
                payload: res.data
            })
            console.log(res);

        } catch (error) {
            console.log(error);
        }
    }



    const getHistory = async ()=>{
       
            try {
                const token = JSON.parse(localStorage.getItem('token'))
                const Authorization = `Bearer ${token.access}`
                const config = {
                    headers:{
                        Authorization,
                    }
                }
                let res = await axios(`${API}users/history/`,config)
                dispatch({
                    type: 'GET_HISTORY',
                    payload: res.data
                })
                console.log(res);
        } catch (error) {
            console.log(error);
        }
    }


    const supportBot = async()=>{
       
            try {
                const token = JSON.parse(localStorage.getItem('token'))
                const Authorization = `Bearer ${token.access}`
                const config = {
                    headers:{
                        Authorization,
                    }
                }
                let res = await axios(`${API}support-bot/${window.location.search}`,config)
                dispatch({
                    type: 'GET_QUATIONS',
                    payload: res.data
                })
                console.log(res);
        } catch (error) {
           console.log(error); 
        }
    }
    const supportBotAnswer = async(id)=>{
       
            try {
                const token = JSON.parse(localStorage.getItem('token'))
                const Authorization = `Bearer ${token.access}`
                const config = {
                    headers:{
                        Authorization,
                    }
                }
                let res = await axios(`http://34.134.203.27/support-bot/?q=${id}`,config)
                dispatch({
                    type: 'GET_ANSWER',
                    payload: res.data
                })
                console.log(res);
        } catch (error) {
           console.log(error); 
        }
    }
    const search = async() =>{
        try {
            const token = JSON.parse(localStorage.getItem('token'))
            const Authorization = `Bearer ${token.access}`
            const config = {
                headers:{
                    Authorization,
                }
            }
            let {data} = await axios(`${API}search/${window.location.search}`,config)
            dispatch({
                type: 'GET_SEARCH',
                payload: data,
            })
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }


    let values = {
        getRec,
        getHistory,
        recomm: state.recommend,
        history: state.history,
        supportBot,
        supportBotAnswer,
        answer: state.answer,
        quations: state.quations,
        search,
        searchProd: state.searchProd,
    }

    return(
        <recommendContext.Provider value={values}>{children}</recommendContext.Provider>
    )

}

    export default RecommendContextProvider ;