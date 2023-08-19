import React, { useState, useCallback } from "react";
import { ProductImage, TodayProductItem } from "./type";
import * as S from "./main.style";

interface ItemImgProps {
  product: TodayProductItem;
  isRight?: boolean;
  state: string;
}

const ItemImg: React.FC<ItemImgProps> = ({ product, state }) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const mouseHover = useCallback(() => {
    setIsHovered(true);
  }, []);
  const mouseHoverLeave = useCallback(() => {
    setIsHovered(false);
  }, []);

  return (
    <S.GridItemImg
      className="item-grid-item"
      onMouseEnter={mouseHover}
      onMouseLeave={mouseHoverLeave}
    >
      <img src={product.imageUrl} alt="item-img" />
      {isHovered && (
        <div className="hover-box">
          <div className="hover-content">
            <div className="title">{product.productName}</div>
            {state === "main" && (
              <div className="desc">{product.description}</div>
            )}
            <button>More View</button>
          </div>
        </div>
      )}
    </S.GridItemImg>
  );
};

export default ItemImg;
