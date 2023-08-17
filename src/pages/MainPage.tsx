import React from "react";
import Header from "../components/global/Header";
import Navi from "../components/global/Navi";
import * as S from "../components/main/main.style";
import TopItem from "../components/main/TopItem";
import TopFilter from "../components/main/TopFilter";
import TodayItem from "../components/main/swiper/TodayItem";
import BannerSwiper from "../components/main/swiper/BannerSwiper";
import TodaySwiper from "../components/main/swiper/TodaySwiper";

const MainPage = () => {
  return (
    <>
      <Header />
      <Navi />
      <BannerSwiper />
      <S.MainLayout>
        <TopFilter />
        <TopItem />
        <TodaySwiper />
        {/* <TodayItem /> */}
      </S.MainLayout>
    </>
  );
};

export default MainPage;
