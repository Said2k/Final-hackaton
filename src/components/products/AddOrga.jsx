import React, { useState } from 'react';
import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useOrgaContext } from '../../Context/organContext';



const AddOrga = () => {
    const navigate = useNavigate();
  const { addOrga } = useOrgaContext()

  const [orga, setOrga] = useState({
    title: "",
    address: "",
    phone: "",
    cover: "",
    category: "",
  });

  function handleSave(){
    let newProduct = new FormData()
    newProduct.append("title", orga.title)
    newProduct.append("address", orga.address)
    newProduct.append("phone", orga.phone)
    newProduct.append("cover", orga.cover)
    newProduct.append("category", orga.category)

    addOrga(newProduct)
    navigate("/products");

  }
  console.log(orga);
    return (
        <div>
            <Box className="add-block" sx={{ width: "60vw", margin: "10vh auto", display: 'flex', flexDirection: 'column',gap: '20px' }}>
      <TextField
        value={orga.title}
        onChange={(e) =>
          setOrga((prev) => ({ ...prev, title: e.target.value }))
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
        label="Адрес"
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
        label="Телефон"
        variant="outlined"
        name="price"
        value={orga.phone}
        onChange={(e) =>
          setOrga((prev) => ({ ...prev, phone: e.target.value }))
        }
      />
     
      <input type='file' name='picture'  onChange={(e) =>
          setOrga({...orga, cover: e.target.files[0]})
        }/>
      {/* <TextField
        fullWidth
        id="outlined-basic"
        label="Category"
        variant="outlined"
        name="Category"
        value={orga.category}
        onChange={(e) =>
          setOrga((prev) => ({ ...prev, category: e.target.value }))
        }
      /> */}
      <InputLabel id="select-label">
      Категория
      </InputLabel>
      <Select 
      id='labelId'
      value={orga.category}
      onChange={(e)=>setOrga({...orga, category:e.target.value })}
      >
        <MenuItem value={'Еда'}>Еда</MenuItem>
        <MenuItem value={'Товары'}>Товары</MenuItem>
        <MenuItem value={'Другое'}>Другое</MenuItem>
      </Select>
      <Button
        onClick={() => {
         handleSave()
        }}
        variant="outlined"
        fullWidth
        size="large"
      >
         Создать продукт
      </Button>
    </Box>
        </div>
    );
};

export default AddOrga;