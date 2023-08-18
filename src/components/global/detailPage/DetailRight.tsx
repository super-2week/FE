import React from 'react';
import ProductChoice from './ProductChoice';
import ProductTitle from './ProductTitle';
import ProductToTalPrice from './ProductToTalPrice';

const DetailRight = () => {

    const totalPriceHandle = () => {
        
    }

    return (
        <div className="right_container">
            <ProductTitle/>
            <ProductChoice/>
            <ProductToTalPrice/>
        </div>
    )
}

export default DetailRight;
