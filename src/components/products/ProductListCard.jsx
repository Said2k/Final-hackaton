import * as React from 'react';
import Card from '@mui/material/Card';
import '../products/ProductList.css'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useNavigate } from 'react-router';

export default function ProductCard({item}) {
  const navigate = useNavigate()
  console.log(item);
  return (  
<>
<Card id="product-card" className="card card0" sx={{backgroundImage:`URL(${item.cover})`}}>
    <div  onClick={()=>navigate(`/detailOrg/${item.id}`)} className="border">
      <h2>{item.title}</h2>
      <div className="icons">
     <a href=""><ThumbUpOffAltIcon sx={{color: "black"}} /></a>
     <a href=""><FavoriteBorderIcon sx={{color: "black"}}/></a>
     <a href=""><DeleteOutlineIcon sx={{color: "black"}}/></a>
     <button onClick={()=>navigate('/menu')}>МЕНЮ</button>
      </div>
    </div>
  </Card>

  </>

  
  );
}