import React from "react";
import itemImg from "../../asset/item1.jpg";

const Item = () => {
  return (
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
  );
};

export default Item;
