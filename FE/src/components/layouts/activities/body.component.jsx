import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const cards = [1, 2];
const theme = createTheme();

export default function BodyActivities() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        <Container sx={{ py: 0 }} maxWidth="xl" disableGutters>
          {/* End hero unit */}
          {cards.map((card) => (
            <Grid container spacing={4}>
              <Grid
                item
                xs={12}
                sm={6}
                md={3}
                sx={{ display: 'flex', flexDirection: 'row' }}
              >
                <img
                  src="https://static.wixstatic.com/media/94e66f_b84645289285487faade733d1569f4df~mv2_d_4288_2848_s_4_2.jpeg/v1/fill/w_345,h_615,al_t,q_80,usm_0.66_1.00_0.01/94e66f_b84645289285487faade733d1569f4df~mv2_d_4288_2848_s_4_2.webp"
                  alt="img"
                  width="100%"
                ></img>
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                md={3}
                sx={{ display: 'flex', flexDirection: 'row' }}
              >
                <Box>
                  <Typography variant="h3" gutterBottom>
                    By Train
                  </Typography>
                  <Typography variant="body1">
                    I'm a paragraph. Click here to add your own text and edit
                    me. It’s easy. Just click “Edit Text” or double click me to
                    add your own content and make changes to the font.
                  </Typography>
                </Box>
              </Grid>

              <Grid
                item
                xs={12}
                sm={6}
                md={3}
                sx={{ display: 'flex', flexDirection: 'row' }}
              >
                <Box>
                  <Typography variant="h3" gutterBottom>
                    By Train
                  </Typography>
                  <Typography variant="body1">
                    I'm a paragraph. Click here to add your own text and edit
                    me. It’s easy. Just click “Edit Text” or double click me to
                    add your own content and make changes to the font.
                  </Typography>
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                md={3}
                sx={{ display: 'flex', flexDirection: 'row' }}
              >
                <img
                  src="https://static.wixstatic.com/media/94e66f_b84645289285487faade733d1569f4df~mv2_d_4288_2848_s_4_2.jpeg/v1/fill/w_345,h_615,al_t,q_80,usm_0.66_1.00_0.01/94e66f_b84645289285487faade733d1569f4df~mv2_d_4288_2848_s_4_2.webp"
                  alt="img"
                  width="100%"
                ></img>
              </Grid>
            </Grid>
          ))}
        </Container>
      </main>
    </ThemeProvider>
  );
}
