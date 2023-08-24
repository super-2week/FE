import React, { useEffect, useState } from "react";
import Header from "./Header";
import Navi from "./Navi";
import CategoryBar from "../CategoryBar";
import { useLocation } from "react-router-dom";

const HeaderWrap = () => {
  const location = useLocation();
  // console.log(location.pathname.includes("/list"));

  const [nowLocation, setNowLocation] = useState<boolean>(true);
  console.log("nowLocation :", nowLocation);

  useEffect(() => {
    if (
      location.pathname === "/" ||
      location.pathname.includes("/list") ||
      location.pathname.includes("/product")
    ) {
      setNowLocation(false);
    } else {
      setNowLocation(true);
    }
  }, [location.pathname]);
  return (
    <>
      <Header />
      {!nowLocation ? (
        <>
          <Navi />
          <CategoryBar />
        </>
      ) : null}
    </>
  );
};

export default HeaderWrap;
