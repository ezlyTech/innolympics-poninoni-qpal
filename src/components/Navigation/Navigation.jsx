import { useEffect, useState } from 'react';
import { 
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Button,
  Tooltip,
  MenuItem,
  Stack,
} from '@mui/material';
import {
  signOut, 
} from 'firebase/auth'
import {
  Adb as AdbIcon,
  Menu as MenuIcon,
} from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth } from "firebase/auth";
import logo from '../../assets/images/q-pal-logo.png';

const Navigation = () => {
  const [hasUser, setHasUser] = useState(null);
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const auth = getAuth();
  const user = auth.currentUser;

  useEffect(() => {
    // Listen for changes to the current user
    if (user) {
        console.log('may user!')
        console.log(user);
        setHasUser(true);
    } else {
      // No user is signed in.
        console.log('walang user!')
        setHasUser(false);
    } // Cleanup listener
  }, [user]);

  const navigate = useNavigate();

  const logout = async () => {
    try {
        await signOut(auth);
        navigate('/');
    } catch (err) {
        console.error("Error logging out:", err.message);
    }
  };

  const stringToColor = (string) => {
    let hash = 0;
    let i;
  
    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }
  
    let color = '#';
  
    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */
  
    return color;
  }
  
  const stringAvatar = (name) => {
    return {
      sx: {
        bgcolor: stringToColor(name),
        width: 24, 
        height: 24,
        fontSize: 10
      },
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
  }


  return (
    <AppBar 
      position="static" 
      sx={{
        backgroundColor: '#FBEEFF',
        boxShadow: 'none'
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Stack 
            direction='row' 
            justifyContent='space-between'
            alignItems='center'
            sx={{ width: '100%' }}
          >
            <img src={logo} alt='Q-PAL Logo' width={30}/>
            <Stack direction='row' alignItems='center'>
              <Box sx={{ flexGrow: 0 }}>
                {
                  hasUser ? (
                    <Avatar
                      {...stringAvatar(user.displayName)}  
                    />
                  ) : (
                    <Button
                      variant='outlined'
                      size='small'
                      href='/auth'
                    >
                      Login
                    </Button>
                  )
                }
              </Box>
              <Box 
                sx={{ 
                  flexGrow: 1, 
                  display: { 
                    xs: 'flex', 
                    md: 'none' 
                    } 
                }}
              >
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color='gray'
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
                  sx={{ display: { xs: 'block', md: 'none' } }}
                >
                  {hasUser ? (
                    <MenuItem onClick={handleCloseUserMenu}>
                      <Typography component={Button} onClick={logout}>
                        Logout
                      </Typography>
                    </MenuItem>
                  ) : (
                    <MenuItem onClick={handleCloseUserMenu}>
                      <Typography component={Link} to='/auth'>
                        Login
                      </Typography>
                    </MenuItem>
                  )}
                </Menu>
              </Box>
            </Stack>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navigation;