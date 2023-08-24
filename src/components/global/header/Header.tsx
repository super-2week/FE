import * as S from "../global.style";
import { BiUser, BiCart, BiSearch } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import Modal from "../modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { setModalOpen } from "../../../store/slice/modalSlice";
import logoImg from "../../../asset/logo.svg";
import { setSearchWord } from "../../../store/slice/parameterSilce";
import { spawn } from "child_process";
import { useCallback, useEffect, useState } from "react";
import {
  setAccessToken,
  setRemoveAccessToken,
} from "../../../store/slice/accessTokenSlice";
import { set } from "date-fns";

const Header = () => {
  const navigate = useNavigate();
  // const [openModal, setOpenModal] = useState<boolean>(false);

  const modalOpen = useSelector((state: RootState) => state.modalState.open);

  const dispatch = useDispatch();

  const searchWord = useSelector(
    (state: RootState) => state.parameter.searchWord
  );

  // const testToken = useSelector((state:RootState))
  const [hasToken, setHasToken] = useState<boolean>(false);
  console.log("hasToken :", hasToken);

  const openSearchModal = () => {
    dispatch(setModalOpen(true));
    if (searchWord !== "") {
      dispatch(setSearchWord(searchWord));
    }
  };

  const token = useSelector(
    (state: RootState) => state.accessToken.accessToken
  );
  console.log("token :", token);

  const clickLogout = () => {
    localStorage.removeItem("accesstoken");
    dispatch(setRemoveAccessToken(null));
  };

  useEffect(() => {
    if (!token) {
      console.log("없음");
      dispatch(setAccessToken(localStorage.getItem("accesstoken")));
      setHasToken(false);
    } else {
      // dispatch(setRemoveAccessToken(null));
      setHasToken(true);
    }
  }, [token, dispatch]);

  return (
    <S.HeaderWrap>
      <div className="layout">
        <div className="logo" onClick={() => navigate("/")}>
          <img src={logoImg} alt="" />
        </div>
        <div className="menu">
          <BiSearch className="menu-search" onClick={openSearchModal} />
          {hasToken ? (
            <BiUser className="menu-user" onClick={() => navigate("/my")} />
          ) : (
            <span
              onClick={() => navigate("/login")}
              style={{ cursor: "pointer" }}
            >
              로그인
            </span>
          )}

          <BiCart className="menu-cart" onClick={() => navigate("/cart")} />
          {hasToken && (
            <span onClick={clickLogout} style={{ cursor: "pointer" }}>
              로그아웃
            </span>
          )}
        </div>
      </div>
      {modalOpen && <Modal />}
    </S.HeaderWrap>
  );
};

export default Header;
