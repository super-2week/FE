import React, { useEffect, useState } from "react";
import { StDetail } from "./Detail.style";
import DetailLeft from "../components/global/detailPage/DetailLeft";
import DetailRight from "../components/global/detailPage/DetailRight";
import Review from "../components/global/detailPage/Review";
import axios from "axios";
import { useLocation } from "react-router-dom";

type DetailObject = [
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
];

const DetailPage = () => {

  const { pathname } = useLocation();
  const productId = pathname.slice(9);

  const [detail, setDetail] = useState<DetailObject | undefined>(undefined);

  const loadDetail = () => {
    axios.get(`https://pet-commerce.shop/v1/api/product/detail/${productId}`)
      .then(function (res) {
        const data = res.data;
        setDetail(data);
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
          <DetailLeft img={detail[0]?.imageUrl}/>
          <DetailRight
            animalCategory={detail[0]?.animalCategory}
            description={detail[0]?.description}
            price={detail[0]?.price}
            productName={detail[0]?.productName}
            stock={detail[0]?.stock}
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
