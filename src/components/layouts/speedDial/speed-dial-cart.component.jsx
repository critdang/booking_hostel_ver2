import * as React from 'react';
import Box from '@mui/material/Box';

import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { Fab, IconButton } from '@mui/material';
import styled from '@emotion/styled';
import { Badge } from '@mui/icons-material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

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
export default function SpeedDialCart() {
  return (
    // <Box sx={{ transform: 'translateZ(0px)', flexGrow: 1 }}>

    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Fab
        variant="extended"
        sx={{ position: 'fixed', bottom: 16, right: 16, mr: 1 }}
      >
        <Link to="/checkout">
          <IconButton aria-label={notificationsLabel(2)}>
            <StyledBadge color="success">
              <ShoppingCartIcon
                cursor="pointer"
                sx={{
                  color: 'red',
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
    // </Box>
  );
}
