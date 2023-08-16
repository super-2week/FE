import { Link } from 'react-router-dom';
import * as S from './MyPage.style';

const MyPageMain = ({ handleClick }: HandleViewProps) => {
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
                <Link to='/'>회원정보 수정</Link>
              </S.EditBtn>
            </div>
          </S.TopTextBox>

          <S.TopWalletBox>
            <div>
              <span>
                <em>PAY</em>
                <p onClick={() => handleClick('Pay')}>
                  <strong>0</strong>
                </p>
              </span>
            </div>
    
            <div>
              <span>
                <em>관심 상품</em>
                <p onClick={() => handleClick('Like')}>
                  <strong>1</strong>
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