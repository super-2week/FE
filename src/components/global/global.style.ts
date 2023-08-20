import styled from "styled-components";

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
  gap: 80px;
  background-color: var(--main-color);
  color: var(--sub-font-color);
  font-size: 17px;
  li {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 5px 20px;
    border-radius: 20px;
    height: 70%;
    box-sizing: border-box;
    cursor: pointer;
    font-weight: bold;
    transform: scale(1);
    transition: transform 0.1s;
    &:hover {
      transform: scale(1.05);
      background-color: #fff;
      color: var(--main-color);
    }
    img {
      width: 20px;
      height: 20px;
    }
    .icon {
      width: 20px;
      height: 20px;
    }
  }
  .navi-list {
    animation: moveNavigate 3s ease-out infinite;
    border-radius: 0;
    &:hover {
      background-color: transparent;
      border-bottom: 2px solid #fff;
      color: #fff;
    }
  }
  .active {
    border: 2px solid #fff;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.05);
  }
  @keyframes moveNavigate {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
`;

export const CategoryBar = styled.ul`
  max-width: 1440px;
  display: flex;
  justify-content: center;
  margin: 8px auto 20px;
  gap: 20px;

  li {
    /* border-bottom: 2px solid #ddd; */ // 밑줄
    padding: 5px 10px 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    cursor: pointer;
    .icon {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      border: 1px solid #ddd;
      box-sizing: border-box;
      transition: all 0.3s;
      img {
        width: 100%;
        height: 100%;
      }
    }
    span {
      font-size: 17px;
      color: #666666;
      font-weight: bold;
    }
    &:hover .icon {
      border-bottom: 2px solid #ddd;
      transform: scale(1.1);
    }
  }
`;

export const Modal = styled.div`
  width: 100%;
  height: 100vh;
  .modal-bg {
    height: 100%;
    width: 100%;
    position: fixed;
    left: 0;
    top: 0;
    background: rgba(0, 0, 0, 0.8);
    z-index: 2;
  }
  .modal-container {
    position: fixed;
    top: 30px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 3;
    width: 100%;
    max-width: 900px;
    overflow: hidden;
    .input-box {
      position: relative;
      .search {
        width: 0;
        height: 100px;

        color: #fff;
        font-size: 34px;
        border: none;
        border-bottom: 3px solid #fff;
        z-index: 3;
        background: none;
        box-sizing: border-box;
        outline: none;
        animation: expandInput 2s ease-in-out forwards;
      }
      .search-i {
        width: 40px;
        height: 40px;
        position: absolute;
        top: 30px;
        right: 20px;
      }
    }
    ul {
      margin-top: 15px;
      padding-left: 10px;
      box-sizing: border-box;
      li {
        height: 40px;
        color: #fff;
        font-size: 18px;
      }
    }
  }
  svg {
    width: 40px;
    height: 40px;
    position: absolute;
    z-index: 3;
    top: 20px;
    right: 20px;
    fill: #fff;
    cursor: pointer;
  }
  .close-i {
    opacity: 0;
    animation: dropIcon 3s ease-in-out forwards;
  }
  @keyframes expandInput {
    from {
      width: 0;
    }
    to {
      width: 900px;
      padding: 0 100px 0 10px;
    }
  }

  @keyframes dropIcon {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
