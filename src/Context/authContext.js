import axios from "axios";
import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const authContext = createContext();
export const useAuth = () => useContext(authContext);

const API = "http://34.134.203.27/users/";

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  // регистрация
  const register = async (formData) => {
    try {
      const res = await axios.post(`${API}register/`, formData);
      console.log(res);
      navigate("/login");
    } catch (error) {
      console.log(Object.values(error.response.data).flat(2));
      console.log(error);
      setError(Object.values(error.response.data).flat(2));
    }
  };

  // авторизация
  const login = async (formData, email) => {
    try {
      const res = await axios.post(`${API}login/`, formData);
      console.log(res);
      localStorage.setItem("token", JSON.stringify(res.data));
      localStorage.setItem("username", email);
      setUser(email);
      navigate("/");
    } catch (error) {
      console.log(error.response.data.detail);
      setError(error.response.data.detail);
    }
  };

  // проверка access токена на действительность
  async function checkAuth() {
    let token = JSON.parse(localStorage.getItem("token"));
    // console.log(token);
    try {
      const Authorization = `Bearer ${token.access}`;

      let res = await axios.post(
        `${API}login/refresh/`,
        {
          refresh: token.refresh,
        },
        {
          headers: { Authorization },
        }
      );

      localStorage.setItem(
        "token",
        JSON.stringify({ refresh: token.refresh, access: res.data.access })
      );

      let username = localStorage.getItem("username");

      setUser(username);

      // console.log(res);
    } catch (error) {
      console.log(error);
    }
  }

  // выход из аккаунта
  function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    setUser("");
    navigate("/");
  }
  // восстановление пароля
  const getPassword = async (email) => {
    try {
      await axios(`${API}forgot/?email=${email}`);
      navigate("/forgotActivity");
    } catch (error) {
      console.log(error);
    }
  };
  // активация ключа
  const postActivity = async (key, formData) => {
    try {
      const res = await axios.post(`${API}accept/${key}/`, formData);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  let values = {
    checkAuth,
    register,
    error,
    setError,
    login,
    user,
    logout,
    getPassword,
    postActivity,
  };

  return <authContext.Provider value={values}>{children}</authContext.Provider>;
};

export default AuthContextProvider;
