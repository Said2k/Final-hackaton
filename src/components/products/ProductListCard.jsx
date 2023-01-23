import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import '../products/ProductList.css'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';

export default function ProductCard() {
  return (
    <Card className="product-list-cards">
      <div className='product-card' style={{backgroundImage:`url(https://play-lh.googleusercontent.com/QziaUvJ3RXas5WbNrT1pIkeVaVLi9lfmqPxVUukBx0zuY5lPv13dVKyKEBYTKI-OCX5Y)`}}>

<button className='product-list-card-btn'>get</button>
<button className='product-list-card-btn'>like</button>
<button className='product-list-card-btn'>del</button>
<button className='product-list-card-btn'>product</button>
</div>
    </Card>
  );
}