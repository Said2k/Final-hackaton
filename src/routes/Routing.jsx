import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ProductList from '../components/products/ProductList';
import Forgot from '../components/auth/Forgot';
import ForgotActivity from '../components/auth/ForgotActivity';
import PaymentForm from '../components/CreditCard/Creadit';
import HomePage from '../Page/HomePage';
import LoginPage from '../Page/LoginPage';
import RegisterPage from '../Page/RegisterPage';
import MysteryBookCard from '../components/DetailOrg/MysteryBookCard';
import Busket from '../components/Busket/Busket';
import AboutUs from '../components/aboutUs/AboutUs';
import Menu from '../components/menu/Menu';
import AddOrga from '../components/products/AddOrga';
import EditOrga from '../components/products/EditOrga';
import AddProduct from '../components/products/AddProduct';
import EditProduct from '../components/products/EditProduct';

import SupportBot from '../components/SupportBot/SupportBot';
import Support from '../components/Support/Support';

const Routing = () => {
    return (
        <Routes>
           <Route path='/' element={<HomePage/>}/> 
           <Route path='/login' element={<LoginPage/>}/> 
           <Route path='/register' element={<RegisterPage/>}/> 
           <Route path='/products' element={<ProductList/>}/>
           <Route path='/forgot' element={<Forgot/> }/> 
           <Route path='/forgotActivity' element={<ForgotActivity/> }/> 
           <Route path='/credit' element={<PaymentForm/> }/> 
           <Route path='/detailOrg/:id' element={<MysteryBookCard/> }/> 
           <Route path='/busket' element={<Busket/> }/> 
           <Route path='/aboutus' element={<AboutUs/>}/>
           <Route path='/menu/:id' element={<Menu/>}/>
           <Route path='/add-orga' element={<AddOrga/> }/>
           <Route path='/add-prod/:id' element={<AddProduct/> }/>
           <Route path='/editOrg/:id' element={<EditOrga/> }/> 
           <Route path='/editProd/:id/:id2' element={<EditProduct/> }/> 
           <Route path='/support' element={<Support/>}/>
        </Routes>
    );
};

export default Routing;