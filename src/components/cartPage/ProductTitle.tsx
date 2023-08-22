import React from 'react';

type ProductTitleProps = {
    title: string;
};

const ProductTitle = ({ title }: ProductTitleProps) => {
  return (
    <div className="product_title_wrapper">
          <span>{title}</span>
    </div>
  )
}

export default ProductTitle;
