import React, { useEffect, useState } from "react"; // useCallback 추가
import * as S from "./list.style";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { useNavigate } from "react-router-dom";

import { GetTotalSearchData } from "../../apis/list/search.api";
import { setDataList } from "../../store/slice/listSlice";
import InfiniteScroll from "react-infinite-scroll-component";
import ListFilterItem from "./ListFilterItem";
import { setProductlabel } from "../../store/slice/productCategoryStateSlice";

const ListWrap = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [hasMore, setHasMore] = useState<boolean>(true);
  // console.log(hasMore);

  const productCategory = useSelector(
    (state: RootState) => state.productCategory
  );
  const animalCategory = useSelector(
    (state: RootState) => state.animalCategory.label
  );

  const productCategories = useSelector(
    (state: RootState) => state.animalCategories
  );

  const itemParameter = useSelector((state: RootState) => state.parameter);

  const itemList = useSelector((state: RootState) => state.listData);

  useEffect(() => {
    // console.log(productCategories);
    if (productCategories.categories.length !== 0) {
      const smallsCategory =
        productCategories?.categories[2].productCategory.map((el) => el.label);
      if (
        itemParameter.animalCategory === "small" &&
        !smallsCategory.includes(itemParameter.productCategory)
      ) {
        dispatch(setProductlabel("사료"));
      }
    } else {
      return;
    }
  }, [productCategories]);

  const fetchTotalSearchData = async (value: string, sortBy: string) => {
    try {
      const res = await GetTotalSearchData(value, sortBy);
      dispatch(
        setDataList({
          products: res[0].products,
          totalLength: res[0].totalLength,
        })
      );
    } catch (error) {
      console.log(error);
    }
  };

  console.log(itemParameter);

  useEffect(() => {
    fetchTotalSearchData(itemParameter.searchWord, itemParameter.sortBy);
  }, [itemParameter.sortBy]);

  // input에서 오는
  // const fetchData = async () => {
  //   console.log("필터 바뀔 때");
  //   try {
  //     const res = await GetSearchData(
  //       itemParameter.animalCategory,
  //       itemParameter.productCategory,
  //       itemParameter.sortBy,
  //       itemParameter.searchWord,
  //       itemParameter.pageNumber
  //     );
  //     console.log(res);
  //     dispatch(
  //       setDataList({
  //         products: res[0].products,
  //         totalLength: res[0].totalLength,
  //       })
  //     );
  //     console.log(res[0].totalLength);
  //     if (res[0].totalLength <= 32) {
  //       console.log("적어요");
  //     } else {
  //       console.log("많아요");
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const fetchInfiniteData = async () => {
    try {
      console.log("무한스크롤");
    } catch (error) {
      console.log(error);
    }
  };

  // 브라우저 url 변경
  useEffect(() => {
    const totalSearchUrl = `/list/product/total/${itemParameter.searchWord}`;
    const detailSearchUrl = `/list/product/${itemParameter.animalCategory}/${itemParameter.productCategory}/${itemParameter.sortBy}?searchWord=${itemParameter.searchWord}&page=${itemParameter.pageNumber}`;

    if (itemParameter.fromSearch) {
      navigate(totalSearchUrl);
    } else {
      navigate(detailSearchUrl);
    }
  }, [
    itemParameter.animalCategory,
    itemParameter.fromSearch,
    itemParameter.pageNumber,
    itemParameter.productCategory,
    itemParameter.searchWord,
    itemParameter.sortBy,
    navigate,
  ]);

  // 검색결과인지 카테고리 선택인지 확인
  const checkFromSearch = () => {
    // console.log(productCategory);
    return itemParameter.searchWord ? (
      <div className="list-category">
        <span className="search">검색 결과 : {itemParameter.searchWord}</span>
      </div>
    ) : (
      <div className="list-category">
        <span>
          {animalCategory} &gt; {productCategory.label}
        </span>
      </div>
    );
  };

  // 검색결과 또는 카테고리 선택결과 보여주는 함수
  const mapDataList = () => {
    // console.log(itemList);
    if (itemList.products.length === 0) {
      return <div>검색결과가 없습니다.</div>;
    } else {
      return itemList.products.map((item, index) => (
        <li key={index}>
          <img src={item.imageUrl} alt={item.imageUrl} />
          <div className="item-meta">
            <div className="title">{item.productName}</div>
            <div className="division"></div>
            <span>{item.price}원</span>
          </div>
        </li>
      ));
    }
  };

  const classActive = (sortBy: string) => {
    return itemParameter.sortBy === sortBy ? "active" : "";
  };

  const filterArray = [
    { id: "price", label: "낮은 가격순" },
    { id: "createdAt", label: "최신 순" },
    { id: "popular", label: "인기 순" },
  ];

  // filter 옵션들 돌리는 함수
  const mapFilter = () => {
    return filterArray.map((el) => (
      <ListFilterItem
        key={el.id}
        item={el}
        classActive={classActive}
        itemParameter={itemParameter}
      />
    ));
  };

  // }, [dispatch, itemParameter, hasMore]);

  return (
    <S.ListLayout>
      <S.ListWrap>
        {checkFromSearch()}
        <div className="list-content">
          <div className="list-content-top">
            <div className="list-meta">
              <div className="list-meta_text">
                총 <span>{itemList.totalLength}</span>개의 상품이
                검색되었습니다.
              </div>
              <ul className="list-meta_filter">{mapFilter()}</ul>
            </div>
          </div>

          <InfiniteScroll
            // dataLength={itemList.products.length}
            dataLength={itemList.products.length}
            next={fetchInfiniteData}
            hasMore={hasMore}
            loader={<h4>Loading...</h4>}
            style={{ overflow: "hidden" }}
          >
            <ul className="item-list">{mapDataList()}</ul>
          </InfiniteScroll>
        </div>
      </S.ListWrap>
    </S.ListLayout>
  );
};

export default ListWrap;
