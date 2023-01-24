import axios from 'axios'
import react, { createContext, useContext, useReducer } from 'react'

export const recommendContext = createContext()

export const useRecommend = () =>{
   return useContext(recommendContext)
}


const API = 'http://34.134.203.27/'

const INIT_STATE = {
    recommend: [],
    history: []

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
        default:
            return state
    }
    
}

const RecommendContextProvider = ({children}) =>{
    const [state, dispatch] = useReducer(reducer, INIT_STATE)


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

    let values = {
        getRec,
        getHistory,
        recomm: state.recommend,
        history: state.history,
    }

    return(
        <recommendContext.Provider value={values}>{children}</recommendContext.Provider>
    )

}

    export default RecommendContextProvider