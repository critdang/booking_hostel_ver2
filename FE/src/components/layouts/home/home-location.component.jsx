import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Activities from './index';

const cards = [1];

const theme = createTheme();
export default function HomeLocation() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="md">
            <Typography
              component="h2"
              variant="h4"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Where to find us
            </Typography>

            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="outlined">Read more</Button>
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 0 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            <Grid
              xs={12}
              style={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <Box>
                <iframe
                  title="map"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d479.18210575958375!2d108.22578482283623!3d16.093651340736436!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314219547c3cbd83%3A0x14a3480233f100db!2z7ZWc7Jqw66asIEhhbm9vcmk!5e0!3m2!1svi!2shk!4v1666870288468!5m2!1svi!2shk"
                  width="600"
                  height="450"
                  style={{
                    border: 0,
                  }}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );
}
