import axios from "axios";

import { useAppSelector } from "../../../store/hook";

const BuyBtns = () => {
  const selectCard = useAppSelector((state) => state.sendCart);
  console.log(selectCard);

  const cardBtnHandle = async () => {
    await axios
      .post(
        "https://pet-commerce.shop/v1/api/carts",
        {
          ...selectCard,
        },
        {
          headers: { Authorization: "" },
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="buybtn_container">
      <button className="card_btn" onClick={cardBtnHandle}>
        장바구니 담기
      </button>
      <button className="buy_btn">바로 구매하기</button>
    </div>
  );
};

export default BuyBtns;
