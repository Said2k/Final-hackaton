import React, { useEffect, useState } from 'react';
import '../menu/Menu.css'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useParams, useSearchParams } from 'react-router-dom';
import { useProducts } from '../../Context/productContext';
import { SWAGGER_API } from '../helpers/API';


const Menu = () => {
  
    const {getProduct,product} = useProducts()
    const {id} = useParams()


    useEffect(()=>{
        getProduct(id)
    },[])     
    

    return (
        <div className='menu'>
 
            <div className='menu-navigation'>
             
                <h2>Категория</h2>
                <a href="">Горячие блюда</a>
                <a href="">Салаты</a>
                <a href="">Закуски</a>
                <a href="">Фастфуд</a>
                <a href="">Десерты</a>
                <a href="">Прочее</a>
            
            </div>
            <div className='menu-cards'>
         
                <div className="menu-cards-wrap">
                {product?.map((item)=>(

                    <div className="menu-card">
                        <div className='menu-img'>
                        <img width="250px" src={item.cover} alt="" />
                        </div>
                        <div className='menu-text'>
                        <h4>{item.title}</h4>
                        <p>{item.description}</p>
                        </div>
                        <div className='menu-btn-cart'>
                        <p style={{fontWeight: 700}}>{item.price}$</p>
                        <button><AddShoppingCartIcon/></button>
                    </div>
                    </div>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default Menu;