import { styled } from "styled-components";

export const MyPageLayout = styled.div`
  border-top: 1px solid #cccccc;
  position: relative;
  background-color: #fff;
  min-height: 100vw;
`

export const MyPageContents = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 200px);
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

    p {
      font-size: 1rem;
      color: #999;
      font-weight: 600;
      line-height: 1;
      text-decoration: none;

      &:hover {
        color: #555;
        cursor: pointer;
        transition: color .3s;
      }
    }
  }
`;

export const ContentsBox = styled.div`
  float: left;
  width: 100%;
  padding: 0 0 0 0;
`;

export const MainBox = styled.div`
  padding: 0;
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

    &:hover {
      border-bottom: 1px solid #999;
    }
  }
`;

export const TopWalletBox = styled.div`
  display: flex;
  align-items: center;
  width: 50%;

  & > div {
    width: 100%;
    text-align: left;
    border-left: 1px solid #ddd;
    padding-left: 30px;
  }

  span {
    display: block;
  }

  em {
    display: block;
    font-size: 1rem;
    color: #3d3a35;
    margin-bottom: 30px;
  }

  p {
    color: #333;
  }

  strong {
    padding-left: 2px;
    font-size: 20px;
    font-weight: 700;
    color: #222;
    line-height: 1;
  }

  p, strong {
    &:hover {
      color: #555;
      transition: color .3s;
      text-decoration: underline;
      cursor: pointer;
    }
  }
`;

export const OrderBox = styled.div`
  position: relative;
  padding-bottom: 5rem;
`;

export const TitleBox = styled.div`
  margin: 0;
  padding: 0 0 15px 0;
  font-size: 1rem;
  border-bottom: 2px solid #222;

  display: flex;
  justify-content: space-between;
  align-items: center;

  h3 {
    display: inline-block;
    font-size: 24px;
    font-weight: 700;
    color: #212121;
  }

  p {
    font-size: 1rem;
    font-weight: 500;
    color: #222;
    text-decoration: none;

    &:hover {
      color: #555;
      transition: color .3s;
      cursor: pointer;
    }
  }
`;

export const LastSeeList = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  margin: 0 auto;
  margin-top: 20px;
  padding: 0;

  ul {
    float: left;
    width: 100%;
    font-size: 0;

    li {
      width: calc(25% - 15px);
      margin: 0;
    }

    li:not(:nth-child(4n)) {
      margin-right: 20px;
    }
  }
`;

export const LastSeeListItem = styled.div`
  text-align: left;
  color: #1c1c1c;
  padding: 0;
`;

export const LastSeePhotoBox = styled.div`
  display: inline-block !important;
  overflow: hidden;
  position: relative;
  text-align: center;
  vertical-align: middle;
  width: 100%;

  a {
    height: 100%;
    background: #eceaeb;

    img {
      width: 100%;
      height: auto !important;
      object-fit: cover;
      object-position: bottom;
      vertical-align: middle;
    }
  }
`;

export const LastSeeContentBox = styled.div`
  padding: 5px;
  text-align: left;
  vertical-align: middle;
  font-size: 12px;

  & > .title_box {
    padding: 0;
    display: block;

    & > span {
      color: #888888;
    }

    a {
      text-decoration: none;
      color: #333;

      strong {
        padding: 5px 0 0;
        font-size: 18px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: normal;
        line-height: 1.4;
        height: 2.8em;
        word-wrap: break-word;
        word-break: keep-all;
        font-weight: 500;
        margin-bottom: 25px;
        display: block;
      }
    }
  }

  & > .price_box {
    display: flex;
    font-size: 18px;
    font-weight: 300;
    color: #3d3a35;
    line-height: 1;
    justify-content: space-between;
    position: relative;
    align-items: flex-end;
    padding: 10px 0 0;

    & > span {
      font-size: 18px;
      padding-right: 15px;
      text-decoration: line-through;
    }

    & > strong {
      display: block;
      font-size: 1rem;
      font-weight: 300;
      color: #3d3a35;
      letter-spacing: -.32px;

      & > strong {
        font-weight: bold;
        font-size: 18px;

        & > em {
          margin-left: 17px;
          color: #b60217;
          font-weight: bold;
        }
      }
    }
  }
`;

export const LastSeeNoData = styled.div`
  min-height: 200px;
  text-align: center;

  strong {
    font-size: 20px;
    font-weight: 700;
    color: #212121;
    line-height: 150px;
  }
`;

export const OrderListNum = styled.span`
  display: block;
  padding: 0 0 10px 0;
  font-size: 1rem;
  color: #222;
  font-weight: 600;

  strong {
    color: #b60217;
    padding: 0 0 0 5px;
  }
`;

export const OrderTable = styled.div`
  border: 0;

  table {
    width: 100%;
    border: 0;
    border-spacing: 0;
    border-collapse: collapse;
    text-align: center;
    border-top: none;
    padding: 15px;
  }

  thead > tr > th {
    padding: 15px;
    border-top: 1px solid #dbdbdb;
    border-bottom: 1px solid #dbdbdb;
    font-size: 16px;
    font-weight: 500;
  }

  tbody > tr {
    &:last-child {
      border-bottom: 1px solid #dbdbdb;
    }
  }

  tbody > tr > th {
    padding: 15px;
    font-size: 16px;
    font-weight: 500;
  }

  td {
    height: 31px;
    font-size: 14px;
    padding: 15px 0;
    color: #777777;
    border-bottom: 1px solid #dbdbdb;
  }

  .no_data {
    font-size: 20px;
    font-weight: 700;
    color: #212121;
    line-height: 1;
    padding: 50px 30px 50px 30px;
    text-align: center;
  }
`;