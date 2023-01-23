import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import BoltOutlinedIcon from '@mui/icons-material/BoltOutlined';
import '../navbar/Navbar.css'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../Context/authContext';


const pages = [
  {name: "Продукты", link: "/products", id: 1},
  {name: "О нас", link: "/list", id: 2},
  {name: "Блог", link: "/aboutus", id:3}
];


function Navbar() {
  const navigate = useNavigate()

  const { user, checkAuth, logout } = useAuth()

  React.useEffect(() => {
    // проверка токена на действительность
    if (localStorage.getItem("token")) {
      checkAuth();
    }
  }, []);

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const buttonsStyle = {
    color: "white",
    display: "block",
    textTransform: "capitalize",
  };

  return (
    // sx={{backgroundColor: 'white'}}
    <Box className='navbar-main'>
    <AppBar className='navbar' position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <BoltOutlinedIcon sx={{color:"white", display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              ml: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              
              color: 'black',
              textDecoration: 'none',
            }}
          >
            FREE
            
          </Typography>
        <img width="80px" src="https://img.icons8.com/color/512/express.png" alt="" />
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.id} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center"                 onClick={()=> {
                  // тут ставим ссылки
                  handleCloseNavMenu()
                  navigate(page.link)
                }} >{page.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <BoltOutlinedIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            F-E
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent: "center", justifyContent: "space-around" } }}>
          {pages.map((page) => (
              <Button
                key={page.id}
                onClick={()=> {
                  // тут ставим ссылки
                  handleCloseNavMenu()
                  navigate(page.link)
                }}
                sx={{ my: 2, color: 'black', display: 'block' }}
              >
                {page.name}
              </Button>
            ))}
          </Box>
              {user ? (
                <>
                <Typography sx={{ alignSelf: "center", marginRight: "10px" }}>{user}</Typography>
                <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
              >
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center" onClick={logout}>Logout</Typography>
                </MenuItem>
            </Menu>
          </Box>
          </>
              ) : (
                <Box sx={{ display: "flex" }}>
                <Button sx={buttonsStyle} onClick={() => navigate("/login")}>
                  Login
                </Button>
                <Button sx={buttonsStyle} onClick={() => navigate("/register")}>
                  Register
                </Button>
              </Box>
              )}
        </Toolbar>
      </Container>
    </AppBar>
    </Box>
    // </Box>
  );
}
export default Navbar;
