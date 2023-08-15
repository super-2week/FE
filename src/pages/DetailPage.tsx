import React from "react";
import { StDetail } from "./Detail.style";

const DetailPage = () => {

  return (
    <StDetail>
      <div className="detail_container">
        <div className="top_container">
          <div className="left_wrapper">
            <img src="" alt="" />
          </div>
          <div className="right_container">
            <div className="product_title_container">
              <div className="category_wrapper">
                <span>소동물용품</span>
              </div>
              <div className="title_wrapper">
                <h1>주그 높이조절 쳇바퀴</h1>
              </div>
              <div className="detail_wrapper">
                <span>높이가 조절되는 신개념 쳇바퀴</span>
              </div>
              <div className="price_wrapper">
                <span>15,000원</span>
              </div>
            </div>
            <div className="product_choice_container">
              <div className="choice_title_wrapper">
                <span>상품선택</span>
              </div>
              <div className="choice_box_container">
                <div className="product_name_wrapper">
                  <span>주그 높이조절 쳇바퀴</span>
                </div>
                <div className="product_count_container">
                  <div className="count_container">
                    <div className="count_min_wrapper">
                      <span>−</span>
                    </div>
                    <div className="count_num_wrapper">
                      <span>1</span>
                    </div>
                    <div className="count_plus_wrapper">
                      <span>+</span>
                    </div>
                  </div>
                  <div className="count_price_wrapper">
                    <span>15,000원</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="product_totalprice_container">
              <div className="totalprice_container">
                <div className="totalprice_title_wrapper">
                  <span>총 상품금액</span>
                </div>
                <div className="totalprice_wrapper">
                  <span>15,000원</span>
                </div>
              </div>
              <div className="buybtn_container">
                <button className="card_btn">장바구니 담기</button>
                <button className="buy_btn">바로 구매하기</button>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom_container">
          <div className="review_cointainer">
            <div className="review_title_cointainer">
              {/* <div className="title_cointainer"> */}
              <span>상품 후기</span>
              <button>후기 작성</button>
              {/* </div> */}
            </div>
            <div className="review_box_container">
              <div className="review_name_wrapper">
                <span>wh****</span>
              </div>
              <div className="review_img_wrapper">
                <img src="" alt="" />
              </div>
              <div className="review_detail_container">
                <div className="review_productname_wrapper">
                  <span>주그 높이조절 쳇바퀴</span>
                </div>
                <div className="review_detail_wrapper">
                  <span>아이에 맞게 조절할 수 있어서 너무 좋아요. 추천합니다b</span>
                </div>
                <div className="review_date_wrapper">
                  <span>2023.08.15</span>
                </div>
              </div>
            </div>
            <div className="review_box_container">
              <div className="review_name_wrapper">
                <span>wh****</span>
              </div>
              <div className="review_img_wrapper">
                <img src="" alt="" />
              </div>
              <div className="review_detail_container">
                <div className="review_productname_wrapper">
                  <span>주그 높이조절 쳇바퀴</span>
                </div>
                <div className="review_detail_wrapper">
                  <span>아이에 맞게 조절할 수 있어서 너무 좋아요. 추천합니다b</span>
                </div>
                <div className="review_date_wrapper">
                  <span>2023.08.15</span>
                </div>
              </div>
            </div>
            <div className="review_box_container">
              <div className="review_name_wrapper">
                <span>wh****</span>
              </div>
              <div className="review_img_wrapper">
                <img src="" alt="" />
              </div>
              <div className="review_detail_container">
                <div className="review_productname_wrapper">
                  <span>주그 높이조절 쳇바퀴</span>
                </div>
                <div className="review_detail_wrapper">
                  <span>아이에 맞게 조절할 수 있어서 너무 좋아요. 추천합니다b</span>
                </div>
                <div className="review_date_wrapper">
                  <span>2023.08.15</span>
                </div>
              </div>
            </div>
            <div className="review_pagenation_container">
              <div className="review_pagenation_prev_wrapper">
                <span>{"<"}</span>
              </div>
              <div className="review_pagenation_next_wrapper">
                <span>{">"}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StDetail>
  )
};



export default DetailPage;
