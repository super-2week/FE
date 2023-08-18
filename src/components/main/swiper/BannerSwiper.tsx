import React from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import BannerSection from "./BannerSection";

import * as S from "./swiper.style";
import { data } from "./swiper.data";

import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";

const BannerSwiper: React.FC = () => {
  // const [BannerData, setBannerData] = useState([])

  const animalCategory = useSelector(
    (state: RootState) => state.animalCategory.category
  );
  console.log(animalCategory);

  const getBannerData = () => {
    return data.map((item) => (
      <SwiperSlide key={item.categori}>
        <BannerSection item={item} />
      </SwiperSlide>
    ));
  };

  return (
    <S.BannerSwiper>
      <Swiper
        loop={true}
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
        }}
        className="banner-swiper"
      >
        {getBannerData()}
      </Swiper>
    </S.BannerSwiper>
  );
};

export default BannerSwiper;
