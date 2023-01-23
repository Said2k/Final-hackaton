import { Button, Grid, Paper } from '@mui/material';
import React, { useEffect } from 'react';
import { useFavorites } from '../../Context/favorite';
import { useOrgaContext } from '../../Context/organContext';
import { useProducts } from '../../Context/productContext';
import './favorites.css'

const FavoritesSidebar = () => {
    const  {getFavorites, favorites,showFavorites} =useFavorites()
    const {getOneProduct, oneProduct,getProduct} = useProducts()
    const { likeOrga, ratingOrga,getOrga} = useOrgaContext()

    useEffect(()=>{
        getFavorites(
            
        )
    },[])


    
    return (
        
            <Grid className='fav__grid' sx={{height: '98%%', display: 'flex',flexDirection: 'column' ,gap: '10px'}} item md={2}>               
                <Paper className='fav-paper' sx={{height: 'auto%'}}>
                    <div className='fav-paper__block'>
                        <div 
                        className='fav-paper__img'
                        style={{
                            backgroundImage: `url(https://kfc-dushanbe.me/wp-content/uploads/2021/03/10-%D0%BD%D0%BE%D0%B6%D0%B5%D0%BA-300x300.png)`
                        }}>
                        
                        </div>
                        <div 
                        className='fav-paper__text'>
                            <span className='fav-paper__text-orga'>KFC</span>
                            <p className='fav-paper__text-title'>Burger chicken nuggets</p>
                            <p className='fav-paper__text-price'>30$</p>
                        </div>
                    </div>
                    <button id='fav-paper__btn'>Добавить в корзину</button>
                </Paper>
                <Paper className='fav-paper' sx={{height: 'auto%'}}>
                    <div className='fav-paper__block'>
                        <div 
                        className='fav-paper__img'
                        style={{
                            backgroundImage: `url(https://kfc-dushanbe.me/wp-content/uploads/2021/03/10-%D0%BD%D0%BE%D0%B6%D0%B5%D0%BA-300x300.png)`
                        }}>
                        
                        </div>
                        <div 
                        className='fav-paper__text'>
                            <span className='fav-paper__text-orga'>KFC</span>
                            <p className='fav-paper__text-title'>Burger chicken nuggets</p>
                            <p className='fav-paper__text-price'>30$</p>
                        </div>
                    </div>
                    <button id='fav-paper__btn'>Добавить в корзину</button>

                </Paper>
                <Paper className='fav-paper' sx={{height: 'auto%'}}>
                    <div className='fav-paper__block'>
                        <div 
                        className='fav-paper__img'
                        style={{
                            backgroundImage: `url(https://kfc-dushanbe.me/wp-content/uploads/2021/03/10-%D0%BD%D0%BE%D0%B6%D0%B5%D0%BA-300x300.png)`
                        }}>
                        
                        </div>
                        <div 
                        className='fav-paper__text'>
                            <span className='fav-paper__text-orga'>KFC</span>
                            <p className='fav-paper__text-title'>Burger chicken nuggets</p>
                            <p className='fav-paper__text-price'>30$</p>
                        </div>
                    </div>
                    <button id='fav-paper__btn'>Добавить в корзину</button>

                </Paper>

            </Grid>
    );
};

export default FavoritesSidebar;