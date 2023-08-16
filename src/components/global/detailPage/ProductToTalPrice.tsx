import React from 'react';
import BuyBtns from './BuyBtns';

const ProductToTalPrice = () => {
  return (
      <div className="product_totalprice_container">
          <div className="totalprice_container">
              <div className="totalprice_title_wrapper">
                  <span>총 상품금액</span>
              </div>
              <div className="totalprice_wrapper">
                  <span>15,000원</span>
              </div>
          </div>
          <BuyBtns />
      </div>
  )
}

export default ProductToTalPrice;
