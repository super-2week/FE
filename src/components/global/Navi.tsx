import React, { useState } from "react";
import * as S from "./globa.style";

interface NaviItem {
  id: string;
  value: string;
}

const Navi: React.FC = () => {
  const naviList: NaviItem[] = [
    { id: "강아지", value: "강아지" },
    { id: "고양이", value: "고양이" },
    { id: "소동물", value: "소동물" },
    { id: "기타", value: "기타" },
  ];

  const [activeState, setActiveState] = useState<string>("강아지");

  // const []

  const onClickNavi = (id: string) => {
    setActiveState(id);
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
