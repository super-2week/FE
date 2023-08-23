import React, { useEffect, useState } from "react";
import { StCart } from '../pages/Cart.style';
import CartProduct from "../components/cartPage/CartProduct";
import CartTotalPrice from "../components/cartPage/CartTotalPrice";
import { Loadcart } from "../apis/cart/getcart.api";

type CartList = {
  cartId : number,
  imageUrl : string,
  price: number,
  productId: number,
  productName : string,
  quantity: number,
  total: number,
}

const CartPage = () => {

  const [list,setList] = useState<CartList[]>([]);

  const getList = () => {
    const token = localStorage.getItem("accesstoken");
    Loadcart(0, 4, token, setList);
  }

  useEffect(() => {
    getList();
  }, [])

  const handleDeleteCart = (cartId: number) => {
    const updatedList = list.filter(item => item.cartId !== cartId);
    setList(updatedList);
  }

  return (
    <StCart>
      <div className="cart_container">
        <div className="cart_title_wrapper">
          <h1>장바구니</h1>
        </div>
        <CartProduct list={list} onDeleteCart={handleDeleteCart} />
        <CartTotalPrice />
      </div>
    </StCart>
  )
};

export default CartPage;
