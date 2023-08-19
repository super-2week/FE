import React, { useEffect, useState } from "react";
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
import { GetBannerData } from "../../../apis/main/banner.api";
import { Product } from "../type";

const BannerSwiper: React.FC = () => {
  const animalCategory = useSelector(
    (state: RootState) => state.animalCategory.category
  );
  // console.log(animalCategory);

  const [bannerData, setBannerData] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await GetBannerData(animalCategory);
        // console.log(res);
        setBannerData(res);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const getBannerData = () => {
    // bannerData로 바꾸기
    return data.map((item, index) => (
      <SwiperSlide key={index}>
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
