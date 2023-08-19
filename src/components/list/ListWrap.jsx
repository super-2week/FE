import React from "react";
import * as S from "./list.style";
import img1 from "../../asset/item4.jpg";
import img2 from "../../asset/item5.jpg";
import img3 from "../../asset/item6.jpg";
import img4 from "../../asset/item7.jpg";

const ListWrap = () => {
  return (
    <S.ListLayout>
      <S.ListWrap>
        <div className="list-category">
          <span>사료</span>
        </div>
        <div className="list-content">
          <div className="list-content-top">
            <div className="list-meta">
              <div className="list-meta_text">
                총 <span>1412</span>개의 상품이 검색되었습니다.
              </div>
              <ul className="list-meta_filter">
                <li className="active">✔ 최신 순 </li>
                <li>낮은 가격순</li>
                <li>인기 높은 순</li>
              </ul>
            </div>
          </div>

          <ul className="item-list">
            <li>
              <img src={img1} alt="" />
              <div className="item-meta">
                <div className="title">
                  애견간식 건강백서 똑 잘라먹이기 편한 닭고기 160g
                </div>
                <div className="division"></div>
                <span>8,700원</span>
              </div>
            </li>
            <li>
              <img src={img2} alt="" />
              <div className="item-meta">
                <div className="title">
                  애견간식 건강백서 똑 잘라먹이기 편한 닭고기 160g
                </div>
                <div className="division"></div>
                <span>8,700원</span>
              </div>
            </li>
            <li>
              <img src={img3} alt="" />
              <div className="item-meta">
                <div className="title">
                  애견간식 건강백서 똑 잘라먹이기 편한 닭고기 160g
                </div>
                <div className="division"></div>
                <span>8,700원</span>
              </div>
            </li>
            <li>
              <img src={img4} alt="" />
              <div className="item-meta">
                <div className="title">
                  애견간식 건강백서 똑 잘라먹이기 편한 닭고기 160g
                </div>
                <div className="division"></div>
                <span>8,700원</span>
              </div>
            </li>
            <li>
              <img src={img2} alt="" />
              <div className="item-meta">
                <div className="title">
                  애견간식 건강백서 똑 잘라먹이기 편한 닭고기 160g
                </div>
                <div className="division"></div>
                <span>8,700원</span>
              </div>
            </li>
            <li>
              <img src={img2} alt="" />
              <div className="item-meta">
                <div className="title">
                  애견간식 건강백서 똑 잘라먹이기 편한 닭고기 160g
                </div>
                <div className="division"></div>
                <span>8,700원</span>
              </div>
            </li>
            <li>
              <img src={img2} alt="" />
              <div className="item-meta">
                <div className="title">
                  애견간식 건강백서 똑 잘라먹이기 편한 닭고기 160g
                </div>
                <div className="division"></div>
                <span>8,700원</span>
              </div>
            </li>
            <li>
              <img src={img2} alt="" />
              <div className="item-meta">
                <div className="title">
                  애견간식 건강백서 똑 잘라먹이기 편한 닭고기 160g
                </div>
                <div className="division"></div>
                <span>8,700원</span>
              </div>
            </li>
            <li>
              <img src={img2} alt="" />
              <div className="item-meta">
                <div className="title">
                  애견간식 건강백서 똑 잘라먹이기 편한 닭고기 160g
                </div>
                <div className="division"></div>
                <span>8,700원</span>
              </div>
            </li>
            <li>
              <img src={img2} alt="" />
              <div className="item-meta">
                <div className="title">
                  애견간식 건강백서 똑 잘라먹이기 편한 닭고기 160g
                </div>
                <div className="division"></div>
                <span>8,700원</span>
              </div>
            </li>
            <li>
              <img src={img2} alt="" />
              <div className="item-meta">
                <div className="title">
                  애견간식 건강백서 똑 잘라먹이기 편한 닭고기 160g
                </div>
                <div className="division"></div>
                <span>8,700원</span>
              </div>
            </li>
          </ul>
        </div>
      </S.ListWrap>
    </S.ListLayout>
  );
};

export default ListWrap;
