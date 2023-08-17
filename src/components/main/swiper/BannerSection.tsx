import React from "react";
import * as S from "./swiper.style";

interface Item {
  id: number;
  title: string;
  price: string;
  heart: boolean;
}

interface SectionProps {
  item: {
    categori: string;
    desc: string;
    item: Item[];
  };
}

const BannerSection: React.FC<SectionProps> = ({ item }) => {
  const getItemData = () => {
    return item.item.map((el) => (
      <li className="item" key={el.id}>
        <div className="img"></div>
        <div className="title">{el.title}</div>
        <div className="list-bottom">
          <div className="price">{el.price}</div>
          <div className="heart"></div>
        </div>
      </li>
    ));
  };

  return (
    <S.Section>
      <div className="item-meta">
        <div className="item-meta_categori">{item.categori}</div>
        <div className="item-meta_desc">{item.desc}</div>
      </div>
      <ul className="item-list">{getItemData()}</ul>
    </S.Section>
  );
};

export default BannerSection;
