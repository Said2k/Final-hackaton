import * as React from 'react';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import Paper from '@mui/material/Paper';
// import { useBusket } from '../../contexts/busketContext';
import { Button, Grid, Table, TableBody, TableContainer, TableHead, TableRow } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './busket.css'


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
// const {getCart, cart, changeProductCount, deleteCartProduct}= useBusket()
const navigate = useNavigate()


//   React.useEffect(() => {
//     getCart();
//   }, []);

//   const resetCart = () => {
//     localStorage.removeItem("cart");
//     getCart();
//   };

//   console.log(cart);
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
          {/* {cart?.products.map((row) => ( */}
            <StyledTableRow className='block__body' key='1'>
              <StyledTableCell align='center' component="th" scope="row">
                <img src='https://s82079.cdn.ngenix.net/295x0/114cojzbmxy1izytqqbkayjz1g8m' width="130px" />
              </StyledTableCell>
              <StyledTableCell sx={{ fontWeight: 600,}} align="center">
               Крылышки баскет L
              </StyledTableCell>
              <StyledTableCell align="center">KFC</StyledTableCell>
              <StyledTableCell align="center">100$</StyledTableCell>
  
              
              <StyledTableCell align="center">
                <input
                  type="number"
                  min={1}
                  max={1000}
                //   value={row.count}
                //   onChange={(e) =>
                //     changeProductCount(e.target.value, row.item.id)
                //   }
                />
              </StyledTableCell>
              <StyledTableCell sx={{ fontWeight: 600 }} align="center">
                20000$
              </StyledTableCell>
              <StyledTableCell align="center">
                <Button>
                  DELETE
                </Button>
              </StyledTableCell>
            </StyledTableRow>
          {/* ))} */}
        </TableBody>
      </Table>
      <Grid sx={{display:'flex', flexDirection: 'row-reverse'}}>
      <Button onClick={()=>{
        // resetCart()
        navigate('/orders')
      }}>Buy ALL 1000000$</Button>

      </Grid>
    </TableContainer>
  );
}