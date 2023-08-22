import React from "react";
import { StCart } from '../pages/Cart.style';
import CartProduct from "../components/cartPage/CartProduct";
import CartTotalPrice from "../components/cartPage/CartTotalPrice";

const CartPage = () => {
  return(
    <StCart>
      <div className="cart_container">
        <div className="cart_title_wrapper">
          <h1>장바구니</h1>
        </div>
        <CartProduct/>
        <CartTotalPrice/>
      </div>
    </StCart>
  ) 
};

export default CartPage;
