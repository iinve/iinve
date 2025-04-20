'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import Style from './Slider.module.scss';
import 'swiper/css';
import SliderCard from './SliderCard/SliderCard';
import { Autoplay, EffectCards } from "swiper/modules";



function Slider({data}) {
    return (
        <div className='mt-20'>
          <h2 className='text-center text-2xl mb-4'>Best offers for you!</h2>
            <Swiper
                spaceBetween={30}
                loop={true}
                autoplay={{
                    delay: 2000,
                    pauseOnMouseEnter: true,
                }}
                modules={[Autoplay, EffectCards]}
                slidesPerView={4}
                freeMode={true}
                speed={8000}
                breakpoints={{
                    320: {
                      slidesPerView: 1,
                    },
                    560: {
                      slidesPerView: 2,
                    },
                    768: {
                      slidesPerView: 3,
                    },
                    1280: {
                      slidesPerView: 4,
                    },
                  }} // Faster speed
            >
              {data?.text_banner?.map((item, index) => (
                <SwiperSlide key={index}><SliderCard data={item} /></SwiperSlide>
              ))}
            </Swiper>
        </div>
    );
}

export default Slider;
