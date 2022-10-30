import * as React from 'react';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';

const theme = createTheme();

export default function Footer() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          bgcolor: 'black',
        }}
      >
        <Grid
          container
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          xs={12}
          pt={10}
          my={10}
        >
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '20px',
            }}
          >
            <Typography variant="h4" sx={{ color: 'white' }}>
              CASA 3
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '20px',
            }}
          >
            <Typography
              variant="body2"
              sx={{ color: 'white', textAlign: 'center' }}
            >
              500 Terry Francois Street San Francisco, CA 94158 info@mysite.com
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              marginBottom: '20px',
            }}
          >
            <Typography variant="body2" sx={{ color: 'white' }}>
              Tel: 123-456-7890
            </Typography>
            <Typography variant="body2" sx={{ color: 'white' }}>
              Fax: 123-456-7890
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Link
              to="/https://www.facebook.com/Crit1008/"
              style={{ textDecoration: 'none', paddingRight: '15px' }}
            >
              <FaFacebookF style={{ color: 'white', fontSize: '25px' }} />
            </Link>
            <Link
              to="/https://www.facebook.com/Crit1008/"
              style={{ textDecoration: 'none', paddingLeft: '15px' }}
            >
              <FaInstagram style={{ color: 'white', fontSize: '25px' }} />
            </Link>
          </Grid>
        </Grid>

        <Grid
          item
          xs={12}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
            }}
            gutterBottom
          >
            © 2023 by CASA 3. Proudly created with Crit Dang & Quang Đại
          </Typography>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}
