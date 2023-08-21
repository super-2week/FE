import { Link } from 'react-router-dom';
import * as S from './MyPage.style';
import { HandleViewProps } from './type';

const MyPageLastSee = ({ handleClick }: HandleViewProps) => {
  return (
    <S.OrderBox>
      <S.TitleBox>
        <h3>최근 본 상품</h3>
        <p onClick={() => handleClick('LastSee')}>더보기</p>
      </S.TitleBox>

      <S.LastSeeList>
        {/* 최근 본 상품이 없을 때 */}
        {/* <div>
          <S.LastSeeNoData>
            <strong>최근 본 상품이 존재하지 않습니다.</strong>
          </S.LastSeeNoData>
        </div> */}

        <ul>
          <li>
            <S.LastSeeListItem>
              <S.LastSeePhotoBox>
                <Link to='/'>
                  <img src='/' alt='최근 본 상품' />
                </Link>
              </S.LastSeePhotoBox>

              <S.LastSeeContentBox>
                <div className='title_box'>
                  <span>브랜드</span>

                  <Link to='/'>
                    <strong>
                      <span>판매 중인 상품</span>
                    </strong>
                  </Link>
                </div>

                <div className='price_box'>
                  <span>일천만원</span>

                  <strong>
                    <strong>
                      일십만원
                      <em>99%</em>
                    </strong>
                  </strong>
                </div>
              </S.LastSeeContentBox>
            </S.LastSeeListItem>
          </li>
        </ul>
      </S.LastSeeList>
    </S.OrderBox>
  );
}
 
export default MyPageLastSee;