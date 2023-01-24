import * as React from 'react';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import Paper from '@mui/material/Paper';
// import { useBusket } from '../../contexts/busketContext';
import { Button, Grid, Table, TableBody, TableContainer, TableHead, TableRow } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './busket.css'
import { useBusket } from '../../Context/busket';
import { useProducts } from '../../Context/productContext';
import { useOrgaContext } from '../../Context/organContext';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function Busket() {
const {getCart, cart, changeProductCount,deleteCartProduct}= useBusket()
const {getOrga,orgaProducts} = useOrgaContext()
const navigate = useNavigate()


  React.useEffect(() => {
    getCart();
    getOrga()
  }, []);
  

  console.log(cart);
  return (
    <TableContainer component={Paper} sx={{ borderRadius: "0%", mt: '30px' }}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow className='block__row'>
            <StyledTableCell align='center'>Изображение</StyledTableCell>
            <StyledTableCell align="center">Наименование</StyledTableCell>
            <StyledTableCell align="center">Компания</StyledTableCell>

            <StyledTableCell align="center">Цена</StyledTableCell>
              
            
            <StyledTableCell className='td__kol' align="center"><span>Кол-во</span></StyledTableCell>
            <StyledTableCell align="center">Сумма</StyledTableCell>
            <StyledTableCell align="center"></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cart?.products.map((row) => (
            
            <StyledTableRow className='block__body' key='1'>
              <StyledTableCell align='center' component="th" scope="row">
                <img src={row.item.cover} width="130px" />
              </StyledTableCell>
              <StyledTableCell sx={{ fontWeight: 600,}} align="center">
              {row.item.title}
              </StyledTableCell>
               
              <StyledTableCell align="center">{row.item.organization}</StyledTableCell>
              <StyledTableCell align="center">{row.item.price}$</StyledTableCell>
  
              
              <StyledTableCell align="center">
                <input
                  type="number"
                  min={1}
                  max={1000}
                  value={row.count}
                  onChange={(e) =>
                    changeProductCount(e.target.value, row.item.id)
                  }
                />
              </StyledTableCell>
              <StyledTableCell sx={{ fontWeight: 600 }} align="center">
                {row.subPrice}$
              </StyledTableCell>
              <StyledTableCell align="center">
                <Button onClick={()=>deleteCartProduct(row.item.id)}>
                  DELETE
                </Button>
              </StyledTableCell>
            </StyledTableRow>
        
            ))} 
        </TableBody>
      </Table>
      <Grid sx={{display:'flex', flexDirection: 'row-reverse'}}>
      <Button onClick={()=>{
        // resetCart()
        navigate('/credit')
      }}>{cart?.totalPrice}$</Button>

      </Grid>
    </TableContainer>
  );
}