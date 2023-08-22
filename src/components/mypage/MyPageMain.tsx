import { useState, useEffect } from 'react';
import * as S from './MyPage.style';
import { LikeData, Props } from './type';
import instance from '../../api/axios';

const MyPageMain = ({ handleClick }: Props) => {
  const [pay, setPay] = useState();
  const [like, setLike] = useState<LikeData[]>([]);

  // 페이머니 호출, 관심 상품 갯수를 위한 호출
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await instance.get('/payment');
        const likeRes = await instance.get('/product/wish');
        setPay(res.data.coin);
        setLike(likeRes.data);
      } catch(err) {
        console.error(err);
      }
    };

    fetchData();
  }, [])
  return (
    <S.ContentsBox>
      <S.MainBox>
        <S.TopInfoBox>
          <S.TopTextBox>
            <div>
              <S.NameLayer>
                <p>
                  <span>회원</span>
                  님 안녕하세요!
                </p>
              </S.NameLayer>
              <S.EditBtn>
                <p onClick={() => handleClick('EditUser')}>회원정보 수정</p>
              </S.EditBtn>
            </div>
          </S.TopTextBox>

          <S.TopWalletBox>
            <div>
              <span>
                <em>PAY</em>
                <p onClick={() => handleClick('Pay')}>
                  <strong>{pay}</strong>
                </p>
              </span>
            </div>
    
            <div>
              <span>
                <em>관심 상품</em>
                <p onClick={() => handleClick('Like')}>
                  <strong>{like.length}</strong>
                </p>
              </span>
            </div>
    
            <div>
              <span>
                <em>최근 본 상품</em>
                <p onClick={() => handleClick('LastSee')}>
                  <strong>2</strong>
                </p>
              </span>
            </div>
          </S.TopWalletBox>
        </S.TopInfoBox>
      </S.MainBox>
    </S.ContentsBox>
  );
}
 
export default MyPageMain;