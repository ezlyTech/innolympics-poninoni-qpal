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

const Navigation = () => {
  const [hasUser, setHasUser] = useState(null);
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

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
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                flexGrow: 1,
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'primary',
                textDecoration: 'none'
              }}
            >
              Q-PAL
            </Typography>
            <Stack direction='row' alignItems='center'>
              <Box sx={{ flexGrow: 0 }}>
                {
                  hasUser ? (
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
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