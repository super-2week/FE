import { Link } from 'react-router-dom';

import * as S from './MyPage.style';

const MyPageOrderDetail = () => {
  return (
    <S.OrderBox>
      <S.TitleBox>
        <h3>거래 목록</h3>
      </S.TitleBox>

      <S.LastSeeList>
        <div>
          <S.OrderListNum>
            거래목록 <strong>0</strong> 건
          </S.OrderListNum>

          <S.OrderTable>
            <table>
              <colgroup>
                <col style={{ width: '15%'}} />
                <col />
                <col style={{ width: '15%'}} />
                <col style={{ width: '15%'}} />
                <col style={{ width: '15%'}} />
              </colgroup>

              <thead>
                <tr>
                  <th>주문일자/주문정보</th>
                  <th>상품정보</th>
                  <th>상품금액</th>
                  <th>수량</th>
                  <th>주문상태</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  {/* 거래 내역이 없을 때 */}
                  {/* <td colSpan={6}>
                    <p className='no_data'>거래내역이 없습니다.</p>
                  </td> */}

                  {/* 거래 내역이 있을 때 */}
                  <th>2023.08.17/20011111</th>
                  <th>상품입니다.</th>
                  <th>20,000,000원</th>
                  <th>2</th>
                  <th>결제 확인</th>
                </tr>
              </tbody>
            </table>
          </S.OrderTable>
        </div>
      </S.LastSeeList>
    </S.OrderBox>
  );
}
 
export default MyPageOrderDetail;