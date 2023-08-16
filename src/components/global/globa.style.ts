import styled, { css } from "styled-components";

import dog from "../../asset/dog.png";
import cat from "../../asset/cat.png";
import small from "../../asset/smallAnimal.png";
import other from "../../asset/other.png";

import bluedog from "../../asset/bluedog.png";
import bluecat from "../../asset/bluecat.png";
import bluesmall from "../../asset/bluesmallAnimal.png";
import blueother from "../../asset/blueother.png";

interface IconProps {
  categori: string; // 카테고리에 맞는 타입으로 수정
}

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
      cursor: pointer;
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
        padding: 0 10px;
        box-sizing: border-box;
      }
      svg {
        width: 34px;
        height: 34px;
        cursor: pointer;
      }
    }
  }
`;

export const NaviWrap = styled.ul`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  background-color: var(--main-color);
  color: var(--sub-font-color);
  font-size: 17px;
  li {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 0 20px;
    border-radius: 20px;
    height: 65%;
    box-sizing: border-box;
    cursor: pointer;
    font-weight: bold;
    transform: scale(1);
    transition: transform 0.1s;
    &:hover {
      transform: scale(1.05);
    }
    /* img {
      width: 20px;
      height: 20px;
    }
    .icon {
      width: 20px;
      height: 20px;
    } */
  }
  .active {
    background-color: #fff;
    color: var(--main-color);
    border: 1px solid #fff;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.05);
  }
`;

export const Icon = styled.div<IconProps>`
  width: 20px;
  height: 20px;
  ${({ categori }) => {
    switch (categori) {
      case "강아지":
        return css`
          background: url(${bluedog}) no-repeat center / cover;
        `;
      case "고양이":
        return css`
          background: url(${bluecat}) no-repeat center / cover;
        `;
      case "소동물":
        return css`
          background: url(${bluesmall}) no-repeat center / cover;
        `;
      case "기타":
        return css`
          background: url(${blueother}) no-repeat center / cover;
        `;
      default:
        return css``;
    }
  }}
`;
