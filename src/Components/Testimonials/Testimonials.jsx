"use client";

import React from "react";
import { testimonialsData } from "@/data/testimonialsData";
import ProHeading from "@/ProUI/ProHeading/ProHeading";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import Tilt from 'react-parallax-tilt';
import Style from './Testimonial.module.scss'
import "swiper/css";
import TestimonialCard from "./TestimonialCard";


const Testimonials = () => {
  return (
    <div className="relative">
      <div className={`${Style.wrapper} md:py-10 px-10 pb-20`}>
      <div className="md:mb-14 text-center">
        <ProHeading>See Why People Love iinve</ProHeading>
      </div>

      {/* First Row - Faster Speed */}
      <Swiper
        spaceBetween={10}
        grabCursor={true}
        freeMode={true}
        speed={8000} // Faster speed
        loop={true}
        slidesPerView="auto"
        centeredSlides={true}
        centerInsufficientSlides={true}
        initialSlide={1}
        autoplay={{
          delay: 0.5,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: { slidesPerView: "auto", centeredSlides: true, spaceBetween: 10 },
          480: { slidesPerView: "auto", centeredSlides: true, spaceBetween: 10 },
          767: { slidesPerView: 3, spaceBetween: 10 },
          992: { slidesPerView: 5, spaceBetween: 10 },
        }}
        modules={[Autoplay, FreeMode]}
        className="!py-10"
      >
        {testimonialsData.map((item, index) => (
          <SwiperSlide key={index} className="max-w-md">
            <Tilt
              className="background-stripes parallax-effect-glare-scale"
              perspective={5500}
              scale={1.03}
            >

              <TestimonialCard data={item} />
            </Tilt>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Second Row - Slower Speed */}
      {/* <Swiper
        spaceBetween={10}
        grabCursor={true}
        freeMode={true}
        speed={12000} // Slower speed
        loop={true}
        slidesPerView={5}
        autoplay={{
          delay: 0.5,
          disableOnInteraction: false,
          reverseDirection: true, // Moves opposite to first row
        }}
        breakpoints={{
          0: { slidesPerView: 1, spaceBetween: 20 },
          480: { slidesPerView: 2, spaceBetween: 30 },
          767: { slidesPerView: 3, spaceBetween: 40 },
          992: { slidesPerView: 5, spaceBetween: 10 },
        }}
        modules={[Autoplay, FreeMode]}
        className="!pt-10 mt-5"
      >
        {testimonialsData.map((item, index) => (
          <SwiperSlide key={index} className="max-w-md">
            <TestimonialCard data={item} />
          </SwiperSlide>
        ))}
      </Swiper> */}
    </div>
    </div>
  );
};

export default Testimonials;
