import React, { useState } from "react";
import * as S from "./signin.style";
import kakaologo from "../../img/kakao.png";

const SignIn: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    setEmailError("");
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    setPasswordError("");
  };

  const handleLogin = () => {
    if (!validateEmail(email)) {
      setEmailError("이메일 형식이 올바르지 않습니다.");
    }

    if (!validatePassword(password)) {
      setPasswordError("비밀번호 형식이 올바르지 않습니다.");
      return;
    }
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password: string) => {
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
  };

  const getInputStyles = (error: boolean, valid: boolean) => ({
    borderColor: error ? "#ff1064" : valid ? "#43C37D" : "#e8f3ff",
    boxShadow: error
      ? "0px 0px 2px #ff1064"
      : valid
      ? "0px 0px 2px #43C37D"
      : "none",
  });

  return (
    <S.CenteredContainer>
      <S.Form>
        <S.Title>로그인</S.Title>
        <S.Sub>계정으로 로그인하세요. 환영합니다!</S.Sub>
        <S.InputContainer>
          <S.StyledLabel htmlFor="email">이메일</S.StyledLabel>
          <S.StyledInput
            type="email"
            id="email"
            placeholder="example@example.com"
            value={email}
            onChange={handleEmailChange}
            autoComplete="off"
            style={getInputStyles(!!emailError, validateEmail(email))}
          />
          {emailError && <S.ErrorText>{emailError}</S.ErrorText>}
        </S.InputContainer>
        <S.InputContainer>
          <S.StyledLabel htmlFor="password">비밀번호</S.StyledLabel>
          <S.StyledInput
            type="password"
            id="password"
            placeholder="대문자,소문자,특수문자를 반드시 입력해야합니다."
            value={password}
            onChange={handlePasswordChange}
            autoComplete="off"
            style={getInputStyles(!!passwordError, validatePassword(password))} //passwordError앞에 !! 붙혀줘서 불리언값으로전달 문자열 전달x
          />
          {passwordError && <S.ErrorText>{passwordError}</S.ErrorText>}
        </S.InputContainer>
        <S.ButtonContainer>
          <S.SocialButtons>
            <img src={kakaologo} alt="" />
          </S.SocialButtons>
          <S.StyledButton onClick={handleLogin}>로그인</S.StyledButton>
          <S.StyledInputWithCustomStyle>회원가입</S.StyledInputWithCustomStyle>
        </S.ButtonContainer>
      </S.Form>
    </S.CenteredContainer>
  );
};

export default SignIn;
