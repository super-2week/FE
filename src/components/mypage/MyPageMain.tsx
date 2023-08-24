import * as S from './MyPage.style';
import { Props } from './type';
import { GetMainList } from './api/getApi';

const MyPageMain = ({ handleClick }: Props) => {
  const { pay, wishList } = GetMainList();

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
                  <strong>{wishList.length}</strong>
                </p>
              </span>
            </div>
    
            <div>
              <span>
                <em>최근 본 상품</em>
                <p onClick={() => handleClick('LastSee')}>
                  <strong>0</strong>
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