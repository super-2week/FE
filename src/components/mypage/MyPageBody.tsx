import { useState } from 'react';
import { useAppDispatch } from '../../store/hook';
import { setActiveTab } from '../../store/slice/myPageSlice';

import * as S from './MyPage.style';

import MyPageMain from './MyPageMain';
import MyPageLastSee from './MyPageLastSee';
import MyPageLastSeeDetail from './MyPageLastSeeDetail';
import MyPageSideContents from './MyPageSideContents';
import MyPageLike from './MyPageLike';
import MyPageLikeDetail from './MyPageLikeDetail';

const MyPageBody = () => {
  const [isActiveTab, isSetActiveTab] = useState('userInfo');

  const dispatch = useAppDispatch();

  const handleTabClick = (tabName: string) => {
    isSetActiveTab(tabName);
    dispatch(setActiveTab(tabName));
  };

  return (
    <S.MyPageBody>
      <MyPageSideContents handleClick={handleTabClick} />
      
      <S.MyPageContents>
        {isActiveTab === 'userInfo' && (
          <>
            <MyPageMain handleClick={handleTabClick} />
            <MyPageLastSee handleClick={handleTabClick} />
            <MyPageLike handleClick={handleTabClick} />
          </>
        )}
        {isActiveTab === 'LastSee' && <MyPageLastSeeDetail />}
        {isActiveTab === 'Like' && <MyPageLikeDetail />}
      </S.MyPageContents>
    </S.MyPageBody>
  );
}
 
export default MyPageBody;