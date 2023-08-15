import { Link } from 'react-router-dom';
import * as S from './MyPage.style';

const MyPageMain = () => {
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
        </S.TopInfoBox>
      </S.MainBox>
    </S.ContentsBox>
  );
}
 
export default MyPageMain;