import React, { useState, useCallback } from "react";
import { ImageInfo } from "./type";
import * as S from "./main.style";

interface ImageProps {
  imgInfo: ImageInfo;
  isRight?: boolean;
}

const ItemImg: React.FC<ImageProps> = ({ imgInfo }) => {
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
      <img src={imgInfo.imgSrc} alt="item-img" />
      {isHovered && (
        <div className="hover-box">
          <div className="hover-content">
            <div className="title">{imgInfo.title}</div>
            {imgInfo.state === "main" && (
              <div className="desc">{imgInfo.desc}</div>
            )}
            <button>More View</button>
          </div>
        </div>
      )}
    </S.GridItemImg>
  );
};

export default ItemImg;
