import React from 'react';
import CartBuyBtn from './CartBuyBtn';

type CartTotalProps = {
    totalPrice: number | undefined
}

const CartTotalPrice = ({ totalPrice }: CartTotalProps) => {

    const localePrice = totalPrice?.toLocaleString();

    return (
        <div className="cart_totalprice_container">
            <div className="totalprice_title_wrapper">
                <span>총 가격</span>
            </div>
            <div className="totalprice_wrapper">
                <span>{localePrice}원</span>
            </div>
            <CartBuyBtn />
        </div>
    )
}

export default CartTotalPrice;
