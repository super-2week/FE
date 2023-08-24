import { Link } from 'react-router-dom';

import * as S from './MyPage.style';
import { useState } from 'react';
import { Props } from './type';

const MyPageEditUser = ({ handleClick }: Props) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShow = () => {
    setShowPassword(!showPassword);
  };

  return (
    <S.OrderBox>
      <S.TitleBox style={{ marginBottom: '32px' }}>
        <h3>회원정보 수정</h3>
      </S.TitleBox>

      <S.EditUserContainer>
        <S.UserContents>
          <form>
            <div>
              <S.BaseUserInfo>
                <table>
                  <colgroup>
                    <col width={25} />
                    <col width={75} />
                  </colgroup>

                  <tbody>
                    <tr>
                      <td>
                        <label className='labeling'>아이디</label>
                        <input type='text' value={'email@email.com'} readOnly />
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <label className='labeling'>이름</label>
                        <input type='text' value={'홍길동'} readOnly />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div>
                          <span>
                            <div className='pw_btn' onClick={handleShow}>
                              <em>비밀번호 설정</em>
                            </div>
                          </span>
                        </div>

                        <div className='pw_change' style={{display: showPassword ? `block` : 'none'}}>
                          <dl>
                            <dt>새 비밀번호</dt>
                            <dd>
                              <div className='pw_change_input'>
                                <input type='password' className='pw_input' placeholder='영문대/소문자,숫자,특수문자 중 2가지 이상 조합하세요' />
                              </div>
                            </dd>
                          </dl>

                          <dl>
                            <dt>새 비밀번호</dt>
                            <dd>
                              <div className='pw_change_input'>
                                <input type='password' className='pw_input' />
                              </div>
                            </dd>
                          </dl>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label className='labeling'>휴대폰 번호</label>
                        <input type='text' value={'010-1234-5678'} readOnly />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className='user_adress'>
                          <input type='text' value={''} placeholder='우편번호를 검색해주세요' readOnly />
                          <button>우편번호 검색</button>
                        </div>

                        <div className='adress_input'>
                          <div className='adress_main'>
                            <input type='text' value={''} readOnly />
                          </div>
                          <div className='adress_sub'>
                            <input type='text' value={''} placeholder='상세 주소' />
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </S.BaseUserInfo>
            </div>
          </form>

          <S.UserInfoBtn>
            <div className='user_info_cancle' onClick={() => handleClick('userInfo')}>취소</div>
            <div className='user_info_submit'>정보수정</div>
          </S.UserInfoBtn>
        </S.UserContents>
      </S.EditUserContainer>
    </S.OrderBox>
  );
}
 
export default MyPageEditUser;