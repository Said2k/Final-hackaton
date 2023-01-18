import axios from "axios";
import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";


export const authContext = createContext()


export const useAuth = () =>{
    return useContext(authContext)
}

    const API = 'http://34.134.203.27/account/'
const AuthContextProvider = ({children}) =>{
const [user,setUser] = useState('')
const [error, setError]= useState('')

const navigate = useNavigate()



//! =========== REGISTER start ==========


const register = async(formData)=>{
try {
    const res = await axios.post(`${API}/register/`, formData)
    navigate('/login')
    console.log(res);
} catch (error) {
    console.log(error);
    setError(Object.values(error.response.data).flat(2))
}

}

// ! ============ REGISTER END ===========



//! ============ LOGIN START ============

//  const login = async (formData, email)=>{
//     try {
//         let res = await axios.post(`${API}login/`, formData)
//         console.log(res);
//         localStorage.setItem('token', JSON.stringify(res.data))
//         localStorage.setItem('username', email)
//         setUser(email)
//         navigate('/')
//     } catch (error) {
//         console.log(error.response.data.detail);
//         setError(error.response.data.detail)
        
//     }
// }

const login = async (formData, email) =>{
    try {
        let res = await axios.post(`${API}login/`,formData)
        
        localStorage.setItem('token', JSON.stringify(res.data))
        localStorage.setItem('username', email)
        setUser(email)
        navigate('/')
    } catch (error) {
        console.log(error);
        setError(error.response.data.detail)
    }
}

//! ============ LOGIN END ==============


const checkUser = async () =>{
    let token =JSON.parse(localStorage.getItem('token'))
    console.log(token);
    try {
        const Authorization = `Bearer ${token.access}`;
        let res = await axios.post(`${API}login/refresh/`, {
            refresh: token.refresh
        },{
            headers: {Authorization},
        }
        )
        console.log(res);
        localStorage.setItem('token', JSON.stringify({refresh: token.refresh, access: res.data.access}))
        let username = localStorage.getItem('username')
        setUser(username)
    } catch (error) {
        console.log(error);

    }
}


    const logout = () =>{
        localStorage.removeItem('token')
        localStorage.removeItem('username')
        setUser('')

        navigate('/login')
    }


        const values ={
            logout,
            login,
            register,
            checkUser,
            setError,

            error,
            user,
        }


    return( 
        <authContext.Provider value={values}>
            {children}
            </authContext.Provider>

    )

}
export default AuthContextProvider