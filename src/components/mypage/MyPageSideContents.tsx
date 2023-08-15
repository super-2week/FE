import { Link } from 'react-router-dom';

import * as S from './MyPage.style';

const MyPageSideContents = () => {
  return (
    <S.SideContentsBox>
      <S.SideMenuBox>
        <h2>마이페이지</h2>
        <ul>
          <li>
            <Link to='/'>유저 정보</Link>
          </li>

          <li>
            <Link to='/'>관심 상품</Link>
          </li>

          <li>
            <Link to='/'>최근 본 상품</Link>
          </li>

          <li>
            <Link to='/'>거래 목록</Link>
          </li>

          <li>
            <Link to='/'>Pay</Link>
          </li>
        </ul>
      </S.SideMenuBox>
    </S.SideContentsBox>
  );
}
 
export default MyPageSideContents;