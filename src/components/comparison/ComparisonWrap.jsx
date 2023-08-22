import React from "react";
import * as S from "./comparison.style";
import img1 from "../../asset/item5.jpg";

const ComparisonWrap = () => {
  return (
    <S.ComparisonWrap>
      <div className="header">
        <div className="title">비교상품 목록</div>
        <span>
          상품 비교는 최대 4개 상품까지만 가능하며, 초과 되는 상품에 대한 비교는
          지원하지 않습니다.
        </span>
      </div>

      <S.ProductContainer>
        <div className="comparison-title">
          <ul>
            <li className="img-title">상품이미지</li>
            <li className="title">상품명</li>
            <li>판매가</li>
            <li>수량</li>
            <li>상품등록일</li>
            <li>모델명</li>
            <li>원산지</li>
            <li>판매자명</li>
          </ul>
        </div>
        <div className="comparison-item">
          <ul className="product">
            <li className="product-img">
              <div className="check-container">
                <input type="checkbox" id="product" />
                <label htmlFor="product">상품 선택</label>
              </div>
              <img src={img1} alt="" />
              <div className="detail">상품 상세보기</div>
            </li>
            <li className="product-title">
              강아지 자동줄 3m 코드타입 1p 강아지 리드줄 자동줄 개줄 자동
            </li>
            <li className="product-price">21,700원</li>
            <li className="product-count">수량</li>
            <li className="product-date">2023-08-13</li>
            <li>모델명</li>
            <li>원산지</li>
            <li>판매자명</li>
          </ul>
        </div>

        <div className="comparison-item">
          <ul className="product">
            <li className="product-img">
              <div className="check-container">
                <input type="checkbox" id="product" />
                <label htmlFor="product">상품 선택</label>
              </div>
              <img src={img1} alt="" />
              <div className="detail">상품 상세보기</div>
            </li>
            <li className="product-title">상품명</li>
            <li className="product-price">판매가</li>
            <li className="product-count">수량</li>
            <li>상품등록일</li>
            <li>모델명</li>
            <li>원산지</li>
            <li>판매자명</li>
          </ul>
        </div>

        <div className="comparison-item">
          <ul className="product">
            <li className="product-img">
              <div className="check-container">
                <input type="checkbox" id="product" />
                <label htmlFor="product">상품 선택</label>
              </div>
              <img src={img1} alt="" />
              <div className="detail">상품 상세보기</div>
            </li>
            <li className="product-title">상품명</li>
            <li className="product-price">판매가</li>
            <li className="product-count">수량</li>
            <li>상품등록일</li>
            <li>모델명</li>
            <li>원산지</li>
            <li>판매자명</li>
          </ul>
        </div>

        <div className="comparison-item">
          <ul className="product">
            <li className="product-img">
              <div className="check-container">
                <input type="checkbox" id="product" />
                <label htmlFor="product">상품 선택</label>
              </div>
              <img src={img1} alt="" />
              <div className="detail">상품 상세보기</div>
            </li>
            <li className="product-title">상품명</li>
            <li className="product-price">판매가</li>
            <li className="product-count">수량</li>
            <li>상품등록일</li>
            <li>모델명</li>
            <li>원산지</li>
            <li>판매자명</li>
          </ul>
        </div>
      </S.ProductContainer>
    </S.ComparisonWrap>
  );
};

export default ComparisonWrap;
