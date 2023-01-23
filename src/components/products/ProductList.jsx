import { Box, CardMedia } from '@mui/material';
import React from 'react';
import FavoritesSidebar from '../favorites/FavoritesSidebar';


import { useEffect } from 'react';
import { useOrgaContext } from '../../Context/organContext';
import Footer from '../footer/Footer';
import '../products/ProductList.css'
import ProductCard from './ProductListCard';
const ProductList = ({item}) => {
    const { getOrga, orgaProducts} = useOrgaContext()
    useEffect(()=>{
    getOrga()
    },[])

    return (
        <>
        <div id="product-list">
            <div className='product-list-left'>
            <div class="lsacetug_dolponaxed">
  <h3>Категории</h3>
  <ul>
    <li><a href="">Рестораны</a></li>
    <li><a href="">Фастфуды</a></li>
    <li><a href="">Кофейни</a></li>
    <li><a href="">Магазины</a></li>
    <li><a href="">Прочее</a></li>
  </ul>
</div>
            </div>
            <div className='product-list-mid'>
                
                {orgaProducts.map((item)=>(
                    <ProductCard item={item} key={item.id}/>
                ))}
            </div>
            <div className='product-list-right'>Favorite
           
            <FavoritesSidebar/>

            
            </div>


        


        </div>
            <Footer/>
            </>
    );
};

export default ProductList;