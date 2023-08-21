import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import BannerSection from "./BannerSection";

import * as S from "./swiper.style";
import { data } from "./swiper.data";

const BannerSwiper: React.FC = () => {
  const getBannerData = () => {
    return data.map((item) => (
      <SwiperSlide key={item.categori}>
        <BannerSection item={item} />
      </SwiperSlide>
    ));
  };

  return (
    <S.BannerSwiper>
      <Swiper
        loop={true}
        modules={[Navigation, Pagination, Autoplay]}
        // modules={[Autoplay]}
        slidesPerView={1}
        // navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
        }}
        className="banner-swiper"
      >
        {getBannerData()}
      </Swiper>
    </S.BannerSwiper>
  );
};

export default BannerSwiper;
