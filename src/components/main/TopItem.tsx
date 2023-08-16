import React from "react";
import * as S from "./main.style";

import itemImg from "../../asset/item1.jpg";

const TopItem = () => {
  return (
    <S.TopItem>
      <div className="label-box">
        <h2>주목받는 아이템</h2>
        <span>카테고리별 베스트 TOP</span>
      </div>

      <ul className="item-list">
        <li>
          <img src={itemImg} alt="" />
          <div className="item-meta">
            <div className="title">
              쁘띠 댕댕이 반려동물 매트 고양이 개매트 반려동물
            </div>
            <div className="division"></div>
            <span>32,400원</span>
          </div>
        </li>
        <li>
          <img src={itemImg} alt="" />
          <div className="item-meta">
            <div className="title">
              쁘띠 댕댕이 반려동물 매트 고양이 개매트 반려동물
            </div>
            <div className="division"></div>
            <span>32,400원</span>
          </div>
        </li>
        <li>
          <img src={itemImg} alt="" />
          <div className="item-meta">
            <div className="title">
              쁘띠 댕댕이 반려동물 매트 고양이 개매트 반려동물
            </div>
            <div className="division"></div>
            <span>32,400원</span>
          </div>
        </li>
        <li>
          <img src={itemImg} alt="" />
          <div className="item-meta">
            <div className="title">
              쁘띠 댕댕이 반려동물 매트 고양이 개매트 반려동물
            </div>
            <div className="division"></div>
            <span>32,400원</span>
          </div>
        </li>
        <li>
          <img src={itemImg} alt="" />
          <div className="item-meta">
            <div className="title">
              쁘띠 댕댕이 반려동물 매트 고양이 개매트 반려동물
            </div>
            <div className="division"></div>
            <span>32,400원</span>
          </div>
        </li>
      </ul>
    </S.TopItem>
  );
};

export default TopItem;
