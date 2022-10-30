import * as React from 'react';
import {
  AppBar,
  Badge,
  Button,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@mui/material';
import { Container } from '@mui/system';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
export default function Navbar() {
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
      <Toolbar>
        <Grid container justify="space-between">
          <Typography
            variant="h3"
            noWrap
            component="a"
            href="/"
            sx={{
              fontFamily: 'roboto',
              fontWeight: 400,

              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            CASA3
          </Typography>
        </Grid>
        <Container
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'right',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <Button sx={{ color: 'black', textDecoration: 'none' }}>
                Home
              </Button>
            </Link>
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
            <Menu
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
            </Menu>
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

            <Link to="/checkout">
              <IconButton aria-label={notificationsLabel(100)}>
                <StyledBadge color="success">
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
            <Link
              to="/rooms"
              style={{ textDecoration: 'none', paddingLeft: '30px' }}
            >
              <Button variant="outlined" color="error">
                Book
              </Button>
            </Link>
            <Link
              to="/https://www.facebook.com/Crit1008/"
              style={{ textDecoration: 'none', paddingLeft: '30px' }}
            >
              <FaFacebookF />
            </Link>
          </div>
        </Container>
      </Toolbar>
    </AppBar>
  );
}
