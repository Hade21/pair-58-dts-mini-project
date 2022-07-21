import React from "react";
import {
  One,
  Two,
  Three,
  Four,
  Five,
  Six,
  Seven,
  Eight,
  Nine,
  Ten,
} from "../../../assets";
import { TopTenCard } from "../../molecule";

//swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

const TopTenList = ({ data, subtitle }) => {
  const ranks = [One, Two, Three, Four, Five, Six, Seven, Eight, Nine, Ten];

  return (
    <>
      <h3 className="font-Inter font-medium text-putih text-left text-s2 mb-2">
        {subtitle}
      </h3>
      <div className="wrapper-list flex gap-5">
        <Swiper
          slidesPerView={4.5}
          spaceBetween={20}
          navigation={true}
          modules={[Navigation]}
        >
          {data.map((item, i) => {
            return (
              <SwiperSlide>
                <TopTenCard
                  rank={ranks[i]}
                  image={item.image}
                  title={item.title}
                  key={item.id}
                  id={item.id}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
};

export default TopTenList;
