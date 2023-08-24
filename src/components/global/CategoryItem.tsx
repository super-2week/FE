import React, { useEffect } from "react";
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
import { GetSearchData } from "../../apis/list/search.api";
import { setDataList } from "../../store/slice/listSlice";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

interface CategoryItemProps {
  productCategory: {
    id: string;
    label: string;
    value: string;
  };
}

const CategoryItem: React.FC<CategoryItemProps> = ({ productCategory }) => {
  const dispatch = useAppDispatch();

  const itemParameter = useSelector((state: RootState) => state.parameter);

  const choseProductClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    const value = e.currentTarget.querySelector("span")?.textContent;
    const label = e.currentTarget.id;
    dispatch(setProductCategory(label));
    dispatch(setProductlabel(value));
    dispatch(setItemProductCategory(label));
    dispatch(setFromSearch(false));
    dispatch(setSearchWord(""));
  };

  const fetchData = async () => {
    try {
      const res = await GetSearchData(
        itemParameter.animalCategory,
        itemParameter.productCategory,
        itemParameter.sortBy,
        itemParameter.searchWord,
        itemParameter.pageNumber
      );
      // console.log("category눌럿을때 :", res);
      dispatch(
        setDataList({
          products: res[0].products,
          totalLength: res[0].totalLength,
        })
      );
      // console.log(res[0].totalLength);
      if (res[0].totalLength <= 32) {
        // console.log("적어요");
      } else {
        // console.log("많아요");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (itemParameter.fromSearch === false) {
      fetchData();
    }
  }, [itemParameter]);

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
