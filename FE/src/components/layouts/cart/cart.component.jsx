import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Checkbox,
  FormControlLabel,
  MenuItem,
  TextField,
} from '@mui/material';
import { FaArrowRight } from 'react-icons/fa';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';

const theme = createTheme();

const currencies = [
  {
    value: 'VietNam',
    label: 'Viet Nam',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
];

export default function Album() {
  const [currency, setCurrency] = React.useState('EUR');

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };
  const [expanded, setExpanded] = React.useState(false);

  const handleChangeAccordion = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const [cartInfo, setCartInfo] = React.useState({});
  console.log(
    '🚀 ~ file: cart.component.jsx ~ line 58 ~ Album ~ cartInfo',
    cartInfo
  );
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        <Container sx={{ py: 8 }} maxWidth="lg" disableGutters>
          {/* End hero unit */}
          <Grid container spacing={2}>
            <Grid
              item
              xs={12}
              sm={6}
              md={6}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typography variant="h4" gutterBottom>
                Fill in the form
              </Typography>
              <Typography variant="body1" gutterBottom>
                Please fill in your private information
              </Typography>
              <Grid container>
                <Grid item xs={12}>
                  <TextField
                    required
                    id="fullName"
                    name="fullName"
                    label="Full Name"
                    fullWidth
                    variant="standard"
                    onChange={(e) => {
                      setCartInfo({
                        ...cartInfo,
                        [e.target.name]: e.target.value,
                      });
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    id="email"
                    name="email"
                    label="Email"
                    fullWidth
                    variant="standard"
                    onChange={(e) => {
                      setCartInfo({
                        ...cartInfo,
                        [e.target.name]: e.target.value,
                      });
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="Nationality"
                    name="nationality"
                    label="Nationality"
                    fullWidth
                    variant="standard"
                    onChange={(e) => {
                      setCartInfo({
                        ...cartInfo,
                        [e.target.name]: e.target.value,
                      });
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="countryOrRegion"
                    name="countryOrRegion"
                    label="Country or region"
                    fullWidth
                    variant="standard"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="PhoneNumber"
                    name="phoneNumber"
                    label="Phone Number"
                    fullWidth
                    variant="standard"
                    onChange={(e) => {
                      setCartInfo({
                        ...cartInfo,
                        [e.target.name]: e.target.value,
                      });
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="outlined-select-currency"
                    select
                    label="Select"
                    value={currency}
                    onChange={handleChange}
                    helperText="Please select your currency"
                  >
                    {currencies.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        color="secondary"
                        name="saveAddress"
                        value="yes"
                      />
                    }
                    label="I accept the hostel's policy"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button variant="contained" sx={{ mt: 3, ml: 1 }}>
                    Book
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              md={6}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Box>
                <Typography variant="h4" gutterBottom>
                  Your Stay
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Please fill in your private information
                </Typography>
                <Box>
                  <Grid
                    container
                    sx={{
                      borderBottom: 0.1,
                      marginBottom: 2,
                      paddingBottom: 2,
                      borderColor: 'rgba(0,0,0,0.5)',
                    }}
                  >
                    <Grid item xs={6}>
                      <Typography variant="body1">Dulux Room</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="body1" textAlign="right">
                        43,120,000 $
                      </Typography>
                    </Grid>
                    <Grid item xs={12} display="flex" alignItems="center">
                      <Typography variant="body1" id="startDate">
                        November 17,2021
                      </Typography>
                      <FaArrowRight />
                      <Typography variant="body1" id="startDate">
                        November 9,2021
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <div>
                        <Accordion
                          expanded={expanded === 'panel1'}
                          onChange={handleChangeAccordion('panel1')}
                        >
                          <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                          >
                            <Typography sx={{ width: '33%', flexShrink: 0 }}>
                              See the room details
                            </Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <Grid container>
                              <Grid item xs={12}>
                                <Typography variant="body1">
                                  OPERA WING, PREMIUM ROOM, QUEEN BED
                                </Typography>
                              </Grid>
                              <Grid container>
                                <Grid item xs={6} sm={6} md={6}>
                                  <Typography variant="body1">
                                    1 room
                                  </Typography>
                                </Grid>
                                <Grid item xs={6} sm={6} md={6}>
                                  <Typography variant="body1" textAlign="right">
                                    2 adults
                                  </Typography>
                                </Grid>

                                <Grid item xs={12} sm={12} md={12}>
                                  <Typography variant="body1" textAlign="right">
                                    0 children
                                  </Typography>
                                </Grid>
                                <Grid item xs={12} sm={12} md={12}>
                                  <Link to="/about" style={{ color: 'black' }}>
                                    Pricing condition
                                  </Link>
                                </Grid>
                                <Grid item xs={6} sm={6} md={6}>
                                  <Typography variant="body1">Room</Typography>
                                </Grid>
                                <Grid item xs={6} sm={6} md={6}>
                                  <Typography variant="body1" textAlign="right">
                                    0$
                                  </Typography>
                                </Grid>
                                <Grid item xs={6} sm={6} md={6}>
                                  <Typography variant="body1">VAT</Typography>
                                </Grid>
                                <Grid item xs={6} sm={6} md={6}>
                                  <Typography variant="body1" textAlign="right">
                                    0$
                                  </Typography>
                                </Grid>
                                <Grid item xs={6} sm={6} md={6}>
                                  <Typography variant="body1">Total</Typography>
                                </Grid>
                                <Grid item xs={6} sm={6} md={6}>
                                  <Typography variant="body1" textAlign="right">
                                    0$
                                  </Typography>
                                </Grid>
                              </Grid>
                            </Grid>
                          </AccordionDetails>
                        </Accordion>
                      </div>
                    </Grid>
                  </Grid>
                  <Container disableGutters>
                    <Grid container>
                      <Grid item xs={12}>
                        <Typography variant="body1">
                          TOTAL(fees and taxes included)
                        </Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography variant="body1">6 ROOMS</Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography variant="body1" textAlign="right">
                          43,120,000 $
                        </Typography>
                      </Grid>
                    </Grid>
                  </Container>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );
}
