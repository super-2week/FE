import React, { useEffect, useState, useCallback } from "react"; // useCallback 추가
import * as S from "./list.style";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { useNavigate } from "react-router-dom";
import { setFromSearch, setsortBy } from "../../store/slice/parameterSilce";
import { GetSearchData } from "../../apis/main/search.api";
import { setDataList } from "../../store/slice/listSlice";
import { Product } from "../main/type";
import InfiniteScroll from "react-infinite-scroll-component";

const ListWrap = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [hasMore, setHasMore] = useState<boolean>(true);

  const productCategory = useSelector(
    (state: RootState) => state.productCategory
  );
  const animalCategory = useSelector(
    (state: RootState) => state.animalCategory
  );

  const itemParameter = useSelector((state: RootState) => state.parameter);

  const itemList = useSelector((state: RootState) => state.listData);

  const fetchMoreData = useCallback(async () => {
    // useCallback으로 감싸줌
    try {
      const res = await GetSearchData(
        itemParameter.animalCategory,
        itemParameter.productCategory,
        itemParameter.sortBy,
        itemParameter.searchWord,
        itemParameter.pageNumber + 1 // 다음 페이지 요청
      );

      // 데이터가 없을 때 무한 스크롤 중단
      if (res[0].products.length === 0) {
        setHasMore(false);
      } else {
        // 새로운 데이터를 기존 데이터에 추가
        dispatch(
          setDataList({
            products: [...itemList.products, ...res[0].products],
            totalLength: res[0].totalLength,
          })
        );
      }
    } catch (error) {
      console.log(error);
    }
  }, [
    itemParameter.sortBy,
    dispatch,
    itemParameter.animalCategory,
    itemParameter.pageNumber,
    itemParameter.productCategory,
    itemParameter.searchWord,
    itemList.products,
  ]);

  useEffect(() => {
    const newURL = `/list/product/${itemParameter.animalCategory}/${itemParameter.productCategory}/price`;

    const searchUrl = `/list/product/${itemParameter.animalCategory}/${itemParameter.productCategory}/${itemParameter.sortBy}?searchWord=${itemParameter.searchWord}&page=${itemParameter.pageNumber}`;

    if (itemParameter.fromSearch) {
      navigate(searchUrl);
    } else {
      navigate(newURL);
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

  const checkFromSearch = () => {
    return itemParameter.searchWord ? (
      <div className="list-category">
        <span className="search">검색 결과 : {itemParameter.searchWord}</span>
      </div>
    ) : (
      <div className="list-category">
        <span>{productCategory.label}</span>
      </div>
    );
  };

  const mapDataList = () => {
    if (itemList.products.length === 0) {
      return <div>검색결과가 없습니다.</div>;
    } else {
      console.log(itemList.products);
      return itemList.products.map((item) => (
        <li key={item.id}>
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

  const clickFilter = (e: React.MouseEvent<HTMLLIElement>) => {
    console.log(itemParameter.sortBy);
    dispatch(setsortBy(e.currentTarget.id));
  };

  const classActive = (sortBy: string) => {
    return itemParameter.sortBy === sortBy ? "active" : "";
  };

  const filterArray = [
    { id: "price", label: "낮은 가격순" },
    { id: "createdAt", label: "최신 순" },
    { id: "popular", label: "인기 순" },
  ];

  const mapFilter = () => {
    return filterArray.map((el, index) => (
      <li
        className={classActive(`${el.id}`)}
        id={`${el.id}`}
        onClick={clickFilter}
        key={index}
      >
        {itemParameter.sortBy === `${el.id}` && <>✔</>} {el.label}
      </li>
    ));
  };

  useEffect(() => {
    const fetchData = async () => {
      console.log(hasMore);
      try {
        const res = await GetSearchData(
          itemParameter.animalCategory,
          itemParameter.productCategory,
          itemParameter.sortBy,
          itemParameter.searchWord,
          itemParameter.pageNumber !== 0
            ? itemParameter.pageNumber + 1
            : (itemParameter.pageNumber = 0)
        );

        console.log("more response : ", res);

        dispatch(
          setDataList({
            products: res[0].products,
            totalLength: res[0].totalLength,
          })
        );

        if (res[0].products.length === 0) {
          setHasMore(false);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [dispatch, itemParameter, hasMore]);

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
            dataLength={12}
            next={fetchMoreData}
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
