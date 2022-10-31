import * as React from 'react';
import {
  AppBar,
  Avatar,
  Badge,
  Button,
  Fab,
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
import AdbIcon from '@mui/icons-material/Adb';
import { FaFacebookF } from 'react-icons/fa';
import PersonIcon from '@mui/icons-material/Person';
import { useCart } from '../../../context/cart/cart.provider';
const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
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
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Box sx={{ position: 'fixed', bottom: 80, right: 16, mr: 1 }}>
          <Fab>
            <Link to="/checkout">
              <IconButton aria-label={notificationsLabel(3)}>
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
          </Fab>
        </Box>
      </Container>
    </AppBar>
  );
}
