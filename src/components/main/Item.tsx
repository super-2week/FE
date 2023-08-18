import React from "react";
import itemImg from "../../asset/item5.jpg";
import { Product } from "./type";

const Item: React.FC<Product> = (item) => {
  // console.log(item);
  return (
    <li>
      <img src={item.imageUrl} alt="" />
      <div className="item-meta">
        <div className="title">{item.productName}</div>
        <div className="division"></div>
        <span>{item.price}원</span>
      </div>
    </li>
  );
};

export default Item;
