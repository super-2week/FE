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
  const [totalPrice, setTotalPrice] = useState<number>();
  const token = localStorage.getItem("accesstoken");

  const getList = () => {
    Loadcart(0, 10, token, setList);
  }

  const handleDeleteCart = (cartId: number) => {
    const updatedList = list.filter(item => item.cartId !== cartId);
    setList(updatedList);
  }

  useEffect(() => {
    getList();
  }, [])

  /** 카트 리스트 토탈금액 합계 */
  const total = () => {
    let a = 0;
    for (let i = 0; i < list.length; i++){
      const price1 = "" + list[i].total;
      const price = Number(price1.replace(/,/g, ""));
      a += price;
    }
    setTotalPrice(a);
  }

  useEffect(() => {
    total();
  }, [list])

  /** 수량 수정할때 금액도 수정 */
  const changeTotal = (price:number, state:string) => {
    console.log(price, state);
    let change = totalPrice;
    if (state === 'plus' && change !== undefined){
      const a = "" + price;
      const b = Number(a.replace(/,/g, ""));
      console.log('b', b);
      const num = change += b;
      console.log('num', num);
      setTotalPrice(num);
    }
    if (state === 'minus' && change !== undefined){
      const a = "" + price;
      const b = Number(a.replace(/,/g, ""));
      const num = change -= b;
      setTotalPrice(num);
    }
  }

  console.log('totalPrice',totalPrice)

  return (
    <StCart>
      <div className="cart_container">
        <div className="cart_title_wrapper">
          <h1>장바구니</h1>
        </div>
        <CartProduct list={list} onDeleteCart={handleDeleteCart} changeTotal={changeTotal} />
        <CartTotalPrice totalPrice={totalPrice}/>
      </div>
    </StCart>
  )
};

export default CartPage;
