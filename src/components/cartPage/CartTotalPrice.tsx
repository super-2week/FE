import React from 'react';
import CartBuyBtn from './CartBuyBtn';

const CartTotalPrice = () => {
  return (
      <div className="cart_totalprice_container">
          <div className="totalprice_title_wrapper">
              <span>총 가격</span>
          </div>
          <div className="totalprice_wrapper">
              <span>15,000원</span>
          </div>
          <CartBuyBtn/>
      </div>
  )
}

export default CartTotalPrice;
