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

export const NaviWrap = styled.ul`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  background-color: var(--main-color);
  color: var(--white-color);
  font-size: 17px;
  li {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 20px;
    border-radius: 20px;
    height: 65%;
    box-sizing: border-box;
    cursor: pointer;
    font-weight: bold;
    &:hover {
      border: 1px solid #fff;
    }
  }
  .active {
    background-color: #fff;
    color: var(--main-color);
    border: 1px solid #fff;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.05);
  }
`;
