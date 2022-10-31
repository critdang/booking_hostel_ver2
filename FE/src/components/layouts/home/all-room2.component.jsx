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

const cards = [1];
const theme = createTheme();
export default function AllRoom2() {
  const [isHover, setIsHover] = React.useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };
  const styleText = {
    position: 'absolute',
    color: 'white',
    fontSize: '30px',
    left: '50%',
    transform: 'translateX(-50%)',
    textAlign: 'center',
    bottom: isHover ? '25%' : '8px',
    transition: isHover ? `0.5s ease` : 'none',
  };

  const styleBox = {
    opacity: isHover ? '0.7' : '1',
    postition: 'relative',
    transition: isHover ? `0.5s ease` : 'none',
  };
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        <Box
          sx={{
            bgcolor: '#f1f1f1',
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
          <Container sx={{ py: 3 }} maxWidth="lg">
            {/* End hero unit */}
            <Grid container spacing={4}>
              {cards.map((card) => (
                <>
                  <Grid item key={card} xs={12} sm={6} md={3}>
                    <a href="/">
                      <div>
                        <div style={{ position: 'relative' }}>
                          <img
                            src="https://static.wixstatic.com/media/94e66f_22b4e27ff3a0452a8207d9fbb1a93bbd~mv2_d_4272_2848_s_4_2.jpeg/v1/fill/w_454,h_450,al_c,q_80,usm_0.66_1.00_0.01/94e66f_22b4e27ff3a0452a8207d9fbb1a93bbd~mv2_d_4272_2848_s_4_2.webp"
                            width="100%"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            style={styleBox}
                          />
                          <div style={styleText}>Your text</div>
                        </div>
                      </div>
                    </a>
                  </Grid>
                  <Grid item key={card} xs={12} sm={6} md={3}>
                    <a href="/">
                      <div>
                        <div style={{ position: 'relative' }}>
                          <img
                            src="https://static.wixstatic.com/media/94e66f_22b4e27ff3a0452a8207d9fbb1a93bbd~mv2_d_4272_2848_s_4_2.jpeg/v1/fill/w_454,h_450,al_c,q_80,usm_0.66_1.00_0.01/94e66f_22b4e27ff3a0452a8207d9fbb1a93bbd~mv2_d_4272_2848_s_4_2.webp"
                            width="100%"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            style={styleBox}
                          />
                          <div style={styleText}>Your text</div>
                        </div>
                      </div>
                    </a>
                  </Grid>
                  <Grid item key={card} xs={12} sm={6} md={3}>
                    <a href="/">
                      <div>
                        <div style={{ position: 'relative' }}>
                          <img
                            src="https://static.wixstatic.com/media/94e66f_22b4e27ff3a0452a8207d9fbb1a93bbd~mv2_d_4272_2848_s_4_2.jpeg/v1/fill/w_454,h_450,al_c,q_80,usm_0.66_1.00_0.01/94e66f_22b4e27ff3a0452a8207d9fbb1a93bbd~mv2_d_4272_2848_s_4_2.webp"
                            width="100%"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            style={styleBox}
                          />
                          <div style={styleText}>Your text</div>
                        </div>
                      </div>
                    </a>
                  </Grid>
                  <Grid item key={card} xs={12} sm={6} md={3}>
                    <a href="/">
                      <div>
                        <div style={{ position: 'relative' }}>
                          <img
                            src="https://static.wixstatic.com/media/94e66f_22b4e27ff3a0452a8207d9fbb1a93bbd~mv2_d_4272_2848_s_4_2.jpeg/v1/fill/w_454,h_450,al_c,q_80,usm_0.66_1.00_0.01/94e66f_22b4e27ff3a0452a8207d9fbb1a93bbd~mv2_d_4272_2848_s_4_2.webp"
                            width="100%"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            style={styleBox}
                          />
                          <div style={styleText}>Your text</div>
                        </div>
                      </div>
                    </a>
                  </Grid>
                </>
              ))}
            </Grid>
          </Container>
        </Box>
      </main>
    </ThemeProvider>
  );
}
