import React from "react";
import * as S from "./main.style";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const TopFilter = () => {
  const animalCategory = useSelector(
    (state: RootState) => state.animalCategory.category
  );
  console.log(animalCategory);

  /** 상품 카테고리 */
  const productCategory = useSelector(
    (state: RootState) => state.productCategory.category
  );
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
