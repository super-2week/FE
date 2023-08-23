import React from 'react';

type DeleteProps = {
    cartId: number
}

const CartDeleteBtn = ({ cartId }: DeleteProps) => {
    return (
        <div className="product_delete_wrapper">
            <button>x</button>
        </div>
    )
}

export default CartDeleteBtn;
