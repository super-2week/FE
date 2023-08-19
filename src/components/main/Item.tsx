import React from "react";
import itemImg from "../../asset/item5.jpg";
import { Product } from "./type";

// interface itemProps {
//   item: Product;
//   // topProductCategory: string;
//   // setTopProductCategory: React.Dispatch<React.SetStateAction<string>>;
// }

const Item: React.FC<Product> = (
  // topProductCategory,
  item
  // setTopProductCategory,
) => {
  // console.log(topProductCategory);
  // console.log(item);

  // const clickTopLabel = (e: React.MouseEvent<HTMLDivElement>) => {
  //   console.log(e.currentTarget);
  //   // setTopProductCategory()
  // };

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
