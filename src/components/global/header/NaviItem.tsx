import React, { useState } from "react";
import * as S from "../global.style";
import wdog from "../../../asset/dog.png";
import wcat from "../../../asset/cat.png";
import wsmall from "../../../asset/smallAnimal.png";
import bdog from "../../../asset/bluedog.png";
import bcat from "../../../asset/bluecat.png";
import bsmall from "../../../asset/bluesmallAnimal.png";

interface NaviItemProps {
  naviItem: {
    id: string;
    label: string;
  };
  activeState: string;
  onClickNavi: (id: string, e: React.MouseEvent<HTMLElement>) => void;
}

const NaviItem: React.FC<NaviItemProps> = ({
  naviItem,
  activeState,
  onClickNavi,
}) => {
  console.log(naviItem);
  console.log(activeState);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleMouseEnter = () => {
    console.log("들어감");
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    console.log("나옴");
    setIsHovered(false);
  };

  const checkCategory = (category: string) => {
    switch (category) {
      case "dog":
        return isHovered ? bdog : wdog;
      case "cat":
        return isHovered ? bcat : wcat;
      case "small":
        return isHovered ? bsmall : wsmall;
      default:
        return;
    }
  };

  return (
    <li
      key={naviItem.id}
      id={naviItem.id}
      className={activeState === naviItem.id ? "active" : ""}
      onClick={(e) => {
        onClickNavi(naviItem.id, e);
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={checkCategory(naviItem.id)} alt="" />
      {naviItem.label}
    </li>
  );
};

export default NaviItem;