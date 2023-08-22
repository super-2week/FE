import React, { FormEvent, useEffect, useRef, useState } from "react";
import * as S from "../global.style";
import { AiOutlineClose } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { setModalOpen } from "../../../store/slice/modalSlice";
import { RootState } from "../../../store/store";
import { GetSearchData } from "../../../apis/main/search.api";
import {
  setFromSearch,
  setSearchWord,
} from "../../../store/slice/parameterSilce";
import { useNavigate } from "react-router-dom";
import { setDataList } from "../../../store/slice/listSlice";

const Modal: React.FC = () => {
  // 연관검색어
  const data: string[] = [
    "아메리카노",
    "사랑해",
    "라떼는 말이야",
    "아빠",
    "엄마",
    "아재 개그",
    "istp",
    "알고리즘",
    "article",
    "배그 망겜",
    "롤은 질병게임",
    "병원",
  ];

  const navigate = useNavigate();

  const [searchValue, setSearchValue] = useState<string>("");

  const inputRef = useRef<HTMLInputElement | null>(null);

  const dispatch = useDispatch();

  const onChangeSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const filterRelatedSearch = () => {
    if (searchValue === "") {
      return;
    }
    const filterData = data.filter((el) => el.includes(searchValue));
    return filterData.map((item, index) => <li key={index}>{item}</li>);
  };

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

  const fetchData = async () => {
    try {
      const res = await GetSearchData(
        itemParameter.animalCategory,
        itemParameter.productCategory,
        itemParameter.sortBy,
        searchValue,
        itemParameter.pageNumber
      );
      dispatch(
        setDataList({
          products: res[0].products,
          totalLength: res[0].totalLength,
        })
      );
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmitHandler = (e: FormEvent) => {
    e.preventDefault();
    fetchData();
    dispatch(setSearchWord(searchValue));

    const searchUrl = `/list/product/${itemParameter.animalCategory}/${itemParameter.productCategory}/${itemParameter.sortBy}?searchWord=${itemParameter.searchWord}&page=${itemParameter.pageNumber}`;

    dispatch(setFromSearch(true));
    if (itemParameter.fromSearch) {
      dispatch(setModalOpen(false));
      navigate(searchUrl);
    }
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [inputRef]);

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
