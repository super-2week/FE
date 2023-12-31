import { Deletecart } from "../../apis/cart/deleteCart.api";

type DeleteProps = {
  cartId: number;
  onDeleteCart: (cartId: number) => void;
};

const CartDeleteBtn = ({ cartId, onDeleteCart }: DeleteProps) => {
  const token = localStorage.getItem("accesstoken");

  const deleteCarts = () => {
    Deletecart(cartId, token);
    onDeleteCart(cartId);
  };

  return (
    <div className="product_delete_wrapper">
      <button onClick={deleteCarts}>x</button>
    </div>
  );
};

export default CartDeleteBtn;
