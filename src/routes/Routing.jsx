import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ProductList from '../components/products/ProductList';
import HomePage from '../Page/HomePage';
import LoginPage from '../Page/LoginPage';
import RegisterPage from '../Page/RegisterPage';

const Routing = () => {
    return (
        <Routes>
           <Route path='/' element={<HomePage/>}/> 
           <Route path='/login' element={<LoginPage/>}/> 
           <Route path='/register' element={<RegisterPage/>}/> 
           <Route path='/products' element={<ProductList/>}/>
        </Routes>
    );
};

export default Routing;