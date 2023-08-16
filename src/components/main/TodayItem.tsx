import React, { useState } from "react";
import * as S from "./main.style";

import itemImg2 from "../../asset/item2.jpg";
import itemImg3 from "../../asset/item3.jpg";
import itemImg4 from "../../asset/item4.jpg";
import ItemImg from "./ItemImg";
import { ImageInfo } from "./type";

const TodayItem: React.FC = () => {
  const imageInfoArray: ImageInfo[] = [
    {
      id: 1,
      imgSrc: itemImg2,
      state: "main",
      title: "루나 베이직 물병식기",
      desc: "보급형 물병은 퍼피의 체형에 맞게 높이 조절 가능. 모든 구성품 분리가 가능해 세척 용이",
    },
    {
      id: 2,
      imgSrc: itemImg3,
      state: "sub",
      title: "반자동급식",
      desc: " 먹은 만큼 사료가 나와 외출 시에도 끼니 걱정 NO!  반려동물이 자율적으로 먹을 수 있어요~",
    },
    {
      id: 3,
      imgSrc: itemImg4,
      state: "sub",
      title: "반려동물 접이식 밥그릇 2p세트",
      desc: "늘렸다 줄였다~ 높이 조절로 편안하게~ 반려동물 휴대용 접이식 밥그릇",
    },
  ];

  return (
    <S.TodayItem>
      <h2>오늘의 추천</h2>
      <div className="item-grid">
        <div className="item-grid-left">
          <ItemImg imgInfo={imageInfoArray[0]} />
        </div>
        <div className="item-grid-right">
          <div className="item-grid-right-top">
            <ItemImg imgInfo={imageInfoArray[1]} />
            <div className="item-grid-right-top_desc">
              <div className="desc-content">
                <div className="title">{imageInfoArray[1].title}</div>
                <div className="desc">{imageInfoArray[1].desc}</div>
              </div>
            </div>
          </div>
          <div className="item-grid-right-bottom">
            <div className="item-grid-right-bottom_desc">
              <div className="desc-content">
                <div className="title">{imageInfoArray[2].title}</div>
                <div className="desc">{imageInfoArray[2].desc}</div>
              </div>
            </div>
            <ItemImg imgInfo={imageInfoArray[2]} isRight />
          </div>
        </div>
      </div>
    </S.TodayItem>
  );
};

export default TodayItem;
