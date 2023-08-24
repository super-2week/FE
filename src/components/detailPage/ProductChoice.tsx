import React from 'react';
import ProductCount from './ProductCount';

type ProductChoiceProps = {
    price: number,
    productName: string,
    stock: number,
};

const ProductChoice = ({ price, productName, stock }: ProductChoiceProps) => {
    return (
        <div className="product_choice_container">
            <div className="choice_title_wrapper">
                <span>상품선택</span>
            </div>
            <div className="choice_box_container">
                <div className="product_name_wrapper">
                    <span>{productName}</span>
                </div>
                <ProductCount price={price} stock={stock}/>
            </div>
        </div>
    )
}

export default ProductChoice;
