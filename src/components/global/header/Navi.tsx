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
import { useNavigate } from "react-router-dom";

const Navi: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const animalCategories = useSelector(
    (state: RootState) => state.animalCategories.categories
  );

  const animalCategory = useSelector(
    (state: RootState) => state.animalCategory.category
  );
  const productCategory = useSelector(
    (state: RootState) => state.productCategory.category
  );

  const [activeState, setActiveState] = useState<string>("");

  const onClickNavi = (id: string, e: React.MouseEvent<HTMLElement>) => {
    setActiveState(id);
    dispatch(setAnimalCategory(id));
    dispatch(setAnimalLabel(e.currentTarget.innerText));
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await GetAnimalCategory();
        dispatch(setAnimalCategories(res));
        setActiveState(res[0]?.id);
        dispatch(setProductes(res));
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [dispatch]);

  const getNaviItem = () => {
    return animalCategories.map((naviItem) => (
      <NaviItem
        key={naviItem.id}
        naviItem={naviItem}
        activeState={activeState}
        onClickNavi={onClickNavi}
      />
    ));
  };

  const navigateList = () => {
    console.log("눌림");
    const newURL = `/list/product/${animalCategory}/${productCategory}/price`;
    navigate(newURL);
  };

  return (
    <S.NaviWrap>
      {getNaviItem()}
      <li className="navi-list" onClick={navigateList}>
        상품보러가기
      </li>
    </S.NaviWrap>
  );
};

export default Navi;
