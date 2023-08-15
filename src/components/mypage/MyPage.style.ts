import { styled } from "styled-components";

export const MyPageLayout = styled.div`
  border-top: 1px solid #cccccc;
  position: relative;
  background-color: #fff;
  min-height: 100vw;
`

export const MyPageContents = styled.div`
  display: flex;
`;

export const MyPageBody = styled.div`
  position: relative;
  max-width: 100rem;
  width: 100%;
  margin: 0 auto;
  padding: 0 40px;
  padding-top: 80px;
  padding-bottom: 120px;
`;

export const SideContentsBox = styled.div`
  float: left;
  width: 200px;
`;

export const SideMenuBox = styled.div`
  padding: 0 0 31px 0;
  color: #212121;

  h2 {
    font-size: 2rem;
    line-height: 1;
    font-weight: 900;
  }

  ul {
    margin-top: 23px;

    li {
      position: relative;
      padding: 0;
      margin-top: 15px;
      font-weight: normal;
    }

    a {
      font-size: 1rem;
      color: #999;
      font-weight: 600;
      line-height: 1;
      text-decoration: none;

      &:hover {
        color: #555;
        transition: color .3s;
      }
    }
  }
`;

export const ContentsBox = styled.div`
  min-height: 500px;
  margin: auto;
  float: left;
  width: calc(100% - 200px);
  padding: 0 0 0 80px;
`;

export const MainBox = styled.div`
  padding: 0 0 50px 0;
`;

export const TopInfoBox = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  margin: 0 0 100px 0;
  padding: 77px 0;
  border: 2px solid #222;
`;

export const TopTextBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 50%;
  text-align: left;
  padding-left: 90px;
`;

export const NameLayer = styled.div`
  position: relative;
  display: inline-block;

  p {
    color: #222;
    font-weight: normal;
    line-height: 1;
    font-size: 24px;

    span {
      color: #222;
      font-weight: 700;
      line-height: 1;
      font-size: inherit;
    }
  }
`;

export const EditBtn = styled.div`
  margin-top: 1rem;
  a {
    background: none;
    border: none;
    font-size: 1rem;
    color: #999;
    padding: 0;
    text-decoration: none;
  }
`;