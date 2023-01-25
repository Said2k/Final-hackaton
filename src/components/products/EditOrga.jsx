import React, { useEffect, useState } from 'react';
import { Box, Button, TextField } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { useOrgaContext } from '../../Context/organContext';



const EditOrga = () => {
    const navigate = useNavigate();
  const {getOneOrga, oneProductOrga, editOrga } = useOrgaContext()
  const [product, setProduct] = useState(oneProductOrga);

  useEffect(() => {
    setProduct(oneProductOrga);
  }, [oneProductOrga]);

  const { id } = useParams()
  useEffect(() => {
    getOneOrga(id);
  }, []);

  function handleSave(){
    let newProduct = new FormData()
    newProduct.append("title", product.title)
    newProduct.append("address", product.address)
    newProduct.append("phone", product.phone)
    newProduct.append("cover", product.cover)
    newProduct.append("category", product.category)
    editOrga(id, newProduct)
    navigate('/products')
  }
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
        label="Address"
        variant="outlined"
        name="Address"
        value={product.address}
        onChange={(e) =>
            setProduct((prev) => ({ ...prev, address: e.target.value }))
        }
      />
      <TextField
        fullWidth
        id="outlined-basic"
        label="Number"
        variant="outlined"
        name="price"
        value={product.phone}
        onChange={(e) =>
            setProduct((prev) => ({ ...prev, phone: e.target.value }))
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
      <TextField
        fullWidth
        id="outlined-basic"
        label="Category"
        variant="outlined"
        name="Category"
        value={product.category}
        onChange={(e) =>
            setProduct((prev) => ({ ...prev, category: e.target.value }))
        }
      />
      <Button
        onClick={handleSave}
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

export default EditOrga;