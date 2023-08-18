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
import MyPageOrderDetail from './MyPageOrderDetail';
import MyPagePayDetail from './MyPagePayDetail';
import MyPageEditUser from './MyPageEditUser';

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
        {isActiveTab === 'EditUser' && <MyPageEditUser handleClick={handleTabClick} />}
        {isActiveTab === 'LastSee' && (
          <>
            <MyPageMain handleClick={handleTabClick} />
            <MyPageLastSeeDetail />
          </>
        )}
        {isActiveTab === 'Like' && (
          <>
            <MyPageMain handleClick={handleTabClick} />
            <MyPageLikeDetail />
          </>
        )}
        {isActiveTab === 'Order' && (
          <>
            <MyPageMain handleClick={handleTabClick} />
            <MyPageOrderDetail />
          </>
        )}
        {isActiveTab === 'Pay' && (
          <>
            <MyPageMain handleClick={handleTabClick} />
            <MyPagePayDetail />
          </>
        )}
      </S.MyPageContents>
    </S.MyPageBody>
  );
}
 
export default MyPageBody;