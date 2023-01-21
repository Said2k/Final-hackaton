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
          <Avatar sx={{ m: 5, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Регистрация
          </Typography>
          <Box  component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Почта"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e)=> setEmail(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="пароль"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e)=> setPassword(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password-confirm"
              label="Подтверждение пароля"
              type="password"
              id="password-confirm"
              autoComplete="current-password"
              value={passwordConfirm}
              onChange={(e)=> setPasswordConfirm(e.target.value)}
            />
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