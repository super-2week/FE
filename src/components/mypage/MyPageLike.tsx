import { Link } from 'react-router-dom';
import * as S from './MyPage.style';
import { Props } from './type';
import { GetWishList } from './api/getApi';

const MyPageLike = ({ handleClick }: Props) => {
  const wishList = GetWishList();

  return (
    <S.OrderBox>
      <S.TitleBox>
        <h3>관심 상품</h3>
        <p onClick={() => handleClick('Like')}>더보기</p>
      </S.TitleBox>

      <S.LastSeeList>
        {/* 최근 본 상품이 없을 때 */}
        {wishList.length === 0 && (
          <div>
            <S.LastSeeNoData>
              <strong>최근 본 상품이 존재하지 않습니다.</strong>
            </S.LastSeeNoData>
          </div>
        )}


        {wishList?.length && (
          <div>
            {wishList.map((item) => (
              <li key={item.productId}>
                <S.LastSeeListItem>
                  <S.LastSeePhotoBox>
                    <Link to={`/product/${item.productId}`}>
                      <img src={item.imageUrl} alt='최근 본 상품' />
                    </Link>
                  </S.LastSeePhotoBox>

                  <S.LastSeeContentBox>
                    <div className='title_box'>
                      <Link to={`/product/${item.productId}`}>
                        <strong>
                          <span>{item.productName}</span>
                        </strong>
                      </Link>
                    </div>

                    <div className='price_box'>
                      <span>{item.price}원</span>
                    </div>
                  </S.LastSeeContentBox>
                </S.LastSeeListItem>
              </li>
            ))}
          </div>
        )}
      </S.LastSeeList>
    </S.OrderBox>
  );
}
 
export default MyPageLike;