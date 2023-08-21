import React from "react";
import * as S from "./swiper.style";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import TodayItem from "./TodayItem";
import { todayData } from "./swiper.data";

const TodaySwiper: React.FC = () => {
  const getTodayData = () => {
    return todayData.map((item) => (
      <SwiperSlide key={item.categori}>
        <TodayItem item={item} />
      </SwiperSlide>
    ));
  };

  return (
    <S.TodaySection>
      <h2>오늘의 추천</h2>
      <Swiper
        loop={true}
        modules={[Autoplay]}
        slidesPerView={1}
        autoplay={{
          delay: 5000,
        }}
        className="today-swiper"
      >
        {getTodayData()}
      </Swiper>
    </S.TodaySection>
  );
};

export default TodaySwiper;
