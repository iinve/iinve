"use client";

import Image from "next/image";
import React from "react";
import BannerImg from "../../../assets/images/glaxy_banner.png";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";

const MainWallBanner = () => {
  return (
    <div className="w-full flex justify-center py-4">
      <Swiper
        className="mySwiper"
        slidesPerView={1}
        loop={true}
        draggable={false}
        spaceBetween={10}
        speed={500}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Autoplay, Pagination]}
      >
        <SwiperSlide>
          <div className="w-full h-[170px] md:h-auto max-w-7xl relative aspect-[3/1]">
            <Image
              src={BannerImg}
              alt="Grocery Shopping Sale"
              fill
              className="object-cover rounded-3xl shadow-lg"
              sizes="100vw"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-full h-[170px] md:h-auto max-w-7xl relative aspect-[3/1]">
            <Image
              src={BannerImg}
              alt="Grocery Shopping Sale"
              fill
              className="object-cover rounded-3xl shadow-lg"
              sizes="100vw"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default MainWallBanner;
