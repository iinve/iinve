"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { EffectCoverflow } from "swiper/modules";
import styles from "./LunaGallerySlider.module.scss";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

const images = [
  "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
  "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9",
  "https://images.unsplash.com/photo-1487412912498-0447578fcca8",
];

const LunaGallerySlider = ({ data }) => {
  return (
    <Swiper
      effect="coverflow"
      grabCursor
      centeredSlides
      slidesPerView={3}
      pagination={{ clickable: true }}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2,
        slideShadows: false,
      }}
      modules={[EffectCoverflow, Pagination, Autoplay]}
      className={styles.swiperContainer}
      breakpoints={{
        320: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
    >
      {data.images.map((item, i) => (
        <SwiperSlide key={i} className={styles.swiperSlide}>
          <Image
            src={item}
            alt={`Image ${i}`}
            width={800}
            height={800}
            onLoad={() => setIsLoaded(true)}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default LunaGallerySlider;
