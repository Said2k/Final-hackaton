import React, { useEffect } from 'react';
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
    return (
        

        <div>
          
        <button onClick={()=>addProduct(2,newObj)}>add</button>
        <button onClick={()=>editProduct(2, 3, newObj)}>edit</button>
        <button onClick={()=>getOrga(2)}>get</button>
        <button onClick={()=>deleteProduct(2,5)}>del</button>
        <button onClick={()=>getOneProduct(2,3)}>oneProduct</button>

        </div>
    );
};

export default Home;