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
    list: CartProductBoxProps[];
    onDeleteCart: (cartId: number) => void;
}

const CartProduct = ({ list, onDeleteCart }: listProps) => {

    return (
        <div className="cart_product_container">
            <CartProductTitle/>
            {list?.map((item: CartProductBoxProps, idx: number) => {
                return (
                    <CartProductBox key={idx} item={item} onDeleteCart={onDeleteCart} />
                )
            })}
        </div>
    )
}

export default CartProduct;
