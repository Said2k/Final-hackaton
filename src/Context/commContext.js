import axios from "axios";
import React, { createContext, useContext, useReducer } from "react";

export const commContext = createContext();
export const useComm = () => useContext(commContext);

const API = "http://34.134.203.27/organizations/";

const INIT_STATE = {
  commProducts: [],
  oneProductComm: {},
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_COMM":
      return {
        ...state,
        commProducts: action.payload,
      };
    case "GET_ONE_COMM":
      return {
        ...state,
        oneProductComm: action.payload,
      };
    default:
      return state;
  }
};

const CommContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  // добавление комментариев
  async function addComment(id, obj) {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const Authorization = `Bearer ${token.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      let res = await axios.post(`${API}${id}/comments/`, obj, config);
      getComm(id)
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }
  // отображение комментариев
  const getComm = async (id) => {
    try {
      const res = await axios(`${API}${id}/comments/`);
      dispatch({
        type: "GET_COMM",
        payload: res.data.results,
      });
      console.log(res.data.results);
    } catch (error) {
      console.log(error);
    }
  };
  // удаление
  const deleteComm = async (organization, id) => {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const Authorization = `Bearer ${token.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios.delete(
        `${API}${organization}/comments/${id}/`,
        config
      );
      console.log(res);
      getComm(organization);
    } catch (error) {
      console.log(error);
    }
  };

  // вытаскиваем один коммент
  const getOneComment = async (organization, id) => {
    try {
      const res = await axios(`${API}${organization}/comments/${id}/`);
      console.log(res);
      dispatch({
        type: "GET_ONE_COMM",
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const editComm = async (organization, id, newObj) => {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const Authorization = `Bearer ${token.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios.patch(
        `${API}${organization}/comments/${id}/`,
        newObj,
        config
      );
      console.log(res);
      getComm(organization);
    } catch (error) {
      console.log(error);
    }
  };

  let values = {
    addComment,
    getComm,
    deleteComm,
    getOneComment,
    editComm,

    commProducts: state.commProducts,
    oneProductComm: state.oneProductComm,
  };
  return <commContext.Provider value={values}>{children}</commContext.Provider>;
};

export default CommContextProvider;
