import React, { useEffect, useState } from 'react';
import BuyBtns from './BuyBtns';
import { useAppSelector } from '../../../store/hook';
import { RootState } from '../../../store/store';

type ProductTotalPriceProps = {
    price: number
};

const ProductToTalPrice = ({ price }: ProductTotalPriceProps) => {

    const totalCount = useAppSelector((state: RootState) => state.totalPrice.count);

    const onePrice = price;
    const [price1, setPrice] = useState<number|string>(0);

    useEffect(()=>{
        sumPrice(totalCount);
    }, [totalCount])

    const sumPrice = (count:number) => {
        const price1 = "" + onePrice;
        const price = Number(price1.replace(/,/g, ""));
        const sum = price *count;
        const stringTotal = sum.toLocaleString();
        setPrice(stringTotal)
    }

    return (
        <div className="product_totalprice_container">
            <div className="totalprice_container">
                <div className="totalprice_title_wrapper">
                    <span>총 상품금액</span>
                </div>
                <div className="totalprice_wrapper">
                    <span>{price1}원</span>
                </div>
            </div>
            <BuyBtns />
        </div>
    )
}

export default ProductToTalPrice;
