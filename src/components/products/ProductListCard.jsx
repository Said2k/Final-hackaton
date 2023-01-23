import * as React from 'react';
import Card from '@mui/material/Card';
import '../products/ProductList.css'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

export default function ProductCard({item}) {
  return (  
<>
<Card id="product-card" className="card card0" sx={{backgroundImage:`URL(${item.cover})`}}>
  
    <div className="border">
      <h2>{item.title}</h2>
      <div className="icons">
     <a href=""><ThumbUpOffAltIcon sx={{color: "black"}} /></a>
     <a href=""><FavoriteBorderIcon sx={{color: "black"}}/></a>
     <a href=""><DeleteOutlineIcon sx={{color: "black"}}/></a>
     <button>МЕНЮ</button>
      </div>
    </div>
  </Card>

  </>

  
  );
}