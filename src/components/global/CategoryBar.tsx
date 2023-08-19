import React from "react";
import * as S from "./global.style";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import CategoryItem from "./CategoryItem";

const CategoryBar: React.FC = () => {
  const animalCategory = useSelector(
    (state: RootState) => state.animalCategory.category
  );

  const productCategories = useSelector(
    (state: RootState) => state.animalCategories.productes
  );

  const mapFilterNaviData = () => {
    const filteredArray = productCategories.filter(
      (el) => animalCategory === el.id
    );
    return filteredArray.map((productCategory, index) => (
      <CategoryItem key={index} productCategory={productCategory} />
    ));
  };

  return <S.CategoryBar>{mapFilterNaviData()}</S.CategoryBar>;
};

export default CategoryBar;
