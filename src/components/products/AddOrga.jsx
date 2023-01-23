import React, { useState } from 'react';
import { Box, Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useOrgaContext } from '../../Context/organContext';



const AddOrga = () => {
    const navigate = useNavigate();
  const { addOrga } = useOrgaContext()

  const [orga, setOrga] = useState({
    title: "",
    address: "",
    phone_number: "",
    cover: "",
    category: "",
  });

  function handleSave(){
    let newProduct = new FormData()
    newProduct.append("title", orga.title)
    newProduct.append("address", orga.address)
    newProduct.append("phone_number", orga.phone_number)
    newProduct.append("cover", orga.cover)
    newProduct.append("category", orga.category)

    addOrga(newProduct)
    navigate("/products");

  }
  console.log(orga);
    return (
        <div>
            <Box className="add-block" sx={{ width: "60vw", margin: "10vh auto" }}>
      <TextField
        value={orga.title}
        onChange={(e) =>
          setOrga((prev) => ({ ...prev, title: e.target.value }))
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
        value={orga.address}
        onChange={(e) =>
          setOrga((prev) => ({ ...prev, address: e.target.value }))
        }
      />
      <TextField
        fullWidth
        id="outlined-basic"
        label="Number"
        variant="outlined"
        name="price"
        value={orga.phone_number}
        onChange={(e) =>
          setOrga((prev) => ({ ...prev, phone_number: e.target.value }))
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
          setOrga({...orga, cover: e.target.files[0]})
        }
      />
      <TextField
        fullWidth
        id="outlined-basic"
        label="Category"
        variant="outlined"
        name="Category"
        value={orga.category}
        onChange={(e) =>
          setOrga((prev) => ({ ...prev, category: e.target.value }))
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

export default AddOrga;