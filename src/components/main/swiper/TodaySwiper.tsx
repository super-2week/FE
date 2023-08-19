import React, { useEffect, useState } from "react";
import * as S from "./swiper.style";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { GetTodayData } from "../../../apis/main/todayItem.api";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { TodayProduct } from "../type";
import TodayItem from "./TodayItem";

const TodaySwiper: React.FC = () => {
  const animalCategory = useSelector(
    (state: RootState) => state.animalCategory.category
  );

  const [todayData, settTodayData] = useState<TodayProduct[]>([]);
  // console.log("todayData :", todayData);

  const getTodayData = () => {
    return todayData.map((item, index) => (
      <SwiperSlide key={index}>{<TodayItem item={item} />}</SwiperSlide>
    ));
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await GetTodayData(animalCategory);
        settTodayData(res);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [animalCategory]);

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
