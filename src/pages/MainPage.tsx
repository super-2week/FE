import React from "react";
import Header from "../components/global/Header";
import Navi from "../components/global/Navi";
import * as S from "../components/main/main.style";
import TopItem from "../components/main/TopItem";
import TopFilter from "../components/main/TopFilter";
import TodayItem from "../components/main/TodayItem";
import Section from "../components/main/Section";

const MainPage = () => {
  return (
    <>
      <Header />
      <Navi />
      <Section />
      <S.MainLayout>
        <TopFilter />
        <TopItem />
        <TodayItem />
      </S.MainLayout>
    </>
  );
};

export default MainPage;
