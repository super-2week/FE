import React, { useState } from "react";
import * as S from "../global.style";
import { BiUser, BiCart, BiSearch } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import Modal from "../modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { setModalOpen } from "../../../store/slice/modalSlice";
import logoImg from "../../../asset/logo.svg";

const Header = () => {
  const navigate = useNavigate();
  // const [openModal, setOpenModal] = useState<boolean>(false);

  const modalOpen = useSelector((state: RootState) => state.modalState.open);

  const dispatch = useDispatch();

  const openSearchModal = () => {
    dispatch(setModalOpen(true));
  };

  return (
    <S.HeaderWrap>
      <div className="layout">
        <div className="logo" onClick={() => navigate("/")}>
          <img src={logoImg} alt="" />
        </div>
        <div className="menu">
          <BiSearch className="menu-search" onClick={openSearchModal} />
          <BiUser className="menu-user" onClick={() => navigate("/my")} />
          <BiCart className="menu-cart" onClick={() => navigate("/cart")} />
        </div>
      </div>
      {modalOpen && <Modal />}
    </S.HeaderWrap>
  );
};

export default Header;
