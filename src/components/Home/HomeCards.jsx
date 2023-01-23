import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { Box } from '@mui/material';
import './home.css'

export default function HomeCard() {
  return (
    <Box className="home-cards-box">
    <Card className='home-cards'>
      {/* <CardMedia
      className='home-page-card-img'
        component="img"
        alt="green iguana"
        height="100px"
        image="https://pbs.twimg.com/profile_images/595834945957974016/kNyt2Ar3_400x400.jpg"
      /> */}
      <img src='https://play-lh.googleusercontent.com/QCzljwz8YHBIno8Cve6bkbMtZZ8YABCB4cqF4kK13ZcgEVxLeoi9AvfVPNk5dp-P7kI' className='home-page-card-img' />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          KFC
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Доставка заказа
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Взять заказ</Button>
        <Button size="small">Больше информации</Button>
        <Button size="small"><ShoppingCartCheckoutIcon/></Button>

      </CardActions>
    </Card>
    </Box>
  );
}
