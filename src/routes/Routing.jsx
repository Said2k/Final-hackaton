import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ProductList from '../components/products/ProductList';
import Forgot from '../components/auth/Forgot';
import ForgotActivity from '../components/auth/ForgotActivity';

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
           <Route path='/forgot' element={<Forgot/> }/> 
           <Route path='/forgotActivity' element={<ForgotActivity/> }/> 
        </Routes>
    );
};

export default Routing;