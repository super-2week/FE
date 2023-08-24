import React, { FormEvent, useEffect, useRef, useState } from "react";
import * as S from "../global.style";
import { AiOutlineClose } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { setModalOpen } from "../../../store/slice/modalSlice";
import { RootState } from "../../../store/store";
import {
  GetRelatedSearchData,
  GetTotalSearchData,
} from "../../../apis/list/search.api";
import {
  setFromSearch,
  setSearchWord,
} from "../../../store/slice/parameterSilce";
import { useNavigate } from "react-router-dom";
import { setDataList } from "../../../store/slice/listSlice";

const Modal: React.FC = () => {
  const navigate = useNavigate();

  const [searchValue, setSearchValue] = useState<string>("");

  const [relatedData, setRelatedData] = useState<[][]>([]);
  // console.log(relatedData);
  // console.log(relatedData);

  const inputRef = useRef<HTMLInputElement | null>(null);

  const dispatch = useDispatch();

  // const [isLoading, setIsLoading] = useState<boolean>(true);

  // 검색창 상태관리
  const onChangeSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  // 연관검색어 클릭
  const clickRelatedData = (e: React.MouseEvent) => {
    setSearchValue(e.currentTarget.innerHTML);
    dispatch(setSearchWord(e.currentTarget.innerHTML));
    dispatch(setFromSearch(true));

    if (itemParameter.fromSearch) {
      dispatch(setModalOpen(false));
      fetchData(e.currentTarget.innerHTML, itemParameter.sortBy);
      navigate(`/list/product/total/${e.currentTarget.innerHTML}`);
    }
  };

  const filterRelatedSearch = () => {
    if (searchValue === "") {
      return;
    }
    // 이중 배열을 배열 하나로 바꾸기
    if (relatedData.length !== 0) {
      return relatedData.flat().map((item, index) => (
        <li key={index} onClick={clickRelatedData}>
          {item}
        </li>
      ));
    } else if (relatedData.length === 0) {
      return <li>해당 검색어와 연관된 상품이 없습니다.</li>;
    } else {
      return;
    }
  };
  // filterRelatedSearch();
  // console.log(searchValue);
  const onClickCloseModal = () => {
    dispatch(setModalOpen(false));
    if (itemParameter.searchWord !== searchValue) {
      dispatch(setFromSearch(true));
    } else {
      dispatch(setFromSearch(false));
    }
  };

  const itemParameter = useSelector((state: RootState) => state.parameter);

  useEffect(() => {
    dispatch(setFromSearch(true));
  }, [dispatch]);

  // input 통신
  const fetchData = async (value: string, sortBy: string) => {
    try {
      // console.log("매개변수는 이게 들어가요:", value);
      const res = await GetTotalSearchData(value, sortBy);
      dispatch(
        setDataList({
          products: res[0].products,
          totalLength: res[0].totalLength,
        })
      );
      // console.log("검색했을 때 :", res[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmitHandler = (e: FormEvent) => {
    e.preventDefault();
    dispatch(setSearchWord(searchValue));
    // console.log("submit:", searchValue);
    fetchData(searchValue, itemParameter.sortBy);

    dispatch(setFromSearch(true));
    if (itemParameter.fromSearch) {
      dispatch(setModalOpen(false));
      navigate(`/list/product/total/${searchValue}`);
    }
  };

  // input 들어오면 자동으로 포커스
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [inputRef]);

  const fetchRelatedData = async () => {
    try {
      const res = await GetRelatedSearchData(searchValue);
      setRelatedData(res);
      // setIsLoading(false);
      // console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  // 연관 검색어 통신
  useEffect(() => {
    // console.log("서치밸류 갯구 :", searchValue.length);
    if (searchValue.length > 1) {
      fetchRelatedData();
    } else if (searchValue.length < 2) {
      setRelatedData([]);
    }
  }, [searchValue]);

  return (
    <S.Modal>
      <div className="modal-bg"></div>
      <div className="modal-container">
        <form className="input-box" onSubmit={onSubmitHandler}>
          <input
            type="text"
            className="search"
            onChange={onChangeSearchValue}
            value={searchValue}
            ref={inputRef}
          />
          <BiSearch className="search-i" />
        </form>
        <ul>{filterRelatedSearch()}</ul>
      </div>
      <AiOutlineClose className="close-i" onClick={onClickCloseModal} />
    </S.Modal>
  );
};

export default Modal;
