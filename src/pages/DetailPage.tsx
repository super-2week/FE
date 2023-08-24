import React, { useEffect, useState } from "react";
import { StDetail } from "./Detail.style";
import DetailLeft from "../components/detailPage/DetailLeft";
import DetailRight from "../components/detailPage/DetailRight";
import Review from "../components/detailPage/Review";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { useAppDispatch } from "../store/hook";
import { cartProductId } from "../store/slice/sendCartSlice";

type DetailObject = 
  {
    animalCategory:string,
    createdAt:string,
    description:string,
    id:number,
    imageUrl:string,
    liked:boolean,
    modelNum:string,
    originLabel:string,
    price: number,
    productCategory:string,
    productName:string,
    purchaseCount: number,
    stock: number,
    storeName?:string,
    wishCount?: number,
  }
;

const DetailPage = () => {
  const dispatch = useAppDispatch();

  const { pathname } = useLocation();
  const productId = pathname.slice(9);

  const [detail, setDetail] = useState<DetailObject | undefined>(undefined);

  const loadDetail = async() => {
    await axios.get(`https://pet-commerce.shop/v1/api/product/detail/${productId}`)
      .then(function (res) {
        const data = res.data;
        setDetail(data);
        dispatch(cartProductId(parseInt(productId)))
      })
      .catch(function (err) {
        console.log(err);
      })
  }

  useEffect(() => {
    loadDetail();
  }, [])

  if (!detail) {
    return;
  }

  console.log('detail', detail);

  return (
    <StDetail>
      <div className="detail_container">
        <div className="top_container">
          <DetailLeft img={detail?.imageUrl}/>
          <DetailRight
            animalCategory={detail?.animalCategory}
            description={detail?.description}
            price={detail?.price}
            productName={detail?.productName}
            stock={detail?.stock}
          />
        </div>
        <div className="bottom_container">
          <Review/>
        </div>
      </div>
    </StDetail>
  )
};



export default DetailPage;
