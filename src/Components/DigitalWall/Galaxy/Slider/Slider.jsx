'use client';
import 'swiper/css';
import SliderCard from './SliderCard/SliderCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow } from 'swiper/modules';



function Slider({ data, type }) {
  if (type === 'card') {
    return (
      <div className='w-full md:w-1/2 mx-auto'>
        <h2 className='text-center text-2xl mb-4 text-white'>Best offers for you!</h2>
        <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 50,
          depth: 100,
          slideShadows: false,
          modifier: 1,
        }}
        modules={[EffectCoverflow, Autoplay]}
        className="mySwiper"
      >
        {data?.offers?.map((src, index) => (
          <SwiperSlide key={index} className="!w-full md:w-[250px] px-6">
            <SliderCard data={src} />
          </SwiperSlide>
        ))}
      </Swiper>

      </div>
    )
  }
  return (
    <div>
      <h2 className='text-center text-2xl mb-4 text-white'>Best offers for you!</h2>
      <Swiper
        spaceBetween={20}
        loop={true}
        autoplay={{
          delay: 1500,
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
