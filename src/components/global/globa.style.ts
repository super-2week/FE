import { styled } from "styled-components";

export const HeaderWrap = styled.div`
  width: 100%;
  height: 75px;
  .layout {
    max-width: 1440px;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* background-color: skyblue; */
    .logo {
      width: 130px;
      height: 35px;
      border-radius: 15px;
      background-color: #ccc;
    }
    .menu {
      display: flex;
      align-items: center;
      gap: 20px;
      &-search {
        width: 350px;
        height: 38px;
        border-radius: 8px;
        border: none;
        margin-right: 5px;
        background-color: beige;
      }
      svg {
        width: 34px;
        height: 34px;
      }
    }
  }
`;
