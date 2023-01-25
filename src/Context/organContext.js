import React, { createContext, useContext, useReducer } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const orgaContext = createContext();

export const useOrgaContext = () => useContext(orgaContext);

const API = "http://34.134.203.27/organizations/";

const INIT_STATE = {
  orgaProducts: [],
    oneProductOrga: {},
    pages: 0,
};

const reducer = (state=INIT_STATE, action) =>{
    switch(action.type){
        case  'GET_ORGA': 
        return {
            ...state, 
            pages: Math.ceil(action.payload.count / 6),
            orgaProducts: action.payload.results,
        }
        case 'GET_ONE_ORGA':
            return {
                ...state, oneProductOrga: action.payload,
            }
            default: 
            return state
        }
    }
const OrgaContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const location = useLocation();
  const navigate = useNavigate();

  const addOrga = async (newProduct) => {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const Authorization = `Bearer ${token.access}`;
      console.log(Authorization);
      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios.post(`${API}`, newProduct, config);
      getOrga();
      console.log(res);
    } catch (error) {
      console.log(error);

  
}


    }
  

 const getOrga = async ()=>{
        try {
            const res = await axios(`${API}${window.location.search}`)
            dispatch({
                type: 'GET_ORGA',
                payload: res.data
            })
            console.log(res.data);
        } catch (error) {
            console.log(error);
        }
    }
  

  const getOneOrga = async (id) => {
    try {
      const res = await axios(`${API}${id}/`);
      console.log(res);
      dispatch({
        type: "GET_ONE_ORGA",
        payload: res.data,
      });
    } catch (error) {
      console.log(error);

    }
  };

  const editOrga = async (id, newObj) => {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const Authorization = `Bearer ${token.access}`;
      console.log(Authorization);
      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios.patch(`${API}${id}/`, newObj, config);
      console.log(res.data.results);
      getOrga();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteOrga = async (id) => {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const Authorization = `Bearer ${token.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios.delete(`${API}${id}/`, config);
      console.log(res);
      getOrga();
    } catch (error) {
      console.log(error);
    }
  };

  const likeOrga = async (id) => {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const Authorization = `Bearer ${token.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios.post(`${API}${id}/like/`, {}, config);
      console.log(res);
      getOrga()
    } catch (error) {
      console.log(error);
    }
  };

  const ratingOrga = async (id,rating) => {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const Authorization = `Bearer ${token.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios.post(`${API}${id}/rating/`, rating, config);
      console.log(res);
      getOneOrga(id);
    } catch (error) {
      console.log(error);
    }
  };

  const subscribeOrga = async (id) => {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const Authorization = `Bearer ${token.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      let res = await axios.post(`${API}${id}/subscribe/`, {}, config);
      console.log(res);
      getOneOrga(id);

    } catch (error) {
      console.log(error);
    }
  };

  const fetchByParams = async (query, value) => {
    const search = new URLSearchParams(location.search);

    if (value == "all") {
      search.delete(query);
    } else {
      search.set(query, value);
    }
    const url = `${location.pathname}?${search.toString()}`;
    navigate(url);
  };

  const values = {
    addOrga,
    getOrga,
    getOneOrga,
    editOrga,
    deleteOrga,
    likeOrga,
    ratingOrga,
    subscribeOrga,
    fetchByParams,

    pages: state.pages,
    orgaProducts: state.orgaProducts,
    oneProductOrga: state.oneProductOrga,
  };

  return <orgaContext.Provider value={values}>{children}</orgaContext.Provider>;
};

export default OrgaContextProvider;
