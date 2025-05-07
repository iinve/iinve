"use client";
import React from "react";
import Style from "./WallBanner.module.scss";
import Image from "next/image";
import { Assets } from "assets/assets";
import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay } from "swiper/modules";


const WallBanner = ({ data, color = '#912626', isLightTheme }) => {

  return (
    <Swiper
    spaceBetween={20}
    loop={true}
    autoplay={{
      delay: 3000,
      disableOnInteraction: false,
    }}
    speed={1000}
    slidesPerView={1}
    modules={[Autoplay]}
    >
      {data?.banners?.map((banner, idx) => (
        <SwiperSlide key={idx}>
          <div className={Style.spotlight} style={{'--color': color}}>
            <div className={Style.mesh}>
              <Image
                src={banner?.imagePreview}
                height={300}
                width={300}
                alt="mesh"
              />
            </div>
            <div className={Style.spotlight_content}>
              <h5 dangerouslySetInnerHTML={{ __html: banner?.text }} className={isLightTheme ? 'text-black' : 'text-white'}></h5>
            </div>
          </div>

        </SwiperSlide>
      ))}
    </Swiper>

  );
};

export default WallBanner;
