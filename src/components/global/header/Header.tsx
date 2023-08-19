import React from "react";
import * as S from "../global.style";
import { BiUser, BiCart, BiSearch } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const openSearchModal = () => {
    console.log("눌림");
  };

  return (
    <S.HeaderWrap>
      <div className="layout">
        <div className="logo" onClick={() => navigate("/")}></div>
        <div className="menu">
          {/* <input className="menu-search" type="text" /> */}
          <BiSearch className="menu-search" onClick={openSearchModal} />
          <BiUser className="menu-user" onClick={() => navigate("/my")} />
          <BiCart className="menu-cart" onClick={() => navigate("/cart")} />
        </div>
      </div>
    </S.HeaderWrap>
  );
};

export default Header;
