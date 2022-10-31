import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { IconButton, List, ListItem, Modal } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper';
import { useCart } from '../../../context/cart/cart.provider';

const imageSources = [
  'https://media-cdn.tripadvisor.com/media/photo-s/17/61/79/7f/pub-area.jpg',
  'https://media-cdn.tripadvisor.com/media/photo-m/1280/15/06/b9/7c/overview.jpg',
  'https://media-cdn.tripadvisor.com/media/photo-m/1280/15/06/3b/38/group-table.jpg',
  'https://media-cdn.tripadvisor.com/media/photo-m/1280/17/61/79/25/for-domestic-and-foreign.jpg',
];
const cards = [1, 2, 3, 4, 5, 6];

const theme = createTheme();

const styleModal = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1200,
  bgcolor: 'white',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function RoomDescription(data) {
  return data.map((des) => {
    <Typography variant="body2" color="text.secondary">
      {des}
    </Typography>;
  });
}
const raw = `Top premium floors, exclusive Executive Lounge access, ocean and Han River views \n Located through 25th - 27th floor, this executive room offers spectacular ocean and river views.\n Comfortably appointed with the Vietnamese-inspired décor, the guest room features a king-sized bed.`;
const descriptions = raw.split('\n');

export default function RoomBody() {
  // [START - useContext]
  const { dispatch } = useCart();
  // [END - useContext]

  const [openModal, setOpenModal] = React.useState(false);
  const handleCloseModal = () => setOpenModal(false);

  const handleOpenModal = (id) => {
    setOpenModal(true);
  };
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const onClick = (type) => () => dispatch({ type: type });

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
          {/* START - HEADER */}
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Rooms and suites
            </Typography>
          </Container>
          {/* END - HEADER */}
        </Box>
        <Container sx={{ py: 8 }} maxWidth="lg">
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
                centered
              >
                <Tab label="Doom" value="1" />
                <Tab label="Master" value="2" />
                <Tab label="Duplex" value="3" />
              </TabList>
            </Box>
            <TabPanel value="1" sx={{ padding: '0', marginTop: '20px' }}>
              {/* START - CARD ROOM  unit */}
              <Grid container spacing={4}>
                {cards.map((card) => (
                  <Grid item key={card} xs={12} sm={6} md={4}>
                    <Card
                      sx={{
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                      }}
                    >
                      <CardMedia
                        component="img"
                        image="https://source.unsplash.com/random"
                        alt="random"
                      />
                      <CardContent sx={{ flexGrow: 1 }}>
                        <Typography
                          gutterBottom
                          variant="h6"
                          component="h2"
                          textAlign="center"
                        >
                          KING GUEST ROOM RIVER VIEW
                        </Typography>
                      </CardContent>
                      <CardActions
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <Button
                          variant="contained"
                          size="small"
                          sx={{ width: 200 }}
                          onClick={onClick('increase')}
                        >
                          Book
                        </Button>
                      </CardActions>

                      <CardActions
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <Button
                          variant="outlined"
                          size="small"
                          sx={{ width: 200 }}
                          onClick={() => handleOpenModal()}
                        >
                          View
                        </Button>

                        {/* START - MODAL */}

                        <Modal
                          open={openModal}
                          onClose={handleCloseModal}
                          aria-labelledby="modal-modal-title"
                          aria-describedby="modal-modal-description"
                          BackdropProps={{
                            style: { backgroundColor: 'rgba(0,0,0,0.1)' },
                          }}
                        >
                          <Box sx={styleModal}>
                            <Grid container>
                              <Grid item xs={12}>
                                <IconButton
                                  aria-label="close"
                                  onClick={handleCloseModal}
                                  sx={{
                                    position: 'absolute',
                                    right: 8,
                                    top: 8,
                                    color: (theme) => theme.palette.grey[500],
                                  }}
                                >
                                  <CloseIcon />
                                </IconButton>
                              </Grid>
                              <Grid item xs={7} align="center">
                                <Typography
                                  variant="h6"
                                  sx={{
                                    backgroundColor: '#f3f3f3',
                                    color: 'black',
                                  }}
                                >
                                  KING GUEST ROOM OCEAN VIEW
                                </Typography>
                                <div className="swiper-container">
                                  <Swiper
                                    cssMode={true}
                                    autoplay={{
                                      delay: 3000,
                                      disableOnInteraction: false,
                                    }}
                                    navigation={true}
                                    pagination={true}
                                    mousewheel={true}
                                    keyboard={true}
                                    modules={[
                                      Navigation,
                                      Pagination,
                                      Mousewheel,
                                      Keyboard,
                                      Autoplay,
                                    ]}
                                    spaceBetween={0}
                                    slidesPerView={1}
                                    className="mySwiper"
                                    breakpoints={{
                                      1024: {
                                        slidesPerView: 1,
                                      },
                                      768: {
                                        slidesPerView: 1,
                                      },
                                    }}
                                  >
                                    {imageSources.map((imgSrc) => (
                                      <SwiperSlide>
                                        <div key={imgSrc}>
                                          <img
                                            src={imgSrc}
                                            alt="img"
                                            style={{
                                              width: '100%',
                                            }}
                                            // sizes="(max-width: 300px) 300px, (max-width: 600px) 600px, (max-width: 900px) 900px, (max-width: 1200px) 1200px"
                                          />
                                        </div>
                                      </SwiperSlide>
                                    ))}
                                  </Swiper>
                                </div>
                              </Grid>
                              <Grid
                                item
                                xs={5}
                                align="left"
                                sx={{ borderLeft: 0.5 }}
                              >
                                <Container>
                                  <Typography>
                                    <strong>Description:</strong>{' '}
                                  </Typography>
                                  {/* <Typography>
                                    Han River view, 43-inch HDTV, chaise lounge,
                                    bathtub and shower Located through 5th -
                                    12th floor, the guest rooms offer beautiful
                                    views of Han River. Comfortably appointed
                                    with the Vietnamese-inspired décor, the
                                    guest room features a king-sized bed. Modern
                                    comforts include a 43-inch HDTV, a chaise
                                    lounge, mini-bar, WiFi access (fees apply),
                                    and a digital alarm clock. Elegantly divided
                                    from the bedroom, the bathroom features
                                    spacious and creative designs including a
                                    rain shower as well a free-standing bathtub.
                                    Sleeps 2. An extra bed for a third guest may
                                    be available for a fee and upon request.
                                    Check Rates
                                  </Typography> */}
                                  {
                                    descriptions &&
                                      descriptions.map((des) => {
                                        <h1>{des}</h1>;
                                      })
                                    // <h1 variant="body2" color="text.secondary">
                                    //   {des}
                                    // </h1>;
                                  }
                                  <Typography>
                                    <strong>Room Highlights</strong>{' '}
                                  </Typography>
                                  <List
                                    sx={{
                                      listStyleType: 'disc',
                                      pl: 2,
                                      '& .MuiListItem-root': {
                                        display: 'list-item',
                                      },
                                    }}
                                    // sx={{
                                    //   padding: 0,
                                    //   listStyleType: 'disc',
                                    //   display: 'list-item',
                                    // }}
                                  >
                                    <ListItem sx={{ padding: 0 }}>
                                      Sleeps 3
                                    </ListItem>
                                    <ListItem sx={{ padding: 0 }}>
                                      Separate bathtub
                                    </ListItem>
                                    <ListItem sx={{ padding: 0 }}>
                                      Hairdryer
                                    </ListItem>
                                  </List>
                                </Container>
                                {/* {detailData && (
                                  <Container>
                                    <Typography
                                      variant="h5"
                                      sx={{ color: '#009688' }}
                                    >
                                      Detail product
                                    </Typography>
                                    <Typography>
                                      <strong>Name:</strong>{' '}
                                      {detailData.productDetail.name}
                                    </Typography>
                                    <Typography>
                                      <strong>Price:</strong>{' '}
                                      {detailData.productDetail.price}
                                    </Typography>
                                    <Typography>
                                      <strong>Description:</strong>{' '}
                                      {detailData.productDetail.description}
                                    </Typography>
                                    <Typography>
                                      <strong>Remaining amount:</strong>{' '}
                                      {detailData.productDetail.amount}
                                    </Typography>
                                    <Button
                                      variant="contained"
                                      onClick={addToCart}
                                    >
                                      Add
                                    </Button>
                                    <Button
                                      variant="outlined"
                                      color="error"
                                      onClick={handleCloseModal}
                                    >
                                      Close
                                    </Button>
                                  </Container>
                                )} */}
                              </Grid>
                            </Grid>
                          </Box>
                        </Modal>

                        {/* END - MODAL */}
                      </CardActions>
                    </Card>
                  </Grid>
                ))}
              </Grid>
              {/* END - CARD ROOM  unit*/}
            </TabPanel>
            <TabPanel value="2" sx={{ padding: '0', marginTop: '20px' }}>
              {/* START - CARD ROOM  unit */}
              <Grid container spacing={4}>
                {cards.map((card) => (
                  <Grid item key={card} xs={12} sm={6} md={4}>
                    <Card
                      sx={{
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                      }}
                    >
                      <CardMedia
                        component="img"
                        image="https://source.unsplash.com/random"
                        alt="random"
                      />
                      <CardContent sx={{ flexGrow: 1 }}>
                        <Typography
                          gutterBottom
                          variant="h6"
                          component="h2"
                          textAlign="center"
                        >
                          KING GUEST ROOM RIVER VIEW
                        </Typography>
                      </CardContent>
                      <CardActions
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <Button
                          variant="contained"
                          size="small"
                          sx={{ width: 200 }}
                          onClick={onClick('increase')}
                        >
                          Book
                        </Button>
                      </CardActions>

                      <CardActions
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <Button
                          variant="outlined"
                          size="small"
                          sx={{ width: 200 }}
                        >
                          View
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                ))}
              </Grid>
              {/* END - CARD ROOM  unit*/}
            </TabPanel>
            <TabPanel value="3" sx={{ padding: '0', marginTop: '20px' }}>
              {/* START - CARD ROOM  unit */}
              <Grid container spacing={4}>
                {cards.map((card) => (
                  <Grid item key={card} xs={12} sm={6} md={4}>
                    <Card
                      sx={{
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                      }}
                    >
                      <CardMedia
                        component="img"
                        image="https://source.unsplash.com/random"
                        alt="random"
                      />
                      <CardContent sx={{ flexGrow: 1 }}>
                        <Typography
                          gutterBottom
                          variant="h6"
                          component="h2"
                          textAlign="center"
                        >
                          KING GUEST ROOM RIVER VIEW
                        </Typography>
                      </CardContent>
                      <CardActions
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <Button
                          variant="contained"
                          size="small"
                          sx={{ width: 200 }}
                          onClick={onClick('increase')}
                        >
                          Book
                        </Button>
                      </CardActions>

                      <CardActions
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <Button
                          variant="outlined"
                          size="small"
                          sx={{ width: 200 }}
                        >
                          View
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                ))}
              </Grid>
              {/* END - CARD ROOM  unit*/}
            </TabPanel>
          </TabContext>
        </Container>
      </main>
    </ThemeProvider>
  );
}
