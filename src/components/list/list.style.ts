import styled from "styled-components";

export const ListLayout = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

export const ListWrap = styled.div`
  /* background-color: pink; */
  /* border: 1px solid; */
  width: 100%;
  .list-category {
    /* background-color: pink; */
    width: 100%;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;

    span {
      font-size: 25px;
      /* padding-bottom: 25px; */
      color: var(--main-color);
      border-bottom: 2px solid #ddd;
      font-weight: bold;
      padding: 0 5px 25px 5px;
    }
  }
  .list-content {
    &-top {
      .list-meta {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 20px 0;
        border-top: 1px solid;
        border-bottom: 1px solid;
        margin-bottom: 20px;
        /* background-color: pink; */
        &_text {
          font-size: 15px;
          span {
            color: var(--main-color);
            font-weight: 700;
            font-size: 18px;
          }
        }
        &_filter {
          display: flex;
          gap: 20px;
          /* background-color: pink; */
          li {
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s;
            color: #999;
            &:hover {
              color: var(--main-color);
            }
          }
          .active {
            color: var(--main-color);
          }
        }
      }
    }
    .item-list {
      /* height: 400px;
      background-color: skyblue; */
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
          width: 240px;
          height: 250px;
          margin: 0 auto;
          border-radius: 8px;
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
  }
`;
