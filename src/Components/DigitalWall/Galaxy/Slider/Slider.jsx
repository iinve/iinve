'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import Style from './Slider.module.scss';
import 'swiper/css';
import SliderCard from './SliderCard/SliderCard';
import { Autoplay, EffectCards } from "swiper/modules";

// Dummy data for example
const templateData = [1, 2, 3];

function Slider() {
    return (
        <div >
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
                <SwiperSlide><SliderCard /></SwiperSlide>
                <SwiperSlide><SliderCard /></SwiperSlide>
                <SwiperSlide><SliderCard /></SwiperSlide>
                <SwiperSlide><SliderCard /></SwiperSlide>
                <SwiperSlide><SliderCard /></SwiperSlide>
                <SwiperSlide><SliderCard /></SwiperSlide>
            </Swiper>
        </div>
    );
}

export default Slider;
