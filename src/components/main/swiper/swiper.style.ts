import { styled } from "styled-components";

export const BannerSwiper = styled.div`
  /* background-color: pink; */
  border-bottom: 2px solid #eee;
  position: relative;
  .swiper-pagination {
    position: absolute;
    /* top: 20px; */
    right: 0;
    display: flex;
    justify-content: center;
    transition: all 0.4s;
    /* margin-bottom: 20px; */
    padding-bottom: 20px;
    .swiper-pagination-bullet {
      width: 35px;
      height: 8px;
      background: #b7b5b5;
      border-radius: 0;
      border-radius: 4px;
    }
    .swiper-pagination-bullet-active {
      width: 100px;
      height: 8px;
      background: rgba(0, 0, 0, 0.3);
      border-radius: 0;
      border-radius: 4px;
      transition: all 0.4s;
    }
  }
`;

export const Section = styled.div`
  width: 100%;
  height: 500px;
  background-color: #fff;
  display: flex;
  justify-content: space-around;
  padding: 30px 50px;
  box-sizing: border-box;

  .item-meta {
    width: 300px;
    display: flex;
    flex-direction: column;
    &_categori {
      font-size: 30px;
      font-weight: 900;
      color: #242424;
      padding: 80px 0 70px;
    }
    &_desc {
      font-size: 16px;
      font-weight: 500;
      word-break: keep-all;
      .desc-box {
        display: flex;
        flex-direction: column;
        gap: 8px;
        p {
          line-height: 23px;
        }
      }
    }
  }
  .item-list {
    max-width: 1230px;
    width: 100%;
    display: flex;
    gap: 15px;
    .item {
      max-width: 300px;
      width: 100%;
      img {
        width: 100%;
        height: 300px;
        background-color: #ddd;
        margin-bottom: 20px;
      }
      .title {
        padding-left: 5px;
        box-sizing: border-box;
        font-size: 17px;
        font-weight: bold;
        margin-bottom: 10px;
      }
      .list-bottom {
        padding: 0px 5px;
        box-sizing: border-box;
        .price {
          font-size: 18px;
          font-weight: 600;
        }
        .heart {
        }
      }
    }
  }
`;

export const TodaySection = styled.div`
  padding-bottom: 150px;
  position: relative;
  h2 {
    font-size: 30px;
    color: var(--main-font-color);
    font-weight: 600;
    margin-bottom: 40px;
  }
`;
