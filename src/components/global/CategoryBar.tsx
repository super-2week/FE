import React from "react";
import * as S from "./global.style";
import { naviData } from "./category.data";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import CategoryItem from "./CategoryItem";

const CategoryBar: React.FC = () => {
  const animalCategory = useSelector(
    (state: RootState) => state.animalCategory.category
    // (state: RootState) => state.animalCategory.category
  );

  console.log(animalCategory);

  const mapFilterNaviData = (): JSX.Element[] => {
    const filteredData = naviData.filter((data) => data.id === animalCategory);
    return filteredData[0].productCategory.map((productCategory, el) => (
      <CategoryItem key={el} productCategory={productCategory} />
    ));
  };

  return <S.CategoryBar>{mapFilterNaviData()}</S.CategoryBar>;
};

export default CategoryBar;
