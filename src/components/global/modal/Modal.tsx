import React, { FormEvent, useEffect, useRef, useState } from "react";
import * as S from "../global.style";
import { AiOutlineClose } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { setModalOpen } from "../../../store/slice/modalSlice";
import { RootState } from "../../../store/store";
import {
  GetRelatedSearchData,
  GetSearchData,
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

  const inputRef = useRef<HTMLInputElement | null>(null);

  const dispatch = useDispatch();

  const onChangeSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const clickRelatedData = (e: React.MouseEvent) => {
    // console.log(e.currentTarget.innerHTML);
    dispatch(setSearchWord(e.currentTarget.innerHTML));

    const searchUrl = `/list/product/${itemParameter.animalCategory}/${itemParameter.productCategory}/${itemParameter.sortBy}?searchWord=${itemParameter.searchWord}&page=${itemParameter.pageNumber}`;

    dispatch(setFromSearch(true));
    if (itemParameter.fromSearch) {
      dispatch(setModalOpen(false));
      navigate(searchUrl);
    }
    // dispatch(setModalOpen(false));
  };

  const filterRelatedSearch = () => {
    if (searchValue === "") {
      return;
    }

    // 이중 배열을 배열 하나로 바꾸기
    // console.log(relatedData);
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

  useEffect(() => {
    // console.log(searchValue.length);
    if (searchValue.length >= 2) {
      const fetchRelatedData = async () => {
        // console.log("연관검색어 컴포넌트에서 가져온다");
        try {
          const res = await GetRelatedSearchData(searchValue);
          // console.log(res);
          setRelatedData(res);
        } catch (error) {
          console.log(error);
        }
      };
      fetchRelatedData();
    }
    if (searchValue.length < 2) {
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
