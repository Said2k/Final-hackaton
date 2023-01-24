import axios from 'axios'
import react, { createContext, useContext, useReducer } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';


export const productContext = createContext()

export const useProducts = () =>{
   return useContext(productContext)
}


const API = 'http://34.134.203.27/organizations/'

const INIT_STATE = {
    products: [],
    oneProduct: {},

}

const reducer = (state=INIT_STATE, action) =>{
    switch(action.type){
        case 'GET_PRODUCT':
            return {
                ...state, products: action.payload
            }
        case 'GET_ONE_PRODUCT': 
        return {
            ...state, oneProduct: action.payload,
        }
        default:
            return state
    }
    
}

const ProductContextProvider = ({children}) =>{
    const [state, dispatch] = useReducer(reducer, INIT_STATE)
  



    const addProduct = async(organization, newProduct) =>{
        try {
            const token = JSON.parse(localStorage.getItem('token'))
            const Authorization = `Bearer ${token.access}`
            const config = {
                headers:{
                    Authorization,
                }
            }
            const res = await axios.post(`${API}${organization}/products/`,newProduct, config)
            console.log(res);
        } catch (error) {
            console.log(error);

        }
    }

    const getProduct = async (organization)=>{
        try {
            const res = await axios(`${API}${organization}/products/`)
            dispatch({
                type: 'GET_PRODUCT',
                payload: res.data.results
            })
            console.log(res.data.results);
        } catch (error) {
            console.log(error);
        }
    }

    const getOneProduct = async(organization, id) =>{
        try {
            const res = await axios(`${API}${organization}/products/${id}/`)
            console.log(res);    
            dispatch({
                type: 'GET_ONE_PRODUCT',
                payload: res.data
            })
        } catch (error) {
            console.log(error);
            
        }
        
    }

    const editProduct = async (organization, id, newObj) =>{
        try {
            const token = JSON.parse(localStorage.getItem('token'))
            const Authorization = `Bearer ${token.access}`
            const config = {
                headers:{
                    Authorization,
                }
            }
            const res = await axios.patch(`${API}${organization}/products/${id}/`,newObj,config)
            console.log(res);
            getProduct(organization)
        } catch (error) {
            console.log(error);
        }
    }

    const deleteProduct = async (organization, id) =>{
        try {
            const token = JSON.parse(localStorage.getItem('token'))
            const Authorization = `Bearer ${token.access}`
            const config = {
                headers:{
                    Authorization,
                }
            }
            const res = await axios.delete(`${API}${organization}/products/${id}`,config)
            console.log(res);
            getProduct(organization)
        } catch (error) {
            console.log(error);
        }
    }


    const addFavorite = async(organization, id) =>{
        try {
            const token = JSON.parse(localStorage.getItem('token'))
            const Authorization = `Bearer ${token.access}`
            const config = {
                headers:{
                    Authorization,
                }
            }
            console.log(config);
            const res = await axios.put(`${API}${organization}/products/${id}/favorite/`, {},config)
            console.log(res);
        } catch (error) {
            console.log(error);
        }
        }

       



    
    const values = {
        addProduct,
        getProduct,
        getOneProduct,
        editProduct,
        deleteProduct,
        addFavorite,
       


        product: state.products,
        oneProduct: state.oneProduct,
    }
    return(
        <productContext.Provider value={values}>{children}</productContext.Provider>
    )

}
export default ProductContextProvider

