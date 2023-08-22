import React from "react";
import { StCart } from '../pages/Cart.style';

const CartPage = () => {
  return(
    <StCart>
      <div className="cart_container">
        <div className="cart_title_wrapper">
          <h1>장바구니</h1>
        </div>
        <div className="cart_product_container">
          <div className="product_title_container">
            <div className="product_title_wrapper">
              <span>상품</span>
            </div>
            <div className="product_title_wrapper">
              <span>가격</span>
            </div>
            <div className="product_title_wrapper">
              <span>수량</span>
            </div>
            <div className="product_title_wrapper">
              <span>총 금액</span>
            </div>
            <div className="product_title_wrapper"></div>
          </div>
          <div className="product_box_container">
            <div className="product_img_wrapper">
              <img src="" alt=""/>
            </div>
            <div className="product_title_wrapper">
              <span>쳇바퀴</span>
            </div>
            <div className="product_price_wrapper">
              <span>15,000원</span>
            </div>
            <div className="product_count_wrapper">
              <div className="count_btn_container">
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
            </div>
            <div className="product_totalprice_wrapper">
              <span>15,000원</span>
            </div>
            <div className="product_delete_wrapper">
              <button>x</button>
            </div>
          </div>
        </div>
        <div className="cart_totalprice_container">
          <div className="totalprice_title_wrapper">
            <span>총 가격</span>
          </div>
          <div className="totalprice_wrapper">
            <span>15,000원</span>
          </div>
          <div className="totalprice_btn_wrapper">
            <button>구매하기</button>
          </div>
        </div>
      </div>
    </StCart>
  ) 
};

export default CartPage;
