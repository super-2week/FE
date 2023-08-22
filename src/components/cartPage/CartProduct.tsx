import React from 'react';
import CartProductTitle from './CartProductTitle';
import CartProductBox from './CartProductBox';

const CartProduct = () => {

    return (
        <div className="cart_product_container">
            <CartProductTitle/>
            <CartProductBox/>
        </div>
    )
}

export default CartProduct;
