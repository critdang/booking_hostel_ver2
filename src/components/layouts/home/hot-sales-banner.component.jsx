// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useRef, useState } from 'react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper';

// import './styles.css';
import Container from '@mui/material/Container';

const imageSources = [
  'https://media-cdn.tripadvisor.com/media/photo-s/17/61/79/7f/pub-area.jpg',
  'https://media-cdn.tripadvisor.com/media/photo-m/1280/15/06/b9/7c/overview.jpg',
  'https://media-cdn.tripadvisor.com/media/photo-m/1280/15/06/3b/38/group-table.jpg',
  'https://media-cdn.tripadvisor.com/media/photo-m/1280/17/61/79/25/for-domestic-and-foreign.jpg',
];
export default function HotSalesBanner() {
  return (
    <Container maxWidth={false} disableGutters>
      <>
        <div className="swiper-container">
          <Swiper
            cssMode={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            navigation={true}
            pagination={true}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            className="mySwiper"
            breakpoints={{
              1024: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
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
      </>
    </Container>
  );
}
