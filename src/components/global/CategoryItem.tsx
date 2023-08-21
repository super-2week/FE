import React from "react";
import { useAppDispatch } from "../../store/hook";
import {
  setProductCategory,
  setProductlabel,
} from "../../store/slice/productCategoryStateSlice";
import food from "../../asset/food.png";
import snack from "../../asset/snack.png";
import clean from "../../asset/clean.png";
import tableware from "../../asset/tableware.png";
import house from "../../asset/house.png";
import cloth from "../../asset/cloth.png";
import equipment from "../../asset/equipment.png";
import {
  setFromSearch,
  setItemProductCategory,
  setSearchWord,
} from "../../store/slice/parameterSilce";

interface CategoryItemProps {
  productCategory: {
    id: string;
    label: string;
    value: string;
  };
}

const CategoryItem: React.FC<CategoryItemProps> = ({ productCategory }) => {
  const dispatch = useAppDispatch();

  const choseProductClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    const value = e.currentTarget.querySelector("span")?.textContent;
    // console.log(value);
    const label = e.currentTarget.id;
    // console.log(label);
    dispatch(setProductCategory(label));
    dispatch(setProductlabel(value));
    dispatch(setItemProductCategory(label));
    dispatch(setFromSearch(false));
    dispatch(setSearchWord(""));
  };

  const getProductCategotyIcon = (category: string) => {
    // console.log(category);
    switch (category) {
      case "food":
        return food;
      case "snack":
        return snack;
      case "clean":
        return clean;
      case "tableware":
        return tableware;
      case "house":
        return house;
      case "cloth":
        return cloth;
      case "equipment":
        return equipment;
      default:
        return;
    }
  };

  return (
    <li
      key={productCategory.label}
      onClick={choseProductClick}
      id={productCategory.label}
    >
      <div className="icon">
        <img
          src={getProductCategotyIcon(productCategory.label)}
          alt={productCategory.label}
        />
      </div>
      <span>{productCategory.value}</span>
    </li>
  );
};

export default CategoryItem;
