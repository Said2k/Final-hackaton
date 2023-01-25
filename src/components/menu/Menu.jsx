import React, { useEffect, useState } from 'react';
import '../menu/Menu.css'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { useProducts } from '../../Context/productContext';
import { SWAGGER_API } from '../helpers/API';
import { useBusket } from '../../Context/busket';
import StarIcon from '@mui/icons-material/Star';
import { Button, IconButton } from '@mui/material';
import { useFavorites } from '../../Context/favorite';
import { useAuth } from '../../Context/authContext';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import { useOrgaContext } from '../../Context/organContext';


const Menu = () => {
  const {addProductToCart} = useBusket()
  const {user} =useAuth()
  const {getOneOrga,oneProductOrga} = useOrgaContext()
  const navigate = useNavigate()
  const {favorites,getFavorites} = useFavorites()
    const {getProduct,product,addFavorite,deleteProduct} = useProducts()
    const {id} = useParams()
    


    useEffect(()=>{
        getProduct(id)
        getFavorites()
        getOneOrga(id)
    },[])  
  
    console.log(favorites);

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
                <div style={{marginBottom: '50px'}}>
                    {user==oneProductOrga.user? (<Button  onClick={()=>navigate(`/add-prod/${id}`)}>Добавить Продукт</Button>) : (null)} 
                    <Button onClick={()=>navigate('/busket')} sx={{marginLeft: '15px'}}>Перейти в корзину</Button> 
                    </div>      
                <div className="menu-cards-wrap">
                {product?.map((item)=>(
                    
                    <div className="menu-card">
                        {console.log(item)}
                        <div className='menu-img'>
                        <img width="80%" src={item.cover} alt="" />
                        </div>
                        <div className='menu-text'>
                        <h4>{item.title}</h4>
                        <p>{item.description}</p>
                        <p style={{fontWeight: 700}}>{item.price}$</p>

                        </div>
                        <div className='menu-btn-cart'>
                        <button onClick={()=>addProductToCart(item)}><AddShoppingCartIcon/></button>
                        {user == oneProductOrga.user ? <IconButton onClick={()=> navigate(`/editProd/${id}/${item.id}`)}><EditIcon  className='product-card-icons' sx={{color: "black"}}/></IconButton> : null }
     {user == oneProductOrga.user ? <IconButton onClick={()=> deleteProduct(id,item.id)}><DeleteOutlineIcon  className='product-card-icons' sx={{color: "black"}}/></IconButton> : null }
                        <IconButton onClick={() => addFavorite(id,item.id)}>
            {favorites?.filter((elem) => elem.id == item.id)
              .length ? (
              <StarIcon fontSize="large" sx={{ color: "brown" }} />
            ) : (
              <StarIcon fontSize="large" sx={{ color: "none" }} />
            )}
          </IconButton>
                    </div>
                    </div>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default Menu;