import * as React from 'react';
import Card from '@mui/material/Card';
import '../products/ProductList.css'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

export default function ProductCard() {
  return (
    <Card className="product-list-cards">
      <div className='product-card' style={{backgroundImage:`url(https://play-lh.googleusercontent.com/QziaUvJ3RXas5WbNrT1pIkeVaVLi9lfmqPxVUukBx0zuY5lPv13dVKyKEBYTKI-OCX5Y)`}}>
<div className="border">
<button className='product-list-card-btn'>Menu</button>
<button className='product-list-card-btn'><ThumbUpOffAltIcon/></button>
<button className='product-list-card-btn'><FavoriteBorderIcon/></button>
<button className='product-list-card-btn'><DeleteOutlineIcon/></button>
</div>
</div>
    </Card>
  );
}