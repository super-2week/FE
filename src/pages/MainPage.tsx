
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

import React from "react";
import * as S from "../components/main/main.style";
import TopItem from "../components/main/TopItem";
import BannerSwiper from "../components/main/swiper/BannerSwiper";
import TodaySwiper from "../components/main/swiper/TodaySwiper";


const MainPage = () => {
  // useSelector에서 RootState를 사용하여 스토어의 상태를 추출합니다.
  const user = useSelector((state: RootState) => state.loginuser);
  const signupuser = useSelector((state: RootState) => state.signupuser);

  const { username, profileImage } = user;
  const { email, detailAddress } = signupuser;

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
