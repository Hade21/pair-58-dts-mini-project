import React from "react";

//swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { CardMovie } from "../../molecule";

const ListMovies = ({ subtitle, data }) => {
  return (
    <div>
      <h3 className="text-s2 font-medium font-Inter text-putih text-left mb-2">
        {subtitle}
      </h3>
      <Swiper
        slidesPerView={4.7}
        spaceBetween={20}
        navigation={true}
        modules={[Navigation]}
      >
        {data.map((item) => {
          return (
            <SwiperSlide>
              <CardMovie data={item} key={item.id} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default ListMovies;
