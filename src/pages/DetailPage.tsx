import React from "react";
import { StDetail } from "./Detail.style";
import DetailLeft from "../components/global/detailPage/DetailLeft";
import DetailRight from "../components/global/detailPage/DetailRight";
import Review from "../components/global/detailPage/Review";

const DetailPage = () => {

  return (
    <StDetail>
      <div className="detail_container">
        <div className="top_container">
          <DetailLeft/>
          <DetailRight/>
        </div>
        <div className="bottom_container">
          <Review/>
        </div>
      </div>
    </StDetail>
  )
};



export default DetailPage;
