import React, { useState } from 'react';
import { useAppDispatch } from '../../../store/hook';
import { setPlus, setMinus } from '../../../store/slice/totalPriceSlice';

const ProductCount = () => {

    const dispatch = useAppDispatch();

    const [count, setCount] = useState<number>(1);

    const clickMinus = () => {
        if(count > 1){
            setCount(count - 1);
            dispatch(setMinus(1));
        }
    }
    
    const clickPlus = () => {
        if (count >= 1) {
            setCount(count + 1);
            dispatch(setPlus(1));
        }
    }

    return (
        <div className="product_count_container">
            <div className="count_container">
                <div className="count_min_wrapper">
                    <span onClick={clickMinus}>−</span>
                </div>
                <div className="count_num_wrapper">
                    <span>{count}</span>
                </div>
                <div className="count_plus_wrapper">
                    <span onClick={clickPlus}>+</span>
                </div>
            </div>
            <div className="count_price_wrapper">
                <span>15,000원</span>
            </div>
        </div>
    )
}

export default ProductCount;
