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
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import DirectionsCarFilledOutlinedIcon from '@mui/icons-material/DirectionsCarFilledOutlined';
import PetsIcon from '@mui/icons-material/Pets';
import SmokeFreeIcon from '@mui/icons-material/SmokeFree';
import WifiIcon from '@mui/icons-material/Wifi';
const ParkingData = {
  'Self parking': 'Complimentary',
  'Valet parking': 'Not available',
  Secured: 'Available',
  Covered: 'Available',
  'In/Out privileges': 'Available',
};

const PetsData = {
  'Service animals': 'Service animals only',
};

const SmokingData = {
  Smoking:
    'Smoking forbidden inside the hotel including rooms, restaurant, and bar. Smoking in permitted areas only.',
};

const WifiData = {
  Wifi: 'Free in-room and lobby WiFi',
};
const theme = createTheme();
export default function HostelPolicies() {
  const [value, setValue] = React.useState('1');
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
              component="h3"
              variant="h4"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Hotel Policies
            </Typography>
          </Container>
          <Container maxWidth="lg">
            <TabContext value={value}>
              <Box
                display="flex"
                justifyContent="center"
                width="100%"
                sx={{ borderBottom: 1, borderColor: 'divider' }}
              >
                <TabList
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                  variant="scrollable"
                  scrollButtons
                  allowScrollButtonsMobile
                >
                  <Tab
                    icon={<DirectionsCarFilledOutlinedIcon />}
                    label="Parking"
                    value="1"
                  />
                  <Tab icon={<PetsIcon />} label="Pets" value="2" />
                  <Tab icon={<SmokeFreeIcon />} label="No smoking" value="3" />
                  <Tab icon={<WifiIcon />} label="wifi" value="4" />
                </TabList>
              </Box>
              <TabPanel
                value="1"
                sx={{
                  padding: '24px',
                  marginTop: '0',
                }}
              >
                {/* START - Tabs  unit */}
                <Grid container spacing={4}>
                  {Object.keys(ParkingData).map((key, index) => (
                    <>
                      <Grid item xs={6} sm={6} md={6}>
                        <Typography sx={{ fontWeight: 'bold' }}>
                          {key}
                        </Typography>
                      </Grid>
                      <Grid item xs={6} sm={6} md={6}>
                        <Typography>{ParkingData[key]}</Typography>
                      </Grid>
                    </>
                  ))}
                </Grid>
                {/* END - Tabs  unit*/}
              </TabPanel>
              <TabPanel value="2" sx={{ padding: '0', marginTop: '20px' }}>
                {/* START - Tabs  unit */}
                <Grid container spacing={4}>
                  {Object.keys(PetsData).map((key, index) => (
                    <>
                      <Grid item xs={6} sm={6} md={6}>
                        <Typography sx={{ fontWeight: 'bold' }}>
                          {key}
                        </Typography>
                      </Grid>
                      <Grid item xs={6} sm={6} md={6}>
                        <Typography>{PetsData[key]}</Typography>
                      </Grid>
                    </>
                  ))}
                </Grid>
                {/* END - Tabs  unit*/}
              </TabPanel>
              <TabPanel value="3" sx={{ padding: '0', marginTop: '20px' }}>
                {/* START - Tabs  unit */}
                <Grid container spacing={4}>
                  {Object.keys(SmokingData).map((key, index) => (
                    <>
                      <Grid item xs={6} sm={6} md={6}>
                        <Typography sx={{ fontWeight: 'bold' }}>
                          {key}
                        </Typography>
                      </Grid>
                      <Grid item xs={6} sm={6} md={6}>
                        <Typography>{SmokingData[key]}</Typography>
                      </Grid>
                    </>
                  ))}
                </Grid>
                {/* END - Tabs  unit*/}
              </TabPanel>
              <TabPanel value="4" sx={{ padding: '0', marginTop: '20px' }}>
                {/* START - Tabs  unit */}
                <Grid container spacing={4}>
                  {Object.keys(WifiData).map((key, index) => (
                    <>
                      <Grid item xs={6} sm={6} md={6}>
                        <Typography sx={{ fontWeight: 'bold' }}>
                          {key}
                        </Typography>
                      </Grid>
                      <Grid item xs={6} sm={6} md={6}>
                        <Typography>{WifiData[key]}</Typography>
                      </Grid>
                    </>
                  ))}
                </Grid>
                {/* END - Tabs  unit*/}
              </TabPanel>
            </TabContext>
            <Grid
              container
              display="flex"
              justifyContent="center"
              alignItem="center"
            >
              {/* {Object.keys(iconAmenities).map((key, index) => (
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
            ))} */}
            </Grid>

            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="outlined">All Policies</Button>
            </Stack>
          </Container>
        </Box>
      </main>
    </ThemeProvider>
  );
}
