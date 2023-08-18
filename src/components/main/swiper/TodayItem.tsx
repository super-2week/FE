import React from "react";
import * as S from "../main.style";

import ItemImg from "../ItemImg";

interface Item {
  id: number;
  imgSrc: string;
  state: string;
  title: string;
  desc: string;
}

interface TodayItemProps {
  item: {
    categori: string;
    item: Item[];
  };
}

const TodayItem: React.FC<TodayItemProps> = ({ item }) => {
  return (
    <S.TodayItem>
      <div className="item-grid">
        <div className="item-grid-left">
          <ItemImg imgInfo={item.item[0]} />
        </div>
        <div className="item-grid-right">
          <div className="item-grid-right-top">
            <ItemImg imgInfo={item.item[1]} />
            <div className="item-grid-right-top_desc">
              <div className="desc-content">
                <div className="title">{item.item[1].title}</div>
                <div className="desc">{item.item[1].desc}</div>
              </div>
            </div>
          </div>
          <div className="item-grid-right-bottom">
            <div className="item-grid-right-bottom_desc">
              <div className="desc-content">
                <div className="title">{item.item[2].title}</div>
                <div className="desc">{item.item[2].desc}</div>
              </div>
            </div>
            <ItemImg imgInfo={item.item[2]} isRight />
          </div>
        </div>
      </div>
    </S.TodayItem>
  );
};

export default TodayItem;
