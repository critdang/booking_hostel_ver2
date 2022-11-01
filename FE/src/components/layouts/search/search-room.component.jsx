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
import { useSearchParams } from 'react-router-dom';

const theme = createTheme();
const initialState = {
  From: moment(new Date()).format('MM/DD/YYYY'),
  To: moment(new Date()).add(1, 'days').format('MM/DD/YYYY'),
  room: '1 Room',
  numberOfGuests: '1 Adult',
};

export default function SearchRoom() {
  let [searchParams, setSearchParams] = useSearchParams();
  const term = searchParams.get('term');
  const location = searchParams.get('location');
  console.log(
    '🚀 ~ file: search-room.component.jsx ~ line 30 ~ SearchRoom ~ searchParams',
    term
  );

  const [inputSearch, setInputSearch] = React.useState(initialState);
  const submitSearch = (e) => {
    setSearchParams(inputSearch);
  };
  return (
    <>
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
            <Container maxWidth="lg">
              <Grid container>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={7}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      label="From"
                      value={inputSearch.From}
                      onChange={(e) => {
                        setInputSearch({
                          ...inputSearch,
                          From: moment(e.$d).format('MM/DD/YYYY'),
                        });
                      }}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                  <Box sx={{ mx: 2 }}> to </Box>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      label="To"
                      value={inputSearch.To}
                      renderInput={(params) => <TextField {...params} />}
                      onChange={(e) => {
                        setInputSearch({
                          ...inputSearch,
                          To: moment(e.$d).format('MM/DD/YYYY'),
                        });
                      }}
                    />
                  </LocalizationProvider>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={3}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  {/* <InputLabel id="demo-simple-select-autowidth-label">
                    Age
                  </InputLabel> */}
                  <Select
                    value={inputSearch.room}
                    name="room"
                    onChange={(e) => {
                      setInputSearch({
                        ...inputSearch,
                        [e.target.name]: e.target.value,
                      });
                    }}
                    style={{ marginRight: '20px' }}
                  >
                    <MenuItem value={'1 Room'}>1 Room</MenuItem>
                    <MenuItem value={'2 Room'}>2 Room</MenuItem>
                    <MenuItem value={'3 Room'}>3 Room</MenuItem>
                  </Select>
                  <Select
                    value={inputSearch.numberOfGuests}
                    name="numberOfGuests"
                    onChange={(e) => {
                      setInputSearch({
                        ...inputSearch,
                        [e.target.name]: e.target.value,
                      });
                    }}
                    style={{ marginLeft: '20px' }}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={'1 Adult'}>1 Adult</MenuItem>
                    <MenuItem value={'2 Adult'}>2 Adult</MenuItem>
                    <MenuItem value={'1 Adult 1 Child'}>
                      1 Adult 1 Child
                    </MenuItem>
                    <MenuItem value={'1 Adult 2 Child'}>
                      2 Adult 1 Child
                    </MenuItem>
                  </Select>
                </Grid>

                <Grid
                  xs={12}
                  sm={12}
                  md={2}
                  item
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Button
                    variant="contained"
                    style={{ height: '35px' }}
                    onClick={submitSearch}
                  >
                    Search
                  </Button>
                </Grid>
              </Grid>
            </Container>
          </Box>
        </main>
      </ThemeProvider>
    </>
  );
}
