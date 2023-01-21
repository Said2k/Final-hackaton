import { Box, CardMedia } from '@mui/material';
import React from 'react';
import '../products/ProductList.css'
import ProductCard from './ProductListCard';
const ProductList = () => {
    return (
        <div id="product-list">
            <div className='product-list-left'>Filter</div>
            <div className='product-list-mid'>
                <ProductCard/>

                


            </div>
            <div className='product-list-right'>Favorite
            
            </div>


        

            
        </div>
    );
};

export default ProductList;