import React from "react";
import * as S from "../main.style";

import ItemImg from "../ItemImg";
import { TodayProduct } from "../type";

interface TodayItemProps {
  item: TodayProduct;
}

const TodayItem: React.FC<TodayItemProps> = ({ item }) => {
  // console.log(item);

  return (
    <S.TodayItem>
      <div className="item-grid">
        {/* <h2>{item.category}</h2> */}
        <div className="item-grid-left">
          <ItemImg product={item.product[0]} state="main" />
        </div>
        <div className="item-grid-right">
          <div className="item-grid-right-top">
            <ItemImg product={item.product[1]} state="sub" />
            <div className="item-grid-right-top_desc">
              <div className="desc-content">
                <div className="title">{item.product[1].productName}</div>
                <div className="desc">{item.product[1].description}</div>
              </div>
            </div>
          </div>
          <div className="item-grid-right-bottom">
            <div className="item-grid-right-bottom_desc">
              <div className="desc-content">
                <div className="title">{item.product[2].productName}</div>
                <div className="desc">{item.product[2].description}</div>
              </div>
            </div>
            <ItemImg product={item.product[2]} isRight state="sub" />
          </div>
        </div>
      </div>
    </S.TodayItem>
  );
};

export default TodayItem;
