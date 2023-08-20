import React from "react";
import { Product } from "./type";
import { AiFillHeart } from "react-icons/ai";

const Item: React.FC<Product> = (item) => {
  const checkIsLiked = (item: Product) => {
    return item.liked ? (
      <AiFillHeart className="full-heart" />
    ) : (
      <AiFillHeart className="heart" />
    );
  };
  return (
    <li>
      <img src={item.imageUrl} alt="" />
      <div className="item-meta">
        <div className="title">{item.productName}</div>
        <div className="division"></div>
        <div className="meta">
          <div className="like">{checkIsLiked(item)}</div>
          <span>{item.price}원</span>
        </div>
      </div>
    </li>
  );
};

export default Item;
