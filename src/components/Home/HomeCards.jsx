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
import { useOrgaContext } from '../../Context/organContext';
import { useNavigate } from 'react-router-dom';

export default function HomeCard({work}) {
  const navigate = useNavigate()
  const {deleteOrga} = useOrgaContext()
  console.log(work);
  return (
    <Box className="home-cards-box">
      {work?.map((item)=>(
       
    <Card className='home-cards'>
      
      <img src={item.cover} className='home-page-card-img' />
      <div className='srochno'>
        <div className='srochno-border'>{item.products?.map((item)=>(
          item.title
        ))}</div>
        </div>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {item.products?.map((elem)=>(
          elem.description
        ))}
        </Typography>
      </CardContent>
      <CardActions>
        <Button sx={{color: "black"}} onClick={()=>deleteOrga(item.id)} size="small">Взять заказ</Button>
        <Button sx={{color: "black"}} onClick={()=>navigate(`/detailOrg/${item.id}`)} size="small">Больше информации</Button>

      </CardActions>
    </Card>
          ))}

    
    </Box>
  );
}
