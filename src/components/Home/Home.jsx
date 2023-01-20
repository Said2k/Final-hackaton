import { Button } from '@mui/material';
import React, { useEffect } from 'react';
import { useComm } from '../../Context/commContext';
import { useOrgaContext } from '../../Context/organContext';
import { useProducts } from '../../Context/productContext';

const Home = () => {
  const {
    addOrga,
        getOrga,
        getOneOrga,
        editOrga,
        deleteOrga,


        orgaProducts,
        oneProductOrga 
  } =useOrgaContext()

  const {
    addProduct,
        getProduct,
        getOneProduct,
        editProduct,
        deleteProduct,


        product,
        oneProduct,
  } =useProducts()

   const {addComment,getComm,deleteComm, getOneComment, editComm} = useComm()

    let obj = {
        title: 'product2',
        price: '23',
        description: "something",
        organization: 3,


    }
    let newObj = {
        title: 'productEdit',
        price: '0000',
        description: "edit",



    }

    let nobj = {
        body: "wtf",
        organization: 2,
    }

    let neeobj = {
        body: "wtf2",
    }
    return (
        

        <div>
          
        <button onClick={()=>addProduct(2,newObj)}>add</button>
        <button onClick={()=>editProduct(2, 3, newObj)}>edit</button>
        <button onClick={()=>getOrga(2)}>get</button>
        <button onClick={()=>deleteProduct(2,5)}>del</button>
        <button onClick={()=>getOneProduct(2,3)}>oneProduct</button>

        <Button onClick={()=>addComment(2, nobj)}>addComm</Button>
        <Button onClick={()=>getComm(2)}>getComm</Button>
        <Button onClick={()=>deleteComm(2, 2)}>deleteComm</Button>
        <Button onClick={()=>getOneComment(2, 3)}>getOneComment</Button>
        <Button onClick={()=>editComm(2, 3, neeobj)}>editComm</Button>
        </div>
    );
};

export default Home;