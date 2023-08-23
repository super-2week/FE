import React from 'react';
import CartProductTitle from './CartProductTitle';
import CartProductBox from './CartProductBox';

type CartProductBoxProps = {
    cartId: number,
    imageUrl: string,
    price: number,
    productId: number,
    productName: string,
    quantity: number,
    total: number,
}

type listProps = {
    list: CartProductBoxProps[] | undefined;
}

const CartProduct = ({list}: listProps) => {

    return (
        <div className="cart_product_container">
            <CartProductTitle/>
            {list?.map((item: CartProductBoxProps, idx: number) => {
                return (
                    <CartProductBox key={idx} item={item}/>
                )
            })}
        </div>
    )
}

export default CartProduct;
