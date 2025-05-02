'use client';
import 'swiper/css';
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react';
import SliderCard from './SliderCard/SliderCard';



function Slider({ data }) {
  return (
    <div className='mt-20'>
      <h2 className='text-center text-2xl mb-4 text-white'>Best offers for you!</h2>
      <Swiper
        spaceBetween={20}
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        speed={8000}
        slidesPerView={1.5}
        modules={[Autoplay]}
      >
        {data?.offers?.map((item, index) => (
          <SwiperSlide key={index}>
            <SliderCard data={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Slider;
