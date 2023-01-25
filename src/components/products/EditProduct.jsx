import React, { useEffect, useState } from 'react';
import { Box, Button, TextField } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";

import { useProducts } from '../../Context/productContext';



const EditProduct = () => {
    const navigate = useNavigate();
  const { getOneProduct, editProduct, oneProduct} = useProducts()
  const [product, setProduct] = useState(oneProduct);

  useEffect(() => {
    setProduct(oneProduct);
  }, [oneProduct]);

  const {id, id2} = useParams()
  useEffect(() => {
    getOneProduct(id,id2);
}, []);
console.log(id,id2)

  function handleSave(){
    let newProduct = new FormData()
    newProduct.append("title", product.title)
    newProduct.append("price", product.price)
    newProduct.append("description", product.description)
    newProduct.append("cover", product.cover)
    newProduct.append("organization", id)

    editProduct(id, id2, newProduct)
    console.log(newProduct);
  }
  console.log(product);
    return (
        <div>
        <Box className="add-block" sx={{ width: "60vw", margin: "10vh auto" }}>
  <TextField
    value={product.title}
    onChange={(e) =>
        setProduct((prev) => ({ ...prev, title: e.target.value }))
    }
    fullWidth
    id="outlined-basic"
    label="Title"
    variant="outlined"
    name="Title"
  />
  <TextField
    fullWidth
    id="outlined-basic"
    label="description"
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
    label="price"
    variant="outlined"
    name="price"
    value={product.price}
    onChange={(e) =>
        setProduct((prev) => ({ ...prev, price: e.target.value }))
    }
  />
    <TextField
    fullWidth
    type='file'
    id="outlined-basic"
    label="Picture"
    variant="outlined"
    name="picture"
    onChange={(e) =>
        setProduct({...product, cover: e.target.files[0]})
    }
  />
  <Button
    onClick={() => {
     handleSave()
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

export default EditProduct;