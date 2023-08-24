import React from 'react';
import ProductTitle from './ProductTitle';

const CartProductTitle = () => {

    const titles = ["상품", "가격", "수량", "총 금액"];

    return (
        <div className="product_title_container">
            {titles.map((title, idx) => {
                return (<ProductTitle key={idx} title={title} />)
            })}
            <div className="product_title_wrapper"></div>
        </div>
    )
}

export default CartProductTitle;
