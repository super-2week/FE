import { Link } from 'react-router-dom';

import * as S from './MyPage.style';

const MyPagePayDetail = () => {
  return (
    <S.OrderBox>
      <S.TitleBox>
        <h3>Pay Money</h3>
      </S.TitleBox>

      <div>
        <S.PayMoneyNow>
          <p style={{ fontSize: '16px'}}>사용가능한 페이머니</p>

          <div>
            <strong>
              <span>0</span>
              P
            </strong>

            <button>
              충전하기
            </button>
          </div>
        </S.PayMoneyNow>

        {/* 사용 내역이 있을 때 */}
        <S.PayMoneyTable>
          <table>
            <thead>
              <tr>
                <th>충전/사용</th>
                <th>사용날짜</th>
                <th>상품금액/충전금액</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <th>충전</th>
                <th>2023.08.17</th>
                <th>10,000원</th>
              </tr>

              <tr>
                <th>사용</th>
                <th>2023.08.17</th>
                <th>10,000원</th>
              </tr>
            </tbody>
          </table>
        </S.PayMoneyTable>

        {/* 사용 내역이 없을 때 */}
        {/* <p className='empty'>페이머니 사용내역이 없습니다.</p> */}
      </div>
    </S.OrderBox>
  );
}
 
export default MyPagePayDetail;