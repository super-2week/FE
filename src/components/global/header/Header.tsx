import * as S from "../global.style";
import { BiUser, BiCart, BiSearch } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import Modal from "../modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { setModalOpen } from "../../../store/slice/modalSlice";
import logoImg from "../../../asset/logo.svg";
import { setSearchWord } from "../../../store/slice/parameterSilce";

const Header = () => {
  const navigate = useNavigate();
  // const [openModal, setOpenModal] = useState<boolean>(false);

  const modalOpen = useSelector((state: RootState) => state.modalState.open);

  const dispatch = useDispatch();

  const searchWord = useSelector(
    (state: RootState) => state.parameter.searchWord
  );
  // console.log(searchWord);

  const openSearchModal = () => {
    dispatch(setModalOpen(true));
    if (searchWord !== "") {
      dispatch(setSearchWord(searchWord));
    }
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
