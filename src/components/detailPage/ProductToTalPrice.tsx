import React, { useEffect, useState } from 'react';
import { useAppSelector } from '../../store/hook';
import { RootState } from '../../store/store';
import BuyBtns from './BuyBtns';

type ProductTotalPriceProps = {
    price: number
};

const ProductToTalPrice = ({ price }: ProductTotalPriceProps) => {

    const totalCount = useAppSelector((state: RootState) => state.totalPrice.count);

    const [price1, setPrice] = useState<number|string>(0);

    useEffect(()=>{
        sumPrice(totalCount);
    }, [totalCount])

    const sumPrice = (count:number) => {
        const a = "" + price;
        const b = Number(a.replace(/,/g, ""));
        const sum = b *count;
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
