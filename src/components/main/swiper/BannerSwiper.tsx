import React, { useEffect, useState } from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import BannerSection from "./BannerSection";

import * as S from "./swiper.style";

import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { GetBannerData } from "../../../apis/main/banner.api";
import { TodayProduct } from "../type";

const BannerSwiper: React.FC = () => {
  // 현재 동물 카테고리 상태
  const animalCategory = useSelector(
    (state: RootState) => state.animalCategory.category
  );

  const [bannerData, setBannerData] = useState<TodayProduct[]>([]);

  // bannerData가 빈배열이라 autoplay가 안되서 상태관리
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await GetBannerData(animalCategory);
        setBannerData(res);
        setIsLoading(false);
        // console.log(res);
      } catch (error) {
        // console.log(error);
        // return <div>400Error</div>; // suspense
      }
    };

    fetchData();
  }, [animalCategory]);

  const getBannerData = () => {
    return bannerData?.map((item, index) => (
      <SwiperSlide key={index}>
        <BannerSection item={item.product} />
      </SwiperSlide>
    ));
  };

  // console.log(bannerData);

  return (
    <S.BannerSwiper>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <Swiper
          loop={true}
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          className="banner-swiper"
        >
          {getBannerData()}
        </Swiper>
      )}
    </S.BannerSwiper>
  );
};

export default BannerSwiper;
