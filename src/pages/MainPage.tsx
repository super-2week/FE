import React from "react";
import * as S from "../components/main/main.style";
import TopItem from "../components/main/TopItem";
import BannerSwiper from "../components/main/swiper/BannerSwiper";
import TodaySwiper from "../components/main/swiper/TodaySwiper";

const MainPage = () => {
  return (
    <>
      <BannerSwiper />
      <S.MainLayout>
        <TopItem />
        <TodaySwiper />
      </S.MainLayout>
    </>
  );
};

export default MainPage;
