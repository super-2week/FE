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

  p {
    background: none;
    border: none;
    font-size: 1rem;
    color: #999;
    padding: 0;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
      cursor: pointer;
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

  .empty {
    text-align: center;
    padding: 50px 0;
    font-size: 20px;
    font-weight: 700;
    color: #212121;
  }
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

export const PayMoneyNow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  padding: 21px 48px 22px 31px;
  border-radius: 5px;
  background: #f5f5f5;
  font-weight: 500;

  div {
    display: flex;

    strong {
      font-size: 24px;
      color: #b60217;
      font-weight: 900;

      span {
        padding-right: 3px;
      }
    }

    button {
      border: none;
      background-color: #999;
      border-radius: 16px;
      margin-left: 10px;

      &:hover {
        cursor: pointer;
        background-color: #99999950;
        transition: background-color .3s;
      }
    }
  }
`;

export const PayMoneyTable = styled.div`
  margin-top: 1rem;
  border: 0;
  border-top: 2px solid #222;
  border-bottom: 2px solid #222;

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
`;

export const EditUserContainer = styled.div`
  width: 100%;
  margin: 0 auto 100px auto;
`;

export const UserContents = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  max-width: 588px;
  margin: 0;
  padding: 0;
`;

export const BaseUserInfo = styled.div`
  table {
    width: 100%;

    td {
      padding: 10px;
      width: 100%;

      .labeling {
        margin-bottom: 23px;
        display: block;
        line-height: 1;
        font-size: 20px;
        font-weight: 600;
      }
    }

    td:first-child {
      border-left: none;
    }
    
    span {
      margin: 0 5px 0 0;
      display: inline-block;

      .pw_btn {
        display: inline-block;
        border: 1px solid #dbdbdb;
        vertical-align: middle;
        background-position: 0 -70px;
        width: 180px;
        height: 54px;
        line-height: 54px;
        border-radius: 5px;
        text-align: center;
        padding: 0;
        background-color: #fff;

        em {
          display: inline-block;
          background-position: right -69px;
          line-height: 26px;
          font-size: inherit;
          padding: 0;
        }

        &:hover {
          background-color: #f2f2f2;
          transition: background-color .3s;
          cursor: pointer;
        }
      }
    }
  }

  input {
    display: block;
    width: 100%;
    height: 54px;
    margin-bottom: 10px;
    padding: 0 0 0 20px;
    border: 2px solid #e1e1e1;
    border-radius: 8px;
    color: #979d9d;
    font-size: 18px;
  }

  .pw_change {
    margin: 15px 0 0 0;

    dl {
      padding: 5px 0;
      font-size: 0;
    }

    dt {
      display: inline-block;
      width: 120px;
      padding: 5px 0 0 0;
      font-size: 16px;
      font-weight: bold;
      vertical-align: baseline;
    }

    dd {
      display: inline-block;
      font-size: 12px;
    }

    &_input {
      display: inline-block;
      position: relative;
      width: 100%;
    }

    .pw_input {
      width: 350px;
      color: #222;

      &::placeholder {
        font-size: 14px;
      }
    }
  }

  .user_adress {
    float: left;
    width: 100%;

    input {
      margin-bottom: 10px;
    }

    button {
      width: calc(100% - 60%);
      height: 56px;
      font-size: 16px;
      margin: auto;
      padding: 5px 10px;
      border: 2px solid #b60217;
      border-radius: 8px;
      color: #b60217;
      background: none;

      &:hover {
        cursor: pointer;
      }
    }
  }

  .adress_input {
    float: left;
    width: 100%;

    .adress_main, .adress_sub {
      display: inline-block;
      position: relative;
      width: 100%;

      input {
        margin: 10px 0 0 0;
      }
    }
  }
`;

export const UserInfoBtn = styled.div`
  text-align: center;
  display: flex;
  justify-content: space-between;

  .user_info_cancle {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 288px;
    height: 56px;
    margin: 35px 0 0 0;
    font-size: 18px;
    font-weight: 500;
    border-radius: 5px;
    background: #fff;
    color: #b60217;
    border: 2px solid #b60217;
    cursor: pointer;

    &:hover {
      color: #fff;
      background: #b60217;
      transition: all .4s;
    }
  }

  .user_info_submit {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 288px;
    height: 56px;
    margin: 35px 0 0 0;
    font-size: 18px;
    font-weight: 500;
    border-radius: 5px;
    background: #b60217;
    color: #fff;
    border: 2px solid #b60217;
    cursor: pointer;

    &:hover {
      color: #b60217;
      background: #fff;
      transition: all .4s;
    }
  }
`;