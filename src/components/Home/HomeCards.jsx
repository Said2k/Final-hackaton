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
      
      <img src='https://triniti-grodno.by/en/assets/images/1-etazh/kfc/kfc_logo.svg.png' className='home-page-card-img' />
      <div className='srochno'>
        <div className='srochno-border'>Срочно</div>
        </div>
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
    <Card className='home-cards'>
      
      <img src='https://triniti-grodno.by/en/assets/images/1-etazh/kfc/kfc_logo.svg.png' className='home-page-card-img' />
      <div className='srochno'>
        <div className='srochno-border'>Срочно</div>
        </div>
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
    <Card className='home-cards'>
      
      <img src='https://triniti-grodno.by/en/assets/images/1-etazh/kfc/kfc_logo.svg.png' className='home-page-card-img' />
      <div className='srochno'>
        <div className='srochno-border'>Срочно</div>
        </div>
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
