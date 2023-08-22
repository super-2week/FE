import React from 'react';
import CartDeleteBtn from './CartDeleteBtn';

const CartProductBox = () => {
  return (
      <div className="product_box_container">
          <div className="product_img_wrapper">
              <img src="" alt="" />
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
          <CartDeleteBtn/>
      </div>
  )
}

export default CartProductBox;
