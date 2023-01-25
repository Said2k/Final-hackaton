import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDell } from '../../Context/deliveryContext';

const Dell = () => {
    // const navigate = useNavigate();
    const { addDell, addDellCarts, dellProducts,getDell } = useDell()
    const {id} = useParams()
    const [dell, setDell] = useState({
        address: "",
        phone: "",
    });
    let obj = {
        product: 7
    }

    useEffect(()=>{
        getDell()
    },[])
       
    const { products } = JSON.parse(localStorage.getItem("cart"));

      const ids = products.map((item) => item.item.id);
      console.log(ids);

      
    function handleSave(){
      let newProduct = new FormData()
      newProduct.append("address", dell.address)
      newProduct.append("phone", dell.phone)

      let newObj = new FormData()
      newObj.append('product', ids)
      addDell(newProduct)
    //   addDellCarts(newObj)
    }
    console.log(dellProducts)
    return (
        <div>
        <TextField
        fullWidth
        id="outlined-basic"
        label="Адрес"
        variant="outlined"
        name="Address"
        value={dell.address}
        onChange={(e) =>
            setDell((prev) => ({ ...prev, address: e.target.value }))
        }
      />
      <TextField
        fullWidth
        id="outlined-basic"
        label="Телефон"
        variant="outlined"
        name="price"
        value={dell.phone}
        onChange={(e) =>
            setDell((prev) => ({ ...prev, phone: e.target.value }))
        }
      />
      <Button onClick={handleSave}>add</Button>
        </div>
    );
};

export default Dell;