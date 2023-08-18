import React, { useState } from "react";
import * as S from "./AddressInput.style";
import DaumPostcode from "react-daum-postcode";

interface AddressFormProps {
  onAddressChange: (address: string) => void;
}

const AddressForm: React.FC<AddressFormProps> = ({ onAddressChange }) => {
  const [address, setAddress] = useState({
    postcode: "",
    roadAddress: "",
    numberAddress: "",
    detailAddress: "",
    showModal: false,
  });
  // console.log("Updated address:", address);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setAddress({
      ...address,
      [name]: value,
    });

    // console.log(name, value);
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

    setAddress({
      ...address,
      postcode: data.zonecode,
      roadAddress: roadAddr,
      numberAddress: data.jibunAddress,
      detailAddress: data.detailAddress,
      showModal: false,
    });
  };

  const handleButtonClick = () => {
    setAddress({
      ...address,
      showModal: true,
    });
  };

  const postCodeStyle = {
    display: address.showModal ? "block" : "none",
  };
  return (
    <S.Container>
      <S.InputContainer>
        <S.Input
          type="text"
          placeholder="우편번호"
          value={address.postcode}
          onChange={handleChange}
          name="postcode"
        />
        <S.Button
          type="button"
          value="우편번호 찾기"
          onClick={handleButtonClick}
        />
      </S.InputContainer>
      <S.Input
        type="text"
        placeholder="도로명주소"
        value={address.roadAddress}
        onChange={handleChange}
        name="roadAddress"
      />
      <S.Input
        type="text"
        placeholder="지번주소"
        value={address.numberAddress}
        onChange={handleChange}
        name="numberAddress"
      />
      <S.Input
        type="text"
        placeholder="상세주소"
        value={address.detailAddress}
        onChange={handleChange}
        name="detailAddress"
      />
      <DaumPostcode onComplete={handleComplete} style={postCodeStyle} />
    </S.Container>
  );
};

export default AddressForm;
