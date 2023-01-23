import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import BoltOutlinedIcon from '@mui/icons-material/BoltOutlined';
import { Alert } from '@mui/material';
import { useAuth } from '../../Context/authContext';


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function Register() {
    const {register, error, setError} = useAuth()
    console.log(error)

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirm, setPasswordConfirm] = useState("")

    // функцию навешиваем на кнопку
    function handleSave(){
        // проверка на заполненность полей
        if (!email.trim() || !password.trim() || !passwordConfirm.trim()) {
            alert("zapolnite polya")
            return
        }
        // создание обьекта
        let formData = new FormData()
        formData.append("email", email)
        formData.append("password", password)
        formData.append("password_confirm", passwordConfirm)
        // добавляем юзера
        register(formData)
    }

  return (
    
      <div className='auth__block'>
    <ThemeProvider theme={theme}>
      <Container className='auth-box' component="main" maxWidth="xs">
        {error ? <Alert severity='error'>{error}</Alert> : null}
        <CssBaseline />
        <Box
          sx={{
            marginTop: 7,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
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
            Регистрация
          </Typography>
          <Box  component="form" noValidate sx={{ mt: 1 }}>
               <input 
             value={email}
             name="email"
             onChange={(e) => setEmail(e.target.value)}
            placeholder="Почта*" className="input__auth"
             type="text" 
             id="email" />
               <input 
              value={password}
              onChange={(e)=> setPassword(e.target.value)}
            placeholder="Пароль*" className="input__auth" 
            type="password"
             name="password"
             id="password" />
            <input 
               value={passwordConfirm}
               onChange={(e)=> setPasswordConfirm(e.target.value)}
             type="password"
            placeholder="Подтверждение пароля*" 
            style={{marginBottom: '20px'}} 
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
              onClick={()=> handleSave()}
            >
              Регистрация
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
                href="/login" variant="body2">
                  {"Есть аккаунт? Войти"}
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