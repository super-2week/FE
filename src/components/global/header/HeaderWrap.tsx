import React from "react";
import Header from "./Header";
import Navi from "./Navi";
import CategoryBar from "../CategoryBar";

const HeaderWrap = () => {
  return (
    <>
      <Header />
      <Navi />
      <CategoryBar />
    </>
  );
};

export default HeaderWrap;
