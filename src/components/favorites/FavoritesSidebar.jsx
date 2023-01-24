import { Button, Grid, Paper } from '@mui/material';
import React, { useEffect } from 'react';
import { useFavorites } from '../../Context/favorite';
import { useOrgaContext } from '../../Context/organContext';
import { useProducts } from '../../Context/productContext';
import './favorites.css'
import { SWAGGER_API } from '../helpers/API';
import { useBusket } from '../../Context/busket';
import { useNavigate } from 'react-router-dom';
import { useRecommend } from '../../Context/recommendation';

const FavoritesSidebar = () => {
    const  {getFavorites, favorites} =useFavorites()
    const {getOneProduct, oneProduct,getProduct,addFavorite} = useProducts()
    const { likeOrga, ratingOrga,getOrga} = useOrgaContext()
    const {addProductToCart} =useBusket()
    const {getRec, recomm,getHistory,history} = useRecommend()
    const navigate = useNavigate()

    useEffect(()=>{
        getFavorites()
        getRec()
        getHistory()
    },[])

console.log(history);
    
    return (
        
            <Grid className='fav__grid' sx={{height: '98%%', display: 'flex',flexDirection: 'column' ,gap: '10px'}} item md={2}>   
            {favorites.map((item)=>(

                      
                <Paper key={item.id} className='fav-paper' sx={{height: 'auto%'}}>
                    <div className='fav-paper__block'>
                        <div 
                        className='fav-paper__img'
                        style={{
                            backgroundImage: `url(${item.cover})`
                        }}>
                        
                        </div>

                        <div 
                        className='fav-paper__text'>
                            <span className='fav-paper__text-orga'>{item.organization}</span>
                            <p className='fav-paper__text-title'>{item.title}</p>
                            <p className='fav-paper__text-price'>{item.price}$</p>
                        </div>
                    </div>
                    <button onClick={()=>{
                        addProductToCart(item)
                        navigate('/busket')
                    }} id='fav-paper__btn'>Добавить в корзину</button>
                </Paper>
                ))}  

            </Grid>
    );
};

export default FavoritesSidebar;