import styled, { css } from "styled-components";

export const MainLayout = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
`;

export const TopFilter = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--sub-font-color);
  margin: 30px 0;
  h2 {
    background-color: pink;
    background-color: var(--main-color);
    box-shadow: (--button-boxshadow);
    padding: 10px 20px;
    border-radius: 10px;
    font-size: 32px;
  }
  ul {
    display: flex;
    gap: 10px;
    li {
      background-color: pink;
      background-color: var(--main-color);
      box-shadow: (--button-boxshadow);
      padding: 8px 15px;
      border-radius: 10px;
      cursor: pointer;
      color: var(--sub-font-color);
      font-size: 20px;
    }
  }
`;

export const TopItem = styled.div`
  width: 100%;
  margin-bottom: 100px;
  .label-box {
    display: flex;
    align-items: end;
    gap: 15px;
    margin-bottom: 40px;
    h2 {
      font-size: 30px;
      color: var(--main-font-color);
      font-weight: 600;
    }
    span {
      font-size: 20px;
      color: #c6bcbc;
    }
  }

  .item-list {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    row-gap: 27px;
    column-gap: 60px;

    li {
      padding: 5px;
      box-shadow: var(--item-boxshadow);
      border-radius: 8px;
      transition: all 0.3s;
      img {
        display: flex;
        width: 300px;
        height: 300px;
        margin: 0 auto;
      }
      .item-meta {
        color: #555;
        font-weight: bold;
        padding: 0 5px;
        box-sizing: border-box;
        .title {
          margin-top: 8px;
          font-size: 15px;
        }
        .division {
          width: 100%;
          height: 1px;
          background-color: #ddd;
          margin: 15px 0;
        }
        span {
          display: flex;
          justify-content: end;
          font-size: 17px;
          padding-bottom: 3px;
        }
      }
      &:hover {
        transform: scale(1.02);
      }
    }
  }
`;

export const TodayItem = styled.div`
  padding-bottom: 150px;

  h2 {
    font-size: 30px;
    color: var(--main-font-color);
    font-weight: 600;
    margin-bottom: 40px;
  }
  .item-grid {
    display: flex;
    width: 100%;
    height: 700px;
    &-left {
      width: calc(100% / 2);
      height: 100%;
      position: relative;

      img {
        width: 100%;
        height: 700px;
      }
    }
    &-right {
      width: 50%;
      height: 100%;
      display: flex;
      flex-direction: column;

      &-top {
        width: 100%;
        height: 50%;
        position: relative;
        display: flex;
        justify-content: space-between;
        img {
          width: 360px;
          height: 100%;
        }
        &_desc {
          width: 50%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background-color: #fbfbfb;
          .desc-content {
            width: 200px;
            .title {
              font-size: 22px;
              font-weight: 700;
              margin-bottom: 20px;
              white-space: pre-wrap;
            }
            .desc {
              width: 200px;
              padding-top: 15px;
              border-top: 1px solid #ccc;
              font-size: 13px;
              color: #333;
              white-space: pre-wrap;
              line-height: 20px;
            }
          }
        }
      }
      &-bottom {
        width: 100%;
        height: 50%;
        position: relative;
        display: flex;
        justify-content: space-between;
        img {
          width: 360px;
          height: 100%;
        }
        &_desc {
          width: 50%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background-color: #fbfbfb;
          .desc-content {
            width: 200px;
            .title {
              font-size: 22px;
              font-weight: 700;
              margin-bottom: 20px;
              white-space: pre-wrap;
            }
            .desc {
              width: 200px;
              padding-top: 15px;
              border-top: 1px solid #ccc;
              font-size: 13px;
              color: #333;
              white-space: pre-wrap;
              line-height: 20px;
            }
          }
        }
      }
    }
  }
  .hover-box {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.15);

    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const GridItemImg = styled.div<{ isRight?: boolean }>`
  position: relative;

  ${(props) =>
    props.isRight &&
    css`
      // 추가
      justify-content: flex-end;
    `}

  .hover-content {
    width: 100%;
    height: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
    .title {
      /* width: 300px; */
      margin-bottom: 60px;
      font-size: 23px;
      font-weight: 600;
    }
    .desc {
      /* background-color: pink; */
      font-size: 18px;
      /* width: 300px; */
      width: 80%;
      line-height: 25px;
      margin-bottom: 100px;
    }
    button {
      color: #fff;
      display: inline-block;
      border: 1px solid #fff;
      background-color: transparent;
      font-size: 13px;
      height: 35px;
      padding: 0 20px;
      transition: all 0.3s;
      border-radius: 3px;
      position: relative;
      overflow: hidden;
      transition: background-color 0.5s ease, color 0.3s ease-in-out;
      cursor: pointer;
      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 0;
        height: 100%;
        background-color: rgba(255, 255, 255, 0.2);
        transition: width 0.5s ease;
      }
      &:hover {
        transform: scale(1.05);
        color: #000;
        font-weight: 600;
      }
      &:hover::before {
        width: 100%;
      }
    }
  }
`;
