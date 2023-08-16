import { styled } from "styled-components";

export const MainLayout = styled.div`
  width: 100%;
  max-width: 1440px;
  /* background-color: pink; */
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
  /* background-color: pink; */
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
      /* border: 1px solid; */
      padding: 5px;
      box-shadow: var(--item-boxshadow);
      border-radius: 8px;
      transition: all 0.3s;
      img {
        display: flex;
        /* justify-content: center; */
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
