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
import { Alert } from "@mui/material";
import { useAuth } from "../../Context/authContext";
import BoltOutlinedIcon from '@mui/icons-material/BoltOutlined';


function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function ForgotActivity() {
  const { error, postActivity } = useAuth()
  
  const [key, setKey] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  
  
  function handleSave() {
    if (!key.trim() || !password.trim() || !passwordConfirm.trim()) {
      alert("Заполните поля!");
      return;
    }
    let formData = new FormData()
    formData.append("activation_code", key)
    formData.append("password", password)
    formData.append("password_confirm", passwordConfirm)
    postActivity(formData)

  }

  return (
    <div className="body">
    <svg className='block__svg' version="1.1" xmlns="http://www.w3.org/2000/svg"
  xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="100%"  viewBox="0 0 1600 900" >
  <defs>
    <linearGradient id="bg">
      <stop offset="0%" style={{stopColor:'#FFD54F'}}></stop>
      <stop offset="50%" style={{stopColor:'#fce300'}}></stop>
      <stop offset="100%" style={{stopColor:'#FFD600'}}></stop>
    </linearGradient>
    <path id="wave" fill="url(#bg)" d="M-363.852,502.589c0,0,236.988-41.997,505.475,0
s371.981,38.998,575.971,0s293.985-39.278,505.474,5.859s493.475,48.368,716.963-4.995v560.106H-363.852V502.589z" />
  </defs>
  <g>
    <use href='#wave' opacity=".3">
      <animateTransform
        attributeName="transform"
        attributeType="XML"
        type="translate"
        dur="10s"
        calcMode="spline"
        values="270 230; -334 180; 270 230"
        keyTimes="0; .5; 1"
        keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
        repeatCount="indefinite" />
    </use>
    <use href='#wave' opacity=".6">
      <animateTransform
        attributeName="transform"
        attributeType="XML"
        type="translate"
        dur="8s"
        calcMode="spline"
        values="-270 230;243 220;-270 230"
        keyTimes="0; .6; 1"
        keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
        repeatCount="indefinite" />
    </use>
    <use href='#wave' opacty=".9">
      <animateTransform
        attributeName="transform"
        attributeType="XML"
        type="translate"
        dur="6s"
        calcMode="spline"
        values="0 230;-140 200;0 230"
        keyTimes="0; .4; 1"
        keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
        repeatCount="indefinite" />
    </use>
  </g>
</svg>
    <ThemeProvider theme={theme}>
      <Container className='auth-box' component="main" maxWidth="xs">
        {error ? <Alert severity="error">{error}</Alert> : null}
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
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
            Активация ключа
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
             <input 
             name="email"
             value={key}
              onChange={(e) => setKey(e.target.value)}
            placeholder="Код активации*" className="input__auth"
             type="text" 
             id="email" />
               <input 
              value={password}
              onChange={(e)=> setPassword(e.target.value)}
            placeholder="Новый пароль*" className="input__auth" 
            type="password"
             name="password"
             id="password" />
             <input 
               value={passwordConfirm}
               onChange={(e)=> setPasswordConfirm(e.target.value)}
             type="password"
            placeholder="Подтверждение пароля*" 
            style={{marginBottom: '10px'}} 
            className="input__auth"  
            name="password-confirm"
            id="password-confirm" />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
            id='auth__button'
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleSave}
            >
              Активация
            </Button>
            <Grid container>
              <Grid item xs>
              </Grid>
              <Grid item>
                <Link
                sx={{textDecoration: 'none', color: 'black'}}
                href="/register" variant="body2">
                  {"Don't have an account? Sign Up"}
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
