import React from 'react';
import CartDeleteBtn from './CartDeleteBtn';

type CartProductBoxProps = {
    item:{
        cartId: number,
        imageUrl: string,
        price: number,
        productId: number,
        productName: string,
        quantity: number,
        total: number,
    }
    onDeleteCart: (cartId: number) => void;
}

const CartProductBox = ({ item, onDeleteCart } : CartProductBoxProps) => {
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
                      <span>−</span>
                  </div>
                  <div className="count_num_wrapper">
                      <span>{item.quantity}</span>
                  </div>
                  <div className="count_plus_wrapper">
                      <span>+</span>
                  </div>
              </div>
          </div>
          <div className="product_totalprice_wrapper">
              <span>{item.total}</span>
          </div>
          <CartDeleteBtn cartId={item.cartId} onDeleteCart={onDeleteCart} />
      </div>
  )
}

export default CartProductBox;
