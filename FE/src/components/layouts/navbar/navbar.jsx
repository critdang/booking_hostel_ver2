import * as React from 'react';
import {
  AppBar,
  Avatar,
  Badge,
  Button,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
} from '@mui/material';
import { Container } from '@mui/system';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import MenuIcon from '@mui/icons-material/Menu';
import { FaFacebookF } from 'react-icons/fa';
import PersonIcon from '@mui/icons-material/Person';
import { useCart } from '../../../context/cart/cart.provider';

export default function HeaderHome() {
  // [START - useContext]
  const { state } = useCart();
  // [END - useContext]

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // style badgeContent
  const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -4,
      top: 5,
      padding: '0 4px',
    },
  }));
  function notificationsLabel(count) {
    if (count === 0) {
      return 'no notifications';
    }
    if (count > 99) {
      return 'more than 99 notifications';
    }
    return `${count} notifications`;
  }
  const open = Boolean(anchorEl);

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
  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: 'white',
        color: 'black',
        boxShadow: '0px 0px 0px 0px',
        paddingTop: '10px',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar id="back-to-top-anchor">
          {/* START - LOGO on laptop */}
          <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
            <Typography
              variant="h3"
              noWrap
              component="a"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'roboto',
                fontWeight: 500,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              CASA 3
            </Typography>
          </Link>
          {/* END - LOGO on laptop */}

          {/* START - MENU on responsive */}
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
              <MenuItem onClick={handleCloseNavMenu}>
                <Link to="/" style={{ textDecoration: 'none' }}>
                  <Button sx={{ color: 'black', textDecoration: 'none' }}>
                    Home
                  </Button>
                </Link>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Link
                  to={`/categories`}
                  style={{ textDecoration: 'none', color: 'black' }}
                >
                  <Button sx={{ color: 'black', textDecoration: 'none' }}>
                    Rooms
                  </Button>
                </Link>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Link
                  to="/activities"
                  style={{ textDecoration: 'none', color: 'black' }}
                >
                  <Button sx={{ color: 'black', textDecoration: 'none' }}>
                    Activities
                  </Button>
                </Link>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Link
                  to="/about"
                  style={{ textDecoration: 'none', color: 'black' }}
                >
                  <Button sx={{ color: 'black', textDecoration: 'none' }}>
                    About
                  </Button>
                </Link>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Link
                  to="/location"
                  style={{ textDecoration: 'none', color: 'black' }}
                >
                  <Button sx={{ color: 'black', textDecoration: 'none' }}>
                    Location
                  </Button>
                </Link>
              </MenuItem>
              {/* <MenuItem onClick={handleCloseNavMenu}> */}
              {/* <Link to="/profile">
                  <Button underline="none" sx={{ color: 'black' }}>
                    <PersonIcon></PersonIcon>
                  </Button>
                </Link> */}
              {/* </MenuItem> */}
              <MenuItem onClick={handleCloseNavMenu}>
                <Link
                  to="/https://www.facebook.com/Crit1008/"
                  style={{ textDecoration: 'none', paddingLeft: '30px' }}
                >
                  <FaFacebookF />
                </Link>
              </MenuItem>
            </Menu>
          </Box>
          {/* END - MENU on responsive */}

          {/* START - LOGO on responsive */}
          <Typography
            variant="h4"
            noWrap
            component="a"
            href=""
            sx={{
              display: { xs: 'flex', md: 'none' },
              fontFamily: 'roboto',
              fontWeight: 600,
              letterSpacing: '.2rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            CASA 3
          </Typography>
          {/* END - LOGO on responsive */}

          {/* START - MENU on laptop */}
          <Box
            sx={{
              justifyContent: 'right',
              flexGrow: 1,
              alignItems: 'center',
              display: { xs: 'none', md: 'flex' },
            }}
          >
            <Link to="/" style={{ textDecoration: 'none' }}>
              <Button sx={{ color: 'black', textDecoration: 'none' }}>
                Home
              </Button>
            </Link>
            <Link to="/room" style={{ textDecoration: 'none' }}>
              <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                sx={{
                  color: 'black',
                  '&:hover': {
                    opacity: '50%',
                  },
                }}
              >
                Dorm & Rooms
              </Button>
              {/* Start - Dropdown list menu */}

              {/* <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <Link
                to={`/categories`}
                style={{ textDecoration: 'none', color: 'black' }}
              >
                <MenuItem onClick={handleClose} sx={{ color: 'black' }}>
                  All
                </MenuItem>
              </Link>
            </Menu> */}

              {/* END - Dropdown list menu */}
            </Link>
            <div>
              <Link
                to="/activities"
                style={{ textDecoration: 'none', color: 'black' }}
              >
                <Button sx={{ color: 'black', textDecoration: 'none' }}>
                  Activities
                </Button>
              </Link>
              <Link
                to="/about"
                style={{ textDecoration: 'none', color: 'black' }}
              >
                <Button sx={{ color: 'black', textDecoration: 'none' }}>
                  About
                </Button>
              </Link>
              <Link
                to="/location"
                style={{ textDecoration: 'none', color: 'black' }}
              >
                <Button sx={{ color: 'black', textDecoration: 'none' }}>
                  Location
                </Button>
              </Link>
              {/* <Link to="/profile">
                  <Button underline="none" sx={{ color: 'black' }}>
                    <PersonIcon></PersonIcon>
                  </Button>
                </Link> */}
            </div>
            <Link to="/cart">
              <IconButton aria-label={notificationsLabel(4)}>
                <StyledBadge badgeContent={state.count} color="success">
                  <ShoppingCartIcon
                    cursor="pointer"
                    sx={{
                      color: 'white',
                      stroke: 'black',
                      verticalAlign: 'bottom',
                    }}
                  >
                    Cart
                  </ShoppingCartIcon>
                </StyledBadge>
              </IconButton>
            </Link>
            {/* <Link to="/profile">
              <PersonIcon
                cursor="pointer"
                sx={{
                  color: 'white',
                  stroke: 'black',
                  verticalAlign: 'bottom',
                }}
              ></PersonIcon>
            </Link> */}
          </Box>
          {/* END - MENU on laptop */}

          {/* Start- Book & Social icon on laptop */}
          <Box sx={{ flexGrow: 0 }}>
            <Link
              to="/room"
              style={{ textDecoration: 'none', paddingLeft: '30px' }}
            >
              <Button variant="outlined" color="error">
                Book
              </Button>
            </Link>
          </Box>
          {/* End- Book & Social icon on laptop */}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
