import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import room1 from '../../../assets/img/room1.jpg';
import room2 from '../../../assets/img/room2.jpg';
import room3 from '../../../assets/img/room3.jpg';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const cards = [1, 2];

const iconAmenities = {
  'Free parking':
    'https://www.hilton.com/modules/assets/svgs/amenities/freeParking.svg',
  'Free WiFi':
    'https://www.hilton.com/modules/assets/svgs/amenities/freeWifi.svg',
  'Non-smoking rooms':
    'https://www.hilton.com/modules/assets/svgs/amenities/nonSmoking.svg',
  Concierge:
    'https://www.hilton.com/modules/assets/svgs/amenities/concierge.svg',
  'Fitness center':
    'https://www.hilton.com/modules/assets/svgs/amenities/fitnessCenter.svg',
  'On-site restaurant':
    'https://www.hilton.com/modules/assets/svgs/amenities/dining.svg',
  'EV Charging':
    'https://www.hilton.com/modules/assets/svgs/amenities/evCharging.svg',
  'Executive lounge':
    'https://www.hilton.com/modules/assets/svgs/amenities/executiveLounge.svg',
  'Outdoor pool':
    'https://www.hilton.com/modules/assets/svgs/amenities/outdoorPool.svg',
  'Room service':
    'https://www.hilton.com/modules/assets/svgs/amenities/roomService.svg',
  'Business center':
    'https://www.hilton.com/modules/assets/svgs/amenities/businessCenter.svg',
  'Meeting rooms':
    'https://www.hilton.com/modules/assets/svgs/amenities/meetingRooms.svg',
  'Pet not allowed':
    'https://www.hilton.com/modules/assets/svgs/amenities/petsNotAllowed.svg',
};

const theme = createTheme();
export default function Amenities() {
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
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h3"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Our Amenities
            </Typography>
          </Container>
        </Box>
        <Container maxWidth="lg">
          {/* End hero unit */}
          <Grid
            container
            display="flex"
            justifyContent="center"
            alignItem="center"
          >
            {Object.keys(iconAmenities).map((key, index) => (
              <>
                <Grid
                  item
                  key={index}
                  xs={4}
                  sm={4}
                  md={2}
                  sx={{
                    border: 1,
                    borderRadius: 3,
                    borderColor: 'grey.400',
                    borderWidth: '2px',
                  }}
                  style={{
                    padding: 4,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    margin: '10px 10px ',
                  }}
                >
                  <img
                    src={iconAmenities[key]}
                    style={{ width: '64px', height: '64px' }}
                  ></img>
                  <Typography
                    variant="body1"
                    gutterBottom
                    sx={{ textAlign: 'center' }}
                  >
                    {key}
                  </Typography>
                </Grid>
              </>
            ))}
          </Grid>
          <Stack
            sx={{ pt: 4 }}
            direction="row"
            spacing={2}
            justifyContent="center"
          >
            <Button variant="outlined">All Amenities</Button>
          </Stack>
        </Container>
      </main>
    </ThemeProvider>
  );
}
