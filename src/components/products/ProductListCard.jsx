import * as React from 'react';
import Card from '@mui/material/Card';
import '../products/ProductList.css'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom'
import { useOrgaContext } from '../../Context/organContext';
import { Button } from '@mui/material';
export default function ProductCard({item}) {
 const { likeOrga, deleteOrga } = useOrgaContext()
  const navigate = useNavigate()

  return (  
<>
<Card id="product-card" className="card card0" sx={{backgroundImage:`URL(${item.cover})`}}>
    <div  className="border">
      <h2 className='card-h2' onClick={()=>navigate(`/detailOrg/${item.id}`)}>{item.title}</h2>
      <div className="icons">
     <Button><ThumbUpOffAltIcon onClick={()=> likeOrga(item.id)} className='product-card-icons' sx={{color: "black"}} />{item.likes}</Button>
     <Button><EditIcon className='product-card-icons' sx={{color: "black"}}/></Button>
     <Button><DeleteOutlineIcon onClick={()=> deleteOrga(item.id)} className='product-card-icons' sx={{color: "black"}}/></Button>  
     <button className='product-card-icons' onClick={()=> navigate('/menu')} >Меню</button>

      </div>
    </div>
  </Card>

  </>

  
  );
}