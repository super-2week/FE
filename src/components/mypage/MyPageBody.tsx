import * as S from './MyPage.style';
import MyPageMain from './MyPageMain';
import MyPageSideContents from './MyPageSideContents';

const MyPageBody = () => {
  return (
    <S.MyPageBody>
      <S.MyPageContents>
        <MyPageSideContents />

        <MyPageMain />
      </S.MyPageContents>
    </S.MyPageBody>
  );
}
 
export default MyPageBody;