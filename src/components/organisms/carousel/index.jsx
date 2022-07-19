import React from "react";
import { CardMovieCarousel } from "../../molecule";

//swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

const Carousel = () => {
  return (
    <>
      <div className="wrapper-carousel">
        <Swiper
          slidesPerView={1.1}
          centeredSlides={true}
          spaceBetween={20}
          loop={true}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Pagination, Navigation]}
        >
          <SwiperSlide>
            <CardMovieCarousel />
          </SwiperSlide>
          <SwiperSlide>
            <CardMovieCarousel />
          </SwiperSlide>
          <SwiperSlide>
            <CardMovieCarousel />
          </SwiperSlide>
          <SwiperSlide>
            <CardMovieCarousel />
          </SwiperSlide>
          <SwiperSlide>
            <CardMovieCarousel />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Carousel;
