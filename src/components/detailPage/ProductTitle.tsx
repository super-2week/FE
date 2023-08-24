import React from 'react';

type ProductTitleProps = {
    animalCategory: string,
    description: string,
    price: number,
    productName: string,
};

const ProductTitle = ({ animalCategory, description, price, productName }: ProductTitleProps) => {

    console.log(animalCategory, description, price, productName);
    
    return (
        <div className="product_title_container">
            <div className="category_wrapper">
                <span>{animalCategory}</span>
            </div>
            <div className="title_wrapper">
                <h1>{productName}</h1>
            </div>
            <div className="detail_wrapper">
                <span>{description}</span>
            </div>
            <div className="price_wrapper">
                <span>{price}원</span>
            </div>
        </div>
    )
}

export default ProductTitle;
