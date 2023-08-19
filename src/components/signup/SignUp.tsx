import React, { useState } from "react";
import * as S from "./signup.style";
import AddressInput from "./forminput/AddressInput";

const SignUp: React.FC = () => {
  interface FormData {
    userName: string;
    phoneNumber: string;
    email: string;
    password: string;
    checkPassword: string;
    address: string;
  }

  const [address, setAddress] = useState({
    postcode: "",
    roadAddress: "",
    numberAddress: "",
    detailAddress: "",
    showModal: false,
  });

  // console.log(address);

  const [formData, setFormData] = useState<FormData>({
    userName: "",
    phoneNumber: "",
    email: "",
    password: "",
    checkPassword: "",
    address: "",
  });

  const [validationErrors, setValidationErrors] = useState({
    userName: "",
    phoneNumber: "",
    email: "",
    password: "",
    checkPassword: "",
    address: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    // 유효성검사 함수에 입력값 넣기
    validateField(name as keyof FormData, value);
  };

  const handleBlur = (fieldName: keyof FormData) => {
    const value = formData[fieldName];

    if (!value.trim()) {
      setValidationErrors((prevValidationErrors) => ({
        ...prevValidationErrors,
        [fieldName]: "",
      }));
    } else {
      validateField(fieldName, value);
    }
  };
  console.log(formData);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const newAddress = `${address.roadAddress} ${address.detailAddress}`;
    // console.log(newAddress);

    setFormData((prevFormData) => ({
      ...prevFormData,
      address: newAddress,
    }));

    const newValidationErrors: Record<keyof FormData, string> = {
      userName: "",
      phoneNumber: "",
      email: "",
      password: "",
      checkPassword: "",
      address: "",
    };

    for (const fieldName of Object.keys(formData) as Array<keyof FormData>) {
      validateField(fieldName, formData[fieldName]);

      newValidationErrors[fieldName] = validationErrors[fieldName];
    }

    setValidationErrors(newValidationErrors);

    const isFormValid = Object.values(newValidationErrors).every(
      (error) => !error
    );
    const isAnyFieldFilled = Object.values(formData).every(
      (value) => value.trim() !== ""
    );

    if (!!isFormValid && !!isAnyFieldFilled) {
      // setFormData({
      //   userName: "",
      //   phoneNumber: "",
      //   email: "",
      //   password: "",
      //   checkPassword: "",
      //   address: "",
      // });
    } else {
      alert("모든 폼을 입력한 후 제출해주세요");
    }
    console.log(formData);
  };

  const handleEmailDuplicateCheck = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  /**유효성 검사 함수 */
  const validateField = (fieldName: keyof FormData, value: string) => {
    let error = "";
    switch (fieldName) {
      case "userName":
        if (!value) {
          error = "";
        } else if (value.length === 1 && /^[ㄱ-ㅎㅏ-ㅣ]+$/.test(value)) {
          error = "올바르지 않은 이름 형식입니다.";
        } else if (/[ㄱ-ㅎㅏ-ㅣ0-9!@#$%^&*(),.?":{}|<>]/.test(value)) {
          error = "특수문자나 숫자, 초성은 사용할 수 없습니다.";
        }
        break;
      case "phoneNumber":
        if (!value) {
          error = "";
        } else if (!/^\d+$/.test(value) || value.length !== 11) {
          error = "- 없이 11자리의 숫자를 입력해주세요.";
        }
        break;
      case "email":
        if (!value) {
          error = "";
        } else if (
          !/^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/.test(
            value
          )
        ) {
          error = "올바른 이메일 형식이 아닙니다.";
        }
        break;
      case "password":
        if (!value) {
          error = "";
        } else if (
          !/(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}/.test(
            value
          )
        ) {
          error =
            "영문 대소문자와 숫자, 특수문자 중 2가지 이상 조합하여 8~16자여야 합니다.";
        }
        break;
      case "checkPassword":
        if (!value) {
          error = "";
        } else if (value !== formData.password) {
          error = "비밀번호가 일치하지 않습니다.";
        }
        break;
      default:
        break;
    }

    setValidationErrors((prevValidationErrors) => ({
      ...prevValidationErrors,
      [fieldName]: error,
    }));
  };

  const isSubmitButtonEnabled = Object.values(validationErrors).every(
    (error) => !error
  );
  const isAnyFieldFilled = Object.values(formData).some(
    (value) => value.trim() !== ""
  );

  return (
    <S.CenteredContainer>
      <S.Form>
        <S.Title>회원가입</S.Title>
        <S.InputContainer>
          <S.StyledLabel htmlFor="userName">이름</S.StyledLabel>
          <S.StyledInput
            type="text"
            name="userName"
            value={formData.userName}
            onChange={handleChange}
            onBlur={() => handleBlur("userName")}
            className={validationErrors.userName ? "error" : ""}
            placeholder="이름"
          />
          {validationErrors.userName && (
            <S.StyledSpan className="error-message">
              {validationErrors.userName}
            </S.StyledSpan>
          )}
        </S.InputContainer>
        <S.InputContainer>
          <S.StyledLabel htmlFor="phoneNumber">휴대폰 번호</S.StyledLabel>
          <S.StyledInput
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            onBlur={() => handleBlur("phoneNumber")}
            className={validationErrors.phoneNumber ? "error" : ""}
            placeholder="'-'없이 입력"
          />
          {validationErrors.phoneNumber && (
            <S.StyledSpan className="error-message">
              {validationErrors.phoneNumber}
            </S.StyledSpan>
          )}
        </S.InputContainer>
        <S.InputContainer>
          <S.StyledLabel htmlFor="email">이메일</S.StyledLabel>
          <S.StyledInput
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={() => handleBlur("email")}
            className={validationErrors.email ? "error" : ""}
            placeholder="example@example.com"
          />
          {validationErrors.email && (
            <S.StyledSpan className="error-message">
              {validationErrors.email}
            </S.StyledSpan>
          )}
          <S.DuplicateCheckButton onClick={handleEmailDuplicateCheck}>
            중복확인
          </S.DuplicateCheckButton>
        </S.InputContainer>
        <S.InputContainer>
          <S.StyledLabel htmlFor="password">비밀번호</S.StyledLabel>
          <S.StyledInput
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            onBlur={() => handleBlur("password")}
            className={validationErrors.password ? "error" : ""}
            placeholder="비밀번호 (영문 대소문자/숫자/특수문자 중 2가지 이상 조합,8자~16자)"
          />
          {validationErrors.password && (
            <S.StyledSpan className="error-message">
              {validationErrors.password}
            </S.StyledSpan>
          )}
        </S.InputContainer>
        <S.InputContainer>
          <S.StyledLabel htmlFor="checkPassword">비밀번호 재확인</S.StyledLabel>
          <S.StyledInput
            type="password"
            name="checkPassword"
            value={formData.checkPassword}
            onChange={handleChange}
            onBlur={() => handleBlur("checkPassword")}
            className={validationErrors.checkPassword ? "error" : ""}
            placeholder="비밀번호 확인"
          />
          {validationErrors.checkPassword && (
            <S.StyledSpan className="error-message">
              {validationErrors.checkPassword}
            </S.StyledSpan>
          )}
        </S.InputContainer>
        <S.InputContainer>
          <AddressInput address={address} setAddress={setAddress} />
        </S.InputContainer>

        <S.ButtonContainer>
          <S.StyledInputWithCustomStyle
            type="submit"
            onClick={handleSubmit}
            disabled={!isSubmitButtonEnabled || !isAnyFieldFilled}
          >
            회원가입
          </S.StyledInputWithCustomStyle>
        </S.ButtonContainer>
      </S.Form>
    </S.CenteredContainer>
  );
};

export default SignUp;
