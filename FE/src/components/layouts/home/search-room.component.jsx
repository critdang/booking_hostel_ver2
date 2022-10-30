import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Button, Grid } from '@mui/material';
import * as React from 'react';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import moment from 'moment';
const theme = createTheme();

export default function SearchRoom() {
  const [value, setValue] = React.useState(null);
  const [people, setPeople] = React.useState('1 Adult');
  const [room, setRoom] = React.useState('1 Room');

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="md">
            <Grid
              container
              spacing={4}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Grid
                xs={12}
                sm={12}
                md={4}
                display="flex"
                justifyContent="spacebetween"
                alignItems="center"
              >
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    label="From"
                    value={value}
                    onChange={(newValue) => {
                      setValue(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    label="To"
                    value={value}
                    onChange={(newValue) => {
                      setValue(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </Grid>
              <Grid
                xs={12}
                sm={6}
                md={4}
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                {/* <InputLabel id="demo-simple-select-autowidth-label">
                    Age
                  </InputLabel> */}
                <Select
                  value={room}
                  defaultValue={room}
                  onChange={(event) => setRoom(event.target.value)}
                >
                  <MenuItem value={'1 Room'}>1 Room</MenuItem>
                  <MenuItem value={'2 Room'}>2 Room</MenuItem>
                  <MenuItem value={'3 Room'}>3 Room</MenuItem>
                  <MenuItem value={'1 Adult 2 Child'}>2 Adult 1 Child</MenuItem>
                </Select>
                <Select
                  value={people}
                  defaultValue={people}
                  onChange={(event) => setPeople(event.target.value)}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={'1 Adult'}>1 Adult</MenuItem>
                  <MenuItem value={'2 Adult'}>2 Adult</MenuItem>
                  <MenuItem value={'1 Adult 1 Child'}>1 Adult 1 Child</MenuItem>
                  <MenuItem value={'1 Adult 2 Child'}>2 Adult 1 Child</MenuItem>
                </Select>
              </Grid>

              <Grid
                xs={12}
                sm={12}
                md={4}
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Button variant="contained" style={{ height: '35px' }}>
                  Search
                </Button>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </main>
    </ThemeProvider>
  );
}
