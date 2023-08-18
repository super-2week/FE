import React from "react";
import * as S from "./global.style";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import CategoryItem from "./CategoryItem";

const CategoryBar: React.FC = () => {
  const nowAnimalCategory = useSelector(
    (state: RootState) => state.animalCategory.category
  );

  const productCategory = useSelector(
    (state: RootState) => state.animalCategories.productes
  );

  const nowCategory = useSelector(
    (state: RootState) => state.productCategory.category
  );

  console.log(nowCategory);

  const mapFilterNaviData = () => {
    const filteredArray = productCategory.filter(
      (el) => nowAnimalCategory === el.id
    );
    return filteredArray.map((productCategory, index) => (
      <CategoryItem key={index} productCategory={productCategory} />
    ));
  };

  return <S.CategoryBar>{mapFilterNaviData()}</S.CategoryBar>;
};

export default CategoryBar;
