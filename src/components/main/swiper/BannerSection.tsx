import React from "react";
import * as S from "./swiper.style";
import { TodayProductItem } from "../type";

interface SectionProps {
  item: TodayProductItem[];
}

const BannerSection: React.FC<SectionProps> = ({ item }) => {
  /** 카테고리 앞글자 대문자로 바꾸는 함수 */
  const changeCapital = (category: string) => {
    const firstChar = category[0].toUpperCase();
    const restOfText = category.slice(1);
    return firstChar + restOfText;
  };

  // /** 카테고리별 설명 추가해주는 함수 */
  const createCategoryDesc = (category: string) => {
    switch (category) {
      case "food":
        return (
          <div className="desc-box">
            <p>반려 동물의 행복은 우리의 행복입니다.</p>
            <p>
              품질과 다양성이 함께하는 곳, 당신의 사료 선택이 반려동물의 행복을
              만듭니다.
            </p>
            <p> 지금 만나보세요</p>
          </div>
        );
      case "snack":
        return (
          <div className="desc-box">
            <p>오늘은 간식을 즐기는 날</p>
            <p>풍부한 맛과 신선한 재료로 만든 간식을 즐겨보세요.</p>
            <p>반려동물들의 입맛을 사로잡을 것입니다!</p>
          </div>
        );
      case "clean":
        return (
          <div className="desc-box">
            <p>즐거운 욕실 라이프를 지향합니다.</p>
            <p>또한 반려동물이 섭취할 가능성을 고려해</p>
            <p>안전성이 통과된 상품만 취급을 하고 있습니다.</p>
          </div>
        );
      case "cloth":
        return (
          <div className="desc-box">
            <p>내 아이를 더 사랑스럽게,</p>
            <p>내 아이를 더 안전하게,</p>
            <p>내 아이 옷 예쁘게 챙겨 보세요.</p>
          </div>
        );
      case "tableware":
        return (
          <div className="desc-box">
            <p>
              저희의 반려동물 급식기는 현대적 디자인과 혁신적인 기능이 조화를
              이루어,
            </p>
            <p>
              당신의 반려친구에게 더욱 편리하고 건강한 식사 환경을 제공합니다.
            </p>
          </div>
        );
      case "house":
        return (
          <div className="desc-box">
            <p>아이들의 편안한 보금자리,</p>
            <p>안전성을 중시한 다양한 울타리,</p>
            <p>아이들의 스트레스, 안전을 동시에 챙겨보세요.</p>
          </div>
        );
      case "equipment":
        return (
          <div className="desc-box">
            <p>건강한 운동과 스트레스 해소, 이 기구 하나로 완벽하게!</p>
            <p>안전하고 튼튼한 소재로 제작된, 사랑가득한 당신의 선택!</p>
            <p>
              당신의 사랑스러운 반려동물을 위한 장난감으로 더 즐거운 시간을
              만들어보세요!
            </p>
          </div>
        );

      default:
        return;
    }
  };

  /** item list return하는 함수 */
  const getItemData = () => {
    return item.map((el) => (
      <li className="item" key={el.id}>
        <img src={el.imageUrl} alt="img" />
        <div className="title">{el.productName}</div>
        <div className="list-bottom">
          <div className="price">{el.price}원</div>
          <div className="heart"></div>
        </div>
      </li>
    ));
  };

  return (
    <S.Section>
      <div className="item-meta">
        <div className="item-meta_categori">
          {changeCapital(item[0].productCategory)}
        </div>
        <div className="item-meta_desc">
          {createCategoryDesc(item[0].productCategory)}
        </div>
      </div>
      <ul className="item-list">{getItemData()}</ul>
    </S.Section>
  );
};

export default BannerSection;
