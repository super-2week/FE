import * as S from './MyPage.style';

import MyPageMain from './MyPageMain';
import MyPageOrder from './MyPageOrder';
import MyPageSideContents from './MyPageSideContents';

const MyPageBody = () => {
  return (
    <S.MyPageBody>
      <MyPageSideContents />
      
      <S.MyPageContents>
        <MyPageMain />

        <MyPageOrder />
      </S.MyPageContents>
    </S.MyPageBody>
  );
}
 
export default MyPageBody;