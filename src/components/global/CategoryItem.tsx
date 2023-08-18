import React from "react";
import { useAppDispatch } from "../../store/hook";
import { setAnimalCategory } from "../../store/slice/animalCategorySlice";

interface CategoryItemProps {
  productCategory: {
    label: string;
    value: string;
  };
}

const CategoryItem: React.FC<CategoryItemProps> = ({ productCategory }) => {
  // console.log(productCategory);

  const dispatch = useAppDispatch();

  const choseProductClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    const label = e.currentTarget.id;
    console.log(label);
    // dispatch(setAnimalCategory(label));
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
