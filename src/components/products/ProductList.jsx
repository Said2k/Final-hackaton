import { Box, CardMedia, FormControlLabel, Pagination, Radio, RadioGroup } from '@mui/material';
import React, { useState } from 'react';
import FavoritesSidebar from '../favorites/FavoritesSidebar';


import { useEffect } from 'react';
import { useOrgaContext } from '../../Context/organContext';
import Footer from '../footer/Footer';
import '../products/ProductList.css'
import ProductCard from './ProductListCard';
import { useProducts } from '../../Context/productContext';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../../Context/authContext';
const ProductList = ({item}) => {
    const { getOrga, orgaProducts,subscribeOrga,fetchByParams,pages} = useOrgaContext()
    const [searchParams, setSearchParams] = useSearchParams();
    const [searchProduct, setSearchProduct] = useState(searchParams.get('q')|| '')
    const [currentPage, setCurrentPage] = useState(1)
    const navigate = useNavigate()
    const {user} = useAuth()
console.log(user);


    useEffect(()=>{
        setSearchParams({
            q: searchProduct,
        })
        getOrga()
    },[searchProduct])
    
    useEffect(()=>{
        getOrga()
    },[searchParams])
    
    
    useEffect(()=>{
        setSearchParams({
            page: currentPage,
            
        })
        // console.log(window.location);
    },[currentPage])

// console.log(orgaProducts);
    return (
        <div className='product-list1'>
        
        {user == user ? <div className='add-btn'><button onClick={()=> navigate('/add-orga')} className='add-orga-btn'>ДОБАВИТЬ</button></div> : null }

        <div id="product-list">
            <div className='product-list-left'>
            


            <RadioGroup className='products-sidebar' sx={{display: 'flex', flexDirection: 'column'}} onChange={(e)=>fetchByParams('category', e.target.value)}>

<FormControlLabel value={'Еда'} control={<Radio/>} label={'Еда'}/>
<FormControlLabel value={'Товары'} control={<Radio/>} label={'Товары'}/>
<FormControlLabel value={'Другое'} control={<Radio/>} label={'Другое'}/>
<FormControlLabel value={'Все'} control={<Radio/>} label={'Все'}/>

</RadioGroup>
 

{/* </div> */}
            </div>
            <div className='product-list-mid'>
                {orgaProducts.map((item)=>(
                    <ProductCard item={item} key={item.id}/>
                ))}
                
            </div>
            <div className='product-list-right'>Избранное
           
            <FavoritesSidebar/>

            
            </div>


        


        </div>
        <Pagination 
                onChange={(e,page)=>setCurrentPage(page)}
                variant='outlined'
                color='primary'
                count={pages}
                page={currentPage}
                />
            <Footer/>
            </div>
    );
};

export default ProductList;