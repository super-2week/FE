import React from 'react';
import ProductChoice from './ProductChoice';
import ProductTitle from './ProductTitle';
import ProductToTalPrice from './ProductToTalPrice';

type DetailRightProps = {
    animalCategory: string,
    description: string,
    price: number,
    productName: string,
    stock: number,
};

const DetailRight = ({ animalCategory, description, price, productName, stock }: DetailRightProps ) => {

    return (
        <div className="right_container">
            <ProductTitle animalCategory={animalCategory} description={description} price={price} productName={productName}/>
            <ProductChoice price={price} productName={productName} stock={stock} />
            <ProductToTalPrice price={price}/>
        </div>
    )
}

export default DetailRight;
