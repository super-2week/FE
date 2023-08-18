import React from "react";
import * as S from "../components/main/main.style";
import TopItem from "../components/main/TopItem";
import TopFilter from "../components/main/TopFilter";
import BannerSwiper from "../components/main/swiper/BannerSwiper";
import TodaySwiper from "../components/main/swiper/TodaySwiper";
// import { HeaderWrap } from "../components/global/global.style";

const MainPage = () => {
  return (
    <>
      {/* <HeaderWrap /> */}
      <BannerSwiper />
      <S.MainLayout>
        <TopFilter />
        <TopItem />
        <TodaySwiper />
      </S.MainLayout>
    </>
  );
};

export default MainPage;
