import { useEffect, useState } from "react";
import * as S from "./main.style";

import Item from "./Item";
import { GetTopData } from "../../apis/main/topItem.api";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { Product } from "./type";
import TopFilter from "./TopFilter";
import { useNavigate } from "react-router-dom";

const TopItem = () => {
  const navigate = useNavigate();
  /** 동물 카테고리 */
  const animalCategory = useSelector(
    (state: RootState) => state.animalCategory.category
  );

  /** 상품 카테고리 */
  const productCategory = useSelector(
    (state: RootState) => state.productCategory.category
  );

  // const itemParameter = useSelector((state: RootState) => state.parameter);

  const [topItem, setTopItem] = useState<Product[]>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await GetTopData(animalCategory, productCategory);
        setTopItem(res);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [animalCategory, productCategory]);

  const getTopItem = () => {
    return topItem?.map((item) => <Item key={item.id} {...item} />);
  };

  const clickMore = () => {
    navigate(`/list/product/${animalCategory}/${productCategory}/price`);
  };

  return (
    <S.TopItem>
      <TopFilter />
      <div className="label-box">
        <div className="label-box-left">
          <h2>주목받는 아이템</h2>
          <span>카테고리별 베스트</span>
        </div>

        <div className="label-box-right">
          <span onClick={clickMore}>더보기</span>
        </div>
      </div>

      <ul className="item-list">{getTopItem()}</ul>
    </S.TopItem>
  );
};

export default TopItem;
