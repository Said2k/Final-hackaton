
import {
    FormControl,
    FormControlLabel,
    FormLabel,
    Grid,
    InputAdornment,
    Paper,
    Radio,
    RadioGroup,
    TextField,
  } from "@mui/material";
  import SearchIcon from "@mui/icons-material/Search";
  import './home.css'


  
  const SideBar = () => {

  
    return (
        <div >
      <Grid className="sidebar" item md={3}>
        <Paper  elevation={5} sx={{ p: 2 }}>
          <TextField sx={{color:"white"}}
            fullWidth
            id="input-with-icon-textfield"
            label="Search..."
            variant="outlined"
            
        
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
  
          <Grid>
            <FormControl>
              <FormLabel>Категории</FormLabel>
              <RadioGroup>
                <FormControlLabel value="Все" control={<Radio />} label="Все" />
                <FormControlLabel className="filter-links"
                  value="Рестораны"
                  control={<Radio />}
                  label="Рестораны"
                />
                <FormControlLabel
                  value="Продукты"
                  control={<Radio />}
                  label="Продукты"
                />
                <FormControlLabel
                  value="Табачные изделия"
                  control={<Radio />}
                  label="Табачные изделия"
                />
                <FormControlLabel
                  value="Регионы"
                  control={<Radio />}
                  label="Регионы"
                />
                <FormControlLabel
                  value="Прочее"
                  control={<Radio />}
                  label="Прочее"
                />
                
              </RadioGroup>
            </FormControl>
            <input
              step={100}
              min={1}
              max={10000}
              onChange={(e) => console.log(e.target.value)}
              type="range"
              name=""
              id=""
            />
            <FormControl>
              <FormLabel>Цены</FormLabel>
              <RadioGroup
                
              >
                <FormControlLabel value="Все" control={<Radio />} label="Все" />
                <FormControlLabel
                  value="100"
                  control={<Radio />}
                  label="Выше 100"
                />
                <FormControlLabel
                  value="250"
                  control={<Radio />}
                  label="Выше 250"
                />
                <FormControlLabel
                  value="500"
                  control={<Radio />}
                  label="Выше 500"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
  
        </Paper>
      </Grid>
      </div>
    );
  };
  
  export default SideBar;
  