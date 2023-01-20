import React, { useEffect } from 'react';
import { useFavorites } from '../../Context/favorite';
import { useProducts } from '../../Context/productContext';
import './home.css'
const Home = () => {
    const {getFavorites} = useFavorites()
    const {addFavorite, getProduct,deleteProduct} = useProducts()

    let obj= {
        title: 'fav',
        price: '23',
        description: '23dfsdfsd',
    }
    return (
        <div>
            <button className='btn' onClick={()=>getFavorites(2)}>get</button>
            <button className='btn' onClick={()=>addFavorite(2,1)}>like</button>
            <button className='btn' onClick={()=>deleteProduct(2,4)}>del</button>
            <button className='btn' onClick={()=>getProduct(2)}>product</button>
            </div>
        
    );
};

export default Home;