import React from 'react'
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react';
import SliderCard from '../Galaxy/Slider/SliderCard/SliderCard';


const ProductCard = ({ data }) => {
  return (
    <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-4 w-full h-64 flex flex-col justify-between shadow-lg transition-transform duration-300 ease-in-out cursor-pointer">
      <div className="w-full h-40 overflow-hidden rounded-xl mb-2">
        <img
          src={data?.image}
          alt={data?.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="text-white">
        <h3 className="text-base md:text-lg font-semibold truncate">{data?.title}</h3>
        <p className="text-yellow-400 font-bold text-sm md:text-base mt-1">₹{data?.price}</p>
      </div>
    </div>
  );
};


const ProductSlider = ({data}) => {
  return (
    <Swiper
    spaceBetween={20}
    loop={true}
    autoplay={{
      delay: 0,
      disableOnInteraction: false,
    }}
    speed={4000}
    slidesPerView={4}
    breakpoints={{
      0: {
        slidesPerView: 2, // mobile
      },
      640: {
        slidesPerView: 4, // tablet and up
      },
    }}
    modules={[Autoplay]}
    className='mb-8 !px-4'
  >
    {data?.products?.map((item, index) => (
      <SwiperSlide key={index}>
        <ProductCard data={item} />
      </SwiperSlide>
    ))}
  </Swiper>
  )
}

export default ProductSlider