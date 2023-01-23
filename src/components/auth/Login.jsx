import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Alert, createMuiTheme, unstable_createMuiStrictModeTheme } from "@mui/material";
import { useAuth } from "../../Context/authContext";
import BoltOutlinedIcon from '@mui/icons-material/BoltOutlined';





const theme = createTheme();

export default function Login() {
  const { login, error, setError } = useAuth()

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSave() {
    if (!email.trim() || !password.trim()) {
      alert("Заполните поля!");
      return;
    }

    let formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);

    login(formData, email);
  }



  

  return (
    <div  className='regist-block'>
    <ThemeProvider theme={theme}>
      <Container  className='auth-box' component="main" maxWidth="xs">
        {error ? <Alert severity="error">{error}</Alert> : null}
        <CssBaseline />
        <Box
          sx={{
            marginTop: 5,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div style={{display: 'flex', margin: '30px 0',}}>
          <BoltOutlinedIcon sx={{color:"black", height: '50px',display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              fontSize: '30px',
              color: 'black',
              textDecoration: 'none',
            }}
          >
            FreeExpress
          </Typography>
          </div>
          <Typography component="h1" variant="h5">
            Войти
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>

            <input 
             value={email}
             onChange={(e) => setEmail(e.target.value)}
            placeholder="Почта*" className="input__auth" type="text" name="" id="" />
            <input 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
             type="password"
            placeholder="Пароль" style={{marginBottom: '30px'}} className="input__auth"  name="" id="" />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              id='auth__button'

              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2,}}
              onClick={handleSave}
            >
              Войти
            </Button>
            <Grid container>
              <Grid item xs>
                <Link
                sx={{textDecoration: 'none', color: 'black'}}
                href="/forgot" variant="body2">
                  Забыли пароль?
                </Link>
              </Grid>
              <Grid item>
                <Link
                 sx={{textDecoration: 'none', color: 'black'}}
                href="/register" variant="body2">
                  {"Нет аккаунта? создайте!"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
    </div>
  );
}
