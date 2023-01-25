import React, { createContext, useContext, useReducer } from "react";
import axios from "axios";

const dellContext = createContext();

export const useDell = () => useContext(dellContext);

const API = "http://34.134.203.27/deliveries/";

const INIT_STATE = {
  dellProducts: [],
  oneProductdell: {},
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_DELL":
      return {
        ...state,
        dellProducts: action.payload,
      };
    case "GET_ONE_DELL":
      return {
        ...state,
        oneProductdell: action.payload,
      };
    default:
      return state;
  }
};

const DellContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const addDell = async (newProduct) => {
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
      getDell();
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const getDell = async () => {
    try {
      const res = await axios(`${API}`);
      dispatch({
        type: "GET_DELL",
        payload: res,
      });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const getOneDell = async (activation_code) => {
    try {
      const res = await axios(`${API}/accept/${activation_code}/`);
      console.log(res);
      dispatch({
        type: "GET_ONE_DELL",
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const addDellCarts = async (newProduct) => {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const Authorization = `Bearer ${token.access}`;
      console.log(Authorization);
      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios.post(`${API}${1}/carts/`, newProduct, config);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const values = {
    addDell,
    getDell,
    getOneDell,
    addDellCarts,

    dellProducts: state.dellProducts,
    oneProductdell: state.oneProductdell,
  };

  return <dellContext.Provider value={values}>{children}</dellContext.Provider>;
};

export default DellContextProvider;
