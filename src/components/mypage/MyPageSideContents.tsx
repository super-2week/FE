import { Link } from 'react-router-dom';

import * as S from './MyPage.style';
import { Props } from './type';

const MyPageSideContents = ({ handleClick }: Props) => {
  return (
    <S.SideContentsBox>
      <S.SideMenuBox>
        <h2>마이페이지</h2>
        <ul>
          <li onClick={() => handleClick('userInfo')}>
            <p>유저 정보</p>
          </li>

          <li onClick={() => handleClick('Like')}>
            <p>관심 상품</p>
          </li>

          <li onClick={() => handleClick('LastSee')}>
            <p>최근 본 상품</p>
          </li>

          <li onClick={() => handleClick('Order')}>
            <p>거래 목록</p>
          </li>

          <li onClick={() => handleClick('Pay')}>
            <p>Pay</p>
          </li>
        </ul>
      </S.SideMenuBox>
    </S.SideContentsBox>
  );
}
 
export default MyPageSideContents;