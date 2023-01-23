import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ProductList from '../components/products/ProductList';
import Forgot from '../components/auth/Forgot';
import ForgotActivity from '../components/auth/ForgotActivity';

import HomePage from '../Page/HomePage';
import LoginPage from '../Page/LoginPage';
import RegisterPage from '../Page/RegisterPage';
import Busket from '../components/Busket/Busket';
import AboutUs from '../components/aboutUs/AboutUs';
import Menu from '../components/menu/Menu';
import AddOrga from '../components/products/AddOrga';

const Routing = () => {
    return (
        <Routes>
           <Route path='/' element={<HomePage/>}/> 
           <Route path='/login' element={<LoginPage/>}/> 
           <Route path='/register' element={<RegisterPage/>}/> 
           <Route path='/products' element={<ProductList/>}/>
           <Route path='/forgot' element={<Forgot/> }/> 
           <Route path='/forgotActivity' element={<ForgotActivity/> }/> 
           <Route path='/busket' element={<Busket/> }/> 
           <Route path='/aboutus' element={<AboutUs/>}/>
           <Route path='/menu' element={<Menu/>}/>
           <Route path='/add-orga' element={<AddOrga/> }/>
        </Routes>
    );
};

export default Routing;