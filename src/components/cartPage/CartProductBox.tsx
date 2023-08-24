import React, { useEffect, useState } from 'react';
import CartDeleteBtn from './CartDeleteBtn';
import { putCart } from '../../apis/cart/putcart.api';

type CartProductBoxProps = {
    item: {
        cartId: number,
        imageUrl: string,
        price: number,
        productId: number,
        productName: string,
        quantity: number,
        total: number,
    }
    onDeleteCart: (cartId: number) => void;
    changeTotal: (price: number, state: string) => void
}

const CartProductBox = ({ item, onDeleteCart, changeTotal }: CartProductBoxProps) => {

    const token = localStorage.getItem('accesstoken');

    const [total, setTotal] = useState<number|string>(item.total);
    const [count, setCount] = useState<number>(item.quantity);

    console.log(count, total);

    const clickMinus = () => {
        if (count > 1) {
            setCount(prevCount => prevCount - 1);
        }
    }

    const clickPlus = () => {
        if (count >= 1) {
            setCount(prevCount => prevCount + 1);
        }
    }

    /** 한 항목 총 금액 */
    const oneTotal = (count:number) => {
        const price1 = ""+item.price;
        const price = Number(price1.replace(/,/g, ""));
        const total1 = price * count;
        const stringTotal = total1.toLocaleString();
        setTotal(stringTotal);
    }
    
    useEffect(() => {
        if (count !== item.quantity){
            putCart(item.cartId, item.productId, count, token, setCount);
            oneTotal(count);
        }
    }, [count])

    useEffect(()=>{
        setTotal(item.total);
        setCount(item.quantity);
    }, [onDeleteCart])
    
    return (
        <div className="product_box_container">
            <div className="product_img_wrapper">
                <img src={item.imageUrl} alt="상품이미지" />
            </div>
            <div className="product_title_wrapper">
                <span>{item.productName}</span>
            </div>
            <div className="product_price_wrapper">
                <span>{item.price}</span>
            </div>
            <div className="product_count_wrapper">
                <div className="count_btn_container">
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
            </div>
            <div className="product_totalprice_wrapper">
                <span>{total}</span>
            </div>
            <CartDeleteBtn cartId={item.cartId} onDeleteCart={onDeleteCart} />
        </div>
    )
}

export default CartProductBox;
