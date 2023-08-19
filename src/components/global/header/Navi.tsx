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
import Icon from "./NaviItem";
import NaviItem from "./NaviItem";

const Navi: React.FC = () => {
  const dispatch = useDispatch();
  const animalCategories = useSelector(
    (state: RootState) => state.animalCategories.categories
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
        // 첫 번째 카테고리를 활성화
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

  return <S.NaviWrap>{getNaviItem()}</S.NaviWrap>;
};

export default Navi;
