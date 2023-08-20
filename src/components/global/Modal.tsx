import React, { FormEvent, useEffect, useRef, useState } from "react";
import * as S from "./global.style";
import { AiOutlineClose } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { setModalOpen } from "../../store/slice/modalSlice";
import { RootState } from "../../store/store";
import { GetSearchData } from "../../apis/main/search.api";

const Modal: React.FC = () => {
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
  };

  const animalCategory = useSelector(
    (state: RootState) => state.animalCategory.category
  );

  const productCategory = useSelector(
    (state: RootState) => state.productCategory.category
  );
  const sortBy = "price";
  const pageNumber = 1;

  const fetchData = async () => {
    try {
      const res = await GetSearchData(
        animalCategory,
        productCategory,
        sortBy,
        searchValue,
        pageNumber
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmitHandler = (e: FormEvent) => {
    e.preventDefault();
    // console.log(inputRef.current!.value);
    fetchData();
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
