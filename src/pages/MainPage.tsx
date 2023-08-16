import React from "react";
import Header from "../components/global/Header";
import Navi from "../components/global/Navi";
import * as S from "../components/main/main.style";
import TopItem from "../components/main/TopItem";
import TopFilter from "../components/main/TopFilter";

const MainPage = () => {
  return (
    <>
      <Header />
      <Navi />
      <S.MainLayout>
        <TopFilter />
        <TopItem />
      </S.MainLayout>
    </>
  );
};

export default MainPage;
