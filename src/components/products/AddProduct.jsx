import React, { useState } from 'react';
import { Box, Button, TextField } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { useProducts } from '../../Context/productContext';



const AddProduct = () => {
    const navigate = useNavigate();
  const { addProduct } = useProducts()
  const {id} = useParams()

  const [product, setProduct] = useState({
    title: "",
    price: "",
    description: "",
    cover: "",
  });

  function handleSave(){
    let newProduct = new FormData()
    newProduct.append("title", product.title)
    newProduct.append("price", product.price)
    newProduct.append("description", product.description)
    newProduct.append("cover", product.cover)
    newProduct.append("organization", id)

    addProduct(id, newProduct)
    console.log(newProduct);
  }
  console.log(product);
    return (
        <div>
            <Box className="add-block" sx={{ width: "60vw", margin: "10vh auto" , display: 'flex', flexDirection: 'column',gap: '20px' }}>
      <TextField
        value={product.title}
        onChange={(e) =>
            setProduct((prev) => ({ ...prev, title: e.target.value }))
        }
        fullWidth
        id="outlined-basic"
        label="Наименование"
        variant="outlined"
        name="Title"
      />
      <TextField
        fullWidth
        id="outlined-basic"
        label="Описание"
        variant="outlined"
        name="Address"
        value={product.description}
        onChange={(e) =>
            setProduct((prev) => ({ ...prev, description: e.target.value }))
        }
      />
      <TextField
        fullWidth
        id="outlined-basic"
        label="Стоимость"
        variant="outlined"
        name="price"
        value={product.price}
        onChange={(e) =>
            setProduct((prev) => ({ ...prev, price: e.target.value }))
        }
      />
 
      <input 
      name="picture"
      type="file"
      onChange={(e) =>
        setProduct({...product, cover: e.target.files[0]})
    } />
      <Button
        onClick={() => {
         handleSave()
         navigate(`/menu/${id}`)
        }}
        variant="outlined"
        fullWidth
        size="large"
        
      >
        CREATE PRODUCT
      </Button>
    </Box>
        </div>
    );
};

export default AddProduct;