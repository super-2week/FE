import React from "react";
import * as S from "./globa.style";
import { BiUser, BiCart } from "react-icons/bi";

const Header = () => {
  return (
    <S.HeaderWrap>
      <div className="layout">
        <div className="logo"></div>
        <div className="menu">
          <input className="menu-search" type="text" />
          <BiUser className="menu-user" />
          <BiCart className="menu-cart" />
        </div>
      </div>
    </S.HeaderWrap>
  );
};

export default Header;
