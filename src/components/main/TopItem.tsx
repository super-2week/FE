import React from "react";
import * as S from "./main.style";

import Item from "./Item";

const TopItem = () => {
  return (
    <S.TopItem>
      <div className="label-box">
        <div className="label-box-left">
          <h2>주목받는 아이템</h2>
          <span>카테고리별 베스트 TOP</span>
        </div>

        <div className="label-box-right">
          <span>더보기</span>
        </div>
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
