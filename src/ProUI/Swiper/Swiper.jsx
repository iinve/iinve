"use client";  

import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

export function ProSwiperSlide({ children }) {
  return <SwiperSlide>{children}</SwiperSlide>;
}

export default function ProSwiper({ children, spaceBetween = 20, slidesPerView = 2, loop = true }) {
  return (
    <Swiper spaceBetween={spaceBetween} slidesPerView={slidesPerView} loop={loop}>
      {children}
    </Swiper>
  );
}
