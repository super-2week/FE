import * as S from '../components/mypage/MyPage.style';

import MyPageBody from '../components/mypage/MyPageBody';

const MyPage = () => {
  return(
    <S.MyPageLayout>
      <S.MyPageContents>
        <MyPageBody />
      </S.MyPageContents>
    </S.MyPageLayout>
  );
};

export default MyPage;