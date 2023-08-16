import React from 'react';
import ProductCount from './ProductCount';

const ProductChoice = () => {
    return (
        <div className="product_choice_container">
            <div className="choice_title_wrapper">
                <span>상품선택</span>
            </div>
            <div className="choice_box_container">
                <div className="product_name_wrapper">
                    <span>주그 높이조절 쳇바퀴</span>
                </div>
                <ProductCount/>
            </div>
        </div>
    )
}

export default ProductChoice;
