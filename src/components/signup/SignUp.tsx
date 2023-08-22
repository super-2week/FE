import React, { useState } from "react";
import * as S from "./signup.style";
import DaumPostcodeEmbed from "react-daum-postcode";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import axios from "axios";
import { successSignUp } from "../../store/slice/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

interface FormData {
  userName: string;
  phoneNumber: string;
  email: string;
  password: string;
  checkPassword: string;
  address: string;
  detailAddress: string;
}

interface Address {
  postcode: "";
  roadAddress: "";
  numberAddress: "";
}

const SignUp: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [address, setAddress] = useState<Address>({
    postcode: "",
    roadAddress: "",
    numberAddress: "",
  });

  const [formData, setFormData] = useState<FormData>({
    userName: "",
    phoneNumber: "",
    email: "",
    password: "",
    checkPassword: "",
    address: "",
    detailAddress: "",
  });

  const [validationErrors, setValidationErrors] = useState({
    userName: "",
    phoneNumber: "",
    email: "",
    password: "",
    checkPassword: "",
    address: "",
    detailAddress: "",
  });

  //주소 모달여닫기
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleComplete = (data: any) => {
    const roadAddr = data.roadAddress;
    let extraRoadAddr = "";

    if (data.bname !== "" && /[동|로|가]$/g.test(data.bname)) {
      extraRoadAddr += data.bname;
    }

    if (data.buildingName !== "" && data.apartment === "Y") {
      extraRoadAddr +=
        extraRoadAddr !== "" ? `, ${data.buildingName}` : data.buildingName;
    }

    if (extraRoadAddr !== "") {
      extraRoadAddr = ` (${extraRoadAddr})`;
    }
    const fullAddress = `${data.roadAddress} ${data.zonecode} `;
    // 주소 정보를 업데이트
    setFormData({
      ...formData,
      address: fullAddress,
    });

    setAddress({
      ...address,
      postcode: data.zonecode,
      roadAddress: roadAddr,
    });

    closeModal(); // 모달을 닫음
  };

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

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const newValidationErrors: Record<keyof FormData, string> = {
      userName: "",
      phoneNumber: "",
      email: "",
      password: "",
      checkPassword: "",
      address: "",
      detailAddress: "",
    };

    for (const fieldName of Object.keys(formData) as Array<keyof FormData>) {
      validateField(fieldName, formData[fieldName]);

      newValidationErrors[fieldName] = validationErrors[fieldName];
    }

    setValidationErrors(newValidationErrors);

    const isFormValid = Object.values(newValidationErrors).every(
      (error) => !error
    );
    const isAnyFieldFilled = Object.values(formData).some(
      (value) => value.trim() !== ""
    );

    if (!!isFormValid && !!isAnyFieldFilled) {
      try {
        const userData = {
          userName: formData.userName,
          phoneNumber: formData.phoneNumber,
          email: formData.email,
          password: formData.password,
          checkPassword: formData.checkPassword, //이거 뺴기
          address: formData.address,
          detailAddress: formData.detailAddress,
        };
        const response = await axios.post(
          "https://pet-commerce.shop/v1/api/users",
          userData
        );
        console.log(response);
        // const token = response.data.token;
        dispatch(successSignUp({ ...userData }));
        // localStorage.setItem("token", token);
        navigate("/login");
        setFormData({
          userName: "",
          phoneNumber: "",
          email: "",
          password: "",
          checkPassword: "",
          address: "",
          detailAddress: "",
        });
        setAddress({
          ...address,
          postcode: "",
          roadAddress: "",
          numberAddress: "",
        });
      } catch (error) {
        console.error("가입 요청 에러:", error);
      }
    }
    console.log(formData);
  };

  /**email중복검사 */
  const handleEmailDuplicateCheck = async (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:8080/v1/api/users", {
        email: formData.email,
      });

      if (response.status === 200) {
        console.log("이메일 중복 검사 통과");
      }
    } catch (error: any) {
      if (error.response && error.response.status === 404) {
        console.log(`에러 메시지: ${error.response.data.errorMessage}`);
      } else {
        console.error("중복 확인 요청 에러:", error);
      }
    }
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
      case "detailAddress":
        if (!value.trim()) {
          error = "상세주소를 입력해주세요";
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
  const isAnyFieldFilled = Object.values(formData).every(
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
          <S.StyledLabel htmlFor="checkPassword">우편번호</S.StyledLabel>
          <S.StyledInput
            type="text"
            name="postcode"
            value={address.postcode}
            onChange={handleChange}
            placeholder="우편번호"
          />
        </S.InputContainer>
        <S.ButtonContainer>
          <S.DuplicateCheckButton
            type="button"
            onClick={openModal} // 모달 열기 버튼
          >
            주소 검색
          </S.DuplicateCheckButton>
        </S.ButtonContainer>
        <S.InputContainer>
          <S.StyledLabel htmlFor="checkPassword">도로명주소</S.StyledLabel>
          <S.StyledInput
            type="text"
            name="roadAddress"
            value={address.roadAddress}
            onChange={handleChange}
            placeholder="도로명주소"
          />
        </S.InputContainer>
        <S.InputContainer>
          <S.StyledLabel htmlFor="checkPassword">상세주소</S.StyledLabel>
          <S.StyledInput
            type="text"
            name="detailAddress"
            value={formData.detailAddress}
            onChange={handleChange}
            onBlur={() => handleBlur("detailAddress")}
            className={validationErrors.detailAddress ? "error" : ""}
            placeholder="상세주소를 입력해주세요."
          />
        </S.InputContainer>
        {validationErrors.detailAddress && (
          <S.StyledSpan className="error-message">
            {validationErrors.detailAddress}
          </S.StyledSpan>
        )}

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

      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>주소 검색</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <DaumPostcodeEmbed onComplete={handleComplete} />
            </ModalBody>
          </ModalContent>
        </Modal>
      )}
    </S.CenteredContainer>
  );
};

export default SignUp;
