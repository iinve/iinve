'use client';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow } from 'swiper/modules';


export function SliderCard({data, color}) {
  return (
    <div className='flex items-center justify-center bg-white/50 backdrop-blur-lg border w-full text-sm md:text-base h-28 md:h-40 overflow-hidden rounded-3xl mx-2 p-4' style={{borderColor:color?.highlight_color, color: color?.content_color}}>
      <p className='' dangerouslySetInnerHTML={{ __html: data?.offer }}></p>
    </div>
  )
}

function Slider({ data, type, isLightTheme = false }) {
  if (type === 'card') {
    return (
      <div className='w-full md:w-1/2 mx-auto'>
        <h2 className={`text-center text-2xl mb-4  font-bold `} style={{color: data?.theme?.highlight_color}}>Best offers for you!</h2>
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
            <SliderCard data={src} color={data?.theme} />
          </SwiperSlide>
        ))}
      </Swiper>

      </div>
    )
  }
  return (
    <div>
      <h2 className='text-center text-2xl mb-4 font-bold' style={{color: data?.theme?.highlight_color}} >Best offers for you!</h2>
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
            <SliderCard data={item} color={data?.theme} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Slider;
