import React from "react";
import { CardMovieCarousel } from "../../molecule";

//swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";

const Carousel = ({ data }) => {
  return (
    <>
      <div className="wrapper-carousel">
        <Swiper
          slidesPerView={5.2}
          centeredSlides={true}
          spaceBetween={20}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: true,
          }}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
        >
          {data.map((item) => {
            return (
              <SwiperSlide>
                <CardMovieCarousel data={item} key={item.id} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
};

export default Carousel;
