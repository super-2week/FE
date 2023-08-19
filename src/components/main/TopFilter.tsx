import React, { useEffect } from "react";
import * as S from "./main.style";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { setProductCategory } from "../../store/slice/productCategoryStateSlice";

interface ProductCategory {
  id: string;
  label: string;
  value: string;
}

const TopFilter: React.FC = () => {
  const dispatch = useDispatch();
  /**동물 카테고리 id 가져오는 함수 */
  const animalCategory = useSelector(
    (state: RootState) => state.animalCategory.category
  );

  /**동물 카테고리 label 가져오는 함수 */
  const animalLabel = useSelector(
    (state: RootState) => state.animalCategory.label
  );

  /**상품 카테고리의 모든 list들을 가져오는 함수 */
  const productCategories = useSelector(
    (state: RootState) => state.animalCategories.productes
  );

  const productCategory = useSelector(
    (state: RootState) => state.productCategory.category
  );
  console.log(productCategory);

  const clickTopCategory = (e: React.MouseEvent<HTMLElement>) => {
    console.log(e.currentTarget.id);

    dispatch(setProductCategory(e.currentTarget.id));
  };

  /**상품 카테고리의 list들 동물 카테고리의 id로 filter하는 함수 */
  const filterCategories = (filterArray: ProductCategory[]) => {
    return filterArray.map((data, index) => (
      <li
        onClick={clickTopCategory}
        key={index}
        id={data.label}
        className={productCategory === data.label ? "active" : ""}
      >
        {data.value}
      </li>
    ));
  };

  // 다른 컴포넌트에서의 redux 구독 중복을 방지하기 위해
  const filteredCategories = filterCategories(
    productCategories.filter((data) => animalCategory === data.id)
  );

  useEffect(() => {
    const filterArray = productCategories.filter(
      (data) => animalCategory === data.id
    );

    const categoryLabel = filterArray.map((data) => data.label);

    if (!categoryLabel.includes(productCategory)) {
      dispatch(setProductCategory("food"));
    }
  }, [animalCategory, productCategories, productCategory, dispatch]);

  return (
    <S.TopFilter>
      <h2>{animalLabel}</h2>
      <ul className="categoriFilterList">{filteredCategories}</ul>
    </S.TopFilter>
  );
};

export default TopFilter;
