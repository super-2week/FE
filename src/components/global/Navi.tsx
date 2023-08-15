import React from "react";
import * as S from "./globa.style";

const Navi = () => {
  return (
    <S.NaviWrap>
      <li className="active">강아지</li>
      <li>고양이</li>
      <li>소동물</li>
      <li>기타</li>
    </S.NaviWrap>
  );
};

export default Navi;
