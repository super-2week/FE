import React from "react";
import { useAppDispatch } from "../../store/hook";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { setProductCategory } from "../../store/slice/productCategoryStateSlice";

interface CategoryItemProps {
  productCategory: {
    id: string;
    label: string;
    value: string;
  };
}

const CategoryItem: React.FC<CategoryItemProps> = ({ productCategory }) => {
  const nowAnimalCategory = useSelector(
    (state: RootState) => state.animalCategory.category
  );
  // console.log(nowAnimalCategory);

  const dispatch = useAppDispatch();

  const choseProductClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    const label = e.currentTarget.id;
    // console.log(label);
    dispatch(setProductCategory(label));
  };

  return (
    <li
      key={productCategory.label}
      onClick={choseProductClick}
      id={productCategory.label}
    >
      <div className="icon"></div>
      <span>{productCategory.value}</span>
    </li>
  );
};

export default CategoryItem;
