import { styled } from "styled-components";

export const ComparisonWrap = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 100px auto;
  .header {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px 0;
    border-bottom: 4px solid #f0f0f0;
    .title {
      font-size: 18px;
      font-weight: 600;
      color: #000;
    }
    span {
      font-size: 13px;
      color: #999;
    }
  }
`;

export const ProductContainer = styled.div`
  display: flex;
  margin-top: 20px;
  .comparison-title {
    color: #444;
    font-size: 15px;
    font-weight: 600;
    background-color: #f9f9f9;
    ul {
      display: flex;
      flex-direction: column;
      li {
        padding: 21px;
        border-bottom: 2px solid #f0f0f0;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 200px;
        box-sizing: border-box;
      }
      .img-title {
        height: 370px;
      }
      .title {
        height: 100px;
      }
    }
  }
  .comparison-item {
    width: 100%;

    .product {
      /* border-right: 1px solid #000; */

      li {
        padding: 21px;
        border-bottom: 2px solid #f0f0f0;
        box-sizing: border-box;
        height: 59px;
        color: #999;
        font-size: 13px;
        font-weight: 600;

        .detail {
          display: flex;
          justify-content: flex-end;
          margin-top: 5px;
          font-size: 14px;
          color: #999;
          cursor: pointer;
        }
      }
      .product-img {
        height: 370px;
        padding: 0;
        padding: 0 10px;
        .check-container {
          display: flex;
          justify-content: space-between;
          input {
            width: 13px;
            height: 13px;
            cursor: pointer;
          }
          label {
            font-size: 14px;
            color: #999;
            cursor: pointer;
          }
        }
        img {
          width: 100%;
          height: 290px;
          margin-top: 10px;
        }
      }
      .product-title {
        color: #444;
        font-size: 13px;
        height: 100px;
        display: flex;
        align-items: center;
        line-height: 22px;
      }
      .product-price {
        font-size: 16px;
        color: #444;
        font-weight: 700;
      }
      .product-count {
      }
      .product-date {
        font-size: 16px;
        /* font-style: italic; */
        color: #444;
      }
    }
  }
`;
