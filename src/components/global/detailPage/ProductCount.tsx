import React from 'react';

const ProductCount = () => {
    return (
        <div className="product_count_container">
            <div className="count_container">
                <div className="count_min_wrapper">
                    <span>−</span>
                </div>
                <div className="count_num_wrapper">
                    <span>1</span>
                </div>
                <div className="count_plus_wrapper">
                    <span>+</span>
                </div>
            </div>
            <div className="count_price_wrapper">
                <span>15,000원</span>
            </div>
        </div>
    )
}

export default ProductCount;
