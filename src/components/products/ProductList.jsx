import { Box, CardMedia, FormControlLabel, Pagination, Radio, RadioGroup } from '@mui/material';
import React, { useState } from 'react';
import FavoritesSidebar from '../favorites/FavoritesSidebar';


import { useEffect } from 'react';
import { useOrgaContext } from '../../Context/organContext';
import Footer from '../footer/Footer';
import '../products/ProductList.css'
import ProductCard from './ProductListCard';
import { useProducts } from '../../Context/productContext';
import { useSearchParams } from 'react-router-dom';
const ProductList = ({item}) => {
    const { getOrga, orgaProducts,subscribeOrga,fetchByParams,pages} = useOrgaContext()
    const [searchParams, setSearchParams] = useSearchParams();
    const [searchProduct, setSearchProduct] = useState(searchParams.get('q')|| '')
    const [currentPage, setCurrentPage] = useState(1)



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
        console.log(window.location);
    },[currentPage])




// console.log(orgaProducts);
    return (
        <>
        <div id="product-list">
            <div className='product-list-left'>
            <div class="lsacetug_dolponaxed">

            <RadioGroup sx={{display: 'flex', flexDirection: 'row'}} onChange={(e)=>fetchByParams('category', e.target.value)}>

<FormControlLabel value={'Еда'} control={<Radio/>} label={'Еда'}/>
<FormControlLabel value={'Товары'} control={<Radio/>} label={'Товары'}/>
<FormControlLabel value={'Другое'} control={<Radio/>} label={'Другое'}/>
<FormControlLabel value={'all'} control={<Radio/>} label={'All'}/>

</RadioGroup>
 

</div>
            </div>
            <div className='product-list-mid'>
                {orgaProducts.map((item)=>(
                    <ProductCard item={item} key={item.id}/>
                ))}
                <Pagination
                onChange={(e,page)=>setCurrentPage(page)}
                variant='outlined'
                color='primary'
                count={pages}
                page={currentPage}
                />
            </div>
            <div className='product-list-right'>Избранное
           
            <FavoritesSidebar/>

            
            </div>


        


        </div>
            <Footer/>
            </>
    );
};

export default ProductList;