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
        setActiveState(res[0]?.id); // 첫 번째 카테고리를 활성화 상태로 초기화
        dispatch(setProductes(res));
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [dispatch]);

  const getNaviItem = () => {
    return animalCategories.map((naviItem) => (
      <li
        key={naviItem.id}
        id={naviItem.id}
        className={activeState === naviItem.id ? "active" : ""}
        onClick={(e) => {
          onClickNavi(naviItem.id, e);
        }}
      >
        <S.Icon categori={activeState} />
        {naviItem.label}
      </li>
    ));
  };

  return <S.NaviWrap>{getNaviItem()}</S.NaviWrap>;
};

export default Navi;
