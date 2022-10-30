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
const ParkingData = {
  'Self parking': 'Complimentary',
  'Valet parking': 'Not available',
  Secured: 'Available',
  Covered: 'Available',
  'In/Out privileges': 'Available',
};

const Transportation = {
  'Airport shuttle': 'Not available',
  'Da Nang, Vietnam': '4 kilometers',
  'Hue, Vietnam': '82 kilometers',
};

const WhatIsNearby = {
  'Asia Park': '7 kilometers',
  'BRG Da Nang Golf Resort': '15.07 kilometers',
  'Bana Hills': '27 kilometers',
  'Cham Museum': '2.30 kilometers',
  'City Center': '0.20 kilometers',
  'Da Nang Beach': '3.20 kilometers',
};

const theme = createTheme();
export default function Location() {
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
              LOCATION
            </Typography>
            <Typography
              variant="body1"
              align="center"
              color="text.secondary"
              paragraph
            >
              We’re located in the heart of the city. It’s easy to find us, but
              hard to leave.
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
        <Box m={7}>
          <Container maxWidth="md">
            <Typography
              component="h2"
              variant="h4"
              align="center"
              color="text.primary"
              gutterBottom
            >
              HOW TO GET HERE
            </Typography>
            <Typography
              variant="body1"
              align="center"
              color="text.secondary"
              paragraph
            >
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font.
            </Typography>
          </Container>
        </Box>
        <Container maxWidth="xl" sx={{ py: 0 }}>
          <Grid container>
            <Grid
              item
              xs={12}
              sm={4}
              md={4}
              sx={{ backgroundColor: '#f1f1f1', padding: '20px' }}
            >
              <Typography variant="h4" textAlign="center">
                Parking
              </Typography>
              {Object.keys(ParkingData).map((key, index) => (
                <Grid container>
                  <Grid item xs={6} sm={6} md={6}>
                    <Typography fontWeight="bold" variant="body1" gutterBottom>
                      {key}
                    </Typography>
                  </Grid>
                  <Grid item xs={6} sm={6} md={6}>
                    <Typography variant="body1" gutterBottom>
                      {ParkingData[key]}
                    </Typography>
                  </Grid>
                </Grid>
              ))}
            </Grid>
            <Grid item xs={12} sm={4} md={4} padding="24px">
              <Typography variant="h4" textAlign="center">
                Transportation
              </Typography>
              {Object.keys(Transportation).map((key, index) => (
                <Grid container>
                  <Grid item xs={6} sm={6} md={6}>
                    <Typography fontWeight="bold" variant="body1" gutterBottom>
                      {key}
                    </Typography>
                  </Grid>
                  <Grid item xs={6} sm={6} md={6}>
                    <Typography variant="body1" gutterBottom>
                      {Transportation[key]}
                    </Typography>
                  </Grid>
                </Grid>
              ))}
            </Grid>
            <Grid
              item
              xs={12}
              sm={4}
              md={4}
              sx={{ backgroundColor: '#f1f1f1', padding: '24px' }}
            >
              <Typography variant="h4" textAlign="center">
                What's nearby
              </Typography>
              {Object.keys(WhatIsNearby).map((key, index) => (
                <Grid container>
                  <Grid item xs={6} sm={6} md={6}>
                    <Typography fontWeight="bold" variant="body1" gutterBottom>
                      {key}
                    </Typography>
                  </Grid>
                  <Grid item xs={6} sm={6} md={6}>
                    <Typography variant="body1" gutterBottom>
                      {WhatIsNearby[key]}
                    </Typography>
                  </Grid>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Container>
        <Box m={7}>
          <Container maxWidth="md">
            <Typography
              component="h2"
              variant="h4"
              align="center"
              color="text.primary"
              gutterBottom
            >
              CONTACT US
            </Typography>
            <Typography
              variant="body1"
              align="center"
              color="text.secondary"
              paragraph
            >
              500 Terry Francois Street, San Francisco, CA 94158
            </Typography>
          </Container>
        </Box>
      </main>
    </ThemeProvider>
  );
}
