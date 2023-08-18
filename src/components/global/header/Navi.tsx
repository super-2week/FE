import React, { useState } from "react";
import * as S from "../global.style";
import { setAnimalCategory } from "../../../store/slice/animalCategorySlice";
import { useAppDispatch } from "../../../store/hook";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";

interface NaviItem {
  id: string;
  value: string;
}

const Navi: React.FC = () => {
  // const animalCategory = useSelector(
  //   (state: RootState) => state.animalCategory.category
  // );

  // console.log(animalCategory);

  const naviList: NaviItem[] = [
    { id: "전체보기", value: "전체" },
    { id: "강아지", value: "강아지" },
    { id: "고양이", value: "고양이" },
    { id: "소동물", value: "소동물" },
  ];

  const [activeState, setActiveState] = useState<string>("강아지");

  const dispatch = useAppDispatch();

  const onClickNavi = (id: string) => {
    setActiveState(id);
    // dispatch(setAnimalCategory(id));
  };

  const getNaviItem = () => {
    return naviList.map((naviItem) => (
      <li
        key={naviItem.id}
        id={naviItem.id}
        className={activeState === naviItem.id ? "active" : ""}
        onClick={() => onClickNavi(naviItem.id)}
      >
        <S.Icon categori={activeState} />
        {naviItem.value}
      </li>
    ));
  };

  return <S.NaviWrap>{getNaviItem()}</S.NaviWrap>;
};

export default Navi;
