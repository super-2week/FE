import React, { useState, useEffect } from "react";
import * as S from "../global.style";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { GetAnimalCategory } from "../../../apis/header/animalCategory.api";
import {
  setAnimalCategories,
  setProductes,
} from "../../../store/slice/animalCategoriesSlice";
import {
  setAnimalCategory,
  setAnimalLabel,
} from "../../../store/slice/animalCategoryStateSlice";
import NaviItem from "./NaviItem";
import { useLocation, useNavigate } from "react-router-dom";
import {
  setFromSearch,
  setItemAnimalCategory,
  setSearchWord,
} from "../../../store/slice/parameterSilce";

const Navi: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const animalCategories = useSelector(
    (state: RootState) => state.animalCategories.categories
  );

  const animalCategory = useSelector(
    (state: RootState) => state.animalCategory.category
  );
  // console.log("동물 카테고리 :", animalCategory);
  const productCategory = useSelector(
    (state: RootState) => state.productCategory.category
  );

  const [activeState, setActiveState] = useState<string>("dog");

  const onClickNavi = (id: string, e: React.MouseEvent<HTMLElement>) => {
    console.log(id);
    setActiveState(id);
    dispatch(setAnimalCategory(id));
    dispatch(setItemAnimalCategory(id)); // itemSlice
    dispatch(setAnimalLabel(e.currentTarget.innerText));
    dispatch(setFromSearch(false));
    dispatch(setSearchWord(""));
  };
  // console.log(animalCategory, activeState);

  const [nowLocation, setNowLocation] = useState<boolean>(false);

  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes("list")) {
      setNowLocation(true);
    } else {
      setNowLocation(false);
    }
    const fetchData = async () => {
      try {
        const res = await GetAnimalCategory();
        dispatch(setAnimalCategories(res));
        // setActiveState(res[0]?.id);
        dispatch(setProductes(res));
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [dispatch, location]);

  const getNaviItem = () => {
    return animalCategories.map((naviItem) => (
      <NaviItem
        key={naviItem.id}
        naviItem={naviItem}
        activeState={activeState}
        onClickNavi={onClickNavi}
        category={animalCategory}
      />
    ));
  };

  const navigateList = () => {
    const newURL = `/list/product/${animalCategory}/${productCategory}/price`;
    navigate(newURL);
  };

  return (
    <S.NaviWrap>
      {getNaviItem()}
      {!nowLocation && (
        <li className="navi-list" onClick={navigateList}>
          상품보러가기
        </li>
      )}
    </S.NaviWrap>
  );
};

export default Navi;
