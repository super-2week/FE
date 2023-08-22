import React from "react";
import * as S from "./main.style";

const TopFilter = () => {
  return (
    <S.TopFilter>
      <h2>강아지</h2>
      <ul className="categoriFilterList">
        <li>사료</li>
        <li>간식</li>
        <li>하우스</li>
        <li>미용용품</li>
      </ul>
    </S.TopFilter>
  );
};

export default TopFilter;
