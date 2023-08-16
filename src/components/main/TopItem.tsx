import React from "react";
import * as S from "./main.style";

import Item from "./Item";

const TopItem = () => {
  return (
    <S.TopItem>
      <div className="label-box">
        <h2>주목받는 아이템</h2>
        <span>카테고리별 베스트 TOP</span>
      </div>

      <ul className="item-list">
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </ul>
    </S.TopItem>
  );
};

export default TopItem;
