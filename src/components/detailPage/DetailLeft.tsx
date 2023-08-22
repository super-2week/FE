import React from 'react';

type DetailLeftProps = {
    img: string | undefined;
};

const DetailLeft = ({ img }: DetailLeftProps ) => {
    return (
        <div className="left_wrapper">
            <img src={img} alt="상품이미지" />
        </div>
    )
}

export default DetailLeft;
