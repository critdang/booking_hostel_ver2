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

const cards = [1, 2, 3, 4, 5, 6];

const theme = createTheme();
export default function AllRoom() {
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
              All Room
            </Typography>
            <Typography
              variant="body1"
              align="center"
              color="text.secondary"
              paragraph
            >
              Something short and leading about the collection below—its
              contents, the creator, etc. Make it short and sweet, but not too
              short so folks don&apos;t simply skip over it entirely.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="outlined">Go to Dorm & Rooms</Button>
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 0 }} maxWidth="lg">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <>
                <Grid item key={card} xs={12} sm={6} md={6}>
                  <img
                    src={room1}
                    alt=""
                    width="70%"
                    style={{
                      transform: 'translateX(40%)',
                    }}
                  ></img>
                  <img
                    src="https://static.wixstatic.com/media/94e66f_22b4e27ff3a0452a8207d9fbb1a93bbd~mv2_d_4272_2848_s_4_2.jpeg/v1/fill/w_454,h_450,al_c,q_80,usm_0.66_1.00_0.01/94e66f_22b4e27ff3a0452a8207d9fbb1a93bbd~mv2_d_4272_2848_s_4_2.webp"
                    alt=""
                    width="70%"
                    style={{
                      transform: 'translateY(-15%)',
                    }}
                  ></img>
                </Grid>
                <Grid item key={card} xs={12} sm={6} md={6}>
                  <Typography variant="h3" gutterBottom>
                    VIP room
                  </Typography>
                  <Typography variant="body1">
                    If you look at what you have in life, you’ll always have
                    more. If you look at what you don’t have in life, you’ll
                    never have enough.
                  </Typography>
                  <Stack
                    sx={{ pt: 4 }}
                    direction="row"
                    spacing={2}
                    justifyContent="center"
                  >
                    <Button variant="outlined">Book A Room</Button>
                  </Stack>
                </Grid>
              </>
            ))}
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );
}
