import ProIcon from "ProUI/Icons/icons";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react';


const ProductCard = ({ data }) => {
  return (
    <div className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-4 w-full h-fit flex flex-col justify-even shadow-lg transition-transform duration-300 ease-in-out cursor-pointer">
    <div className="flex justify-end items-center absolute -top-2 -right-2 !z-10">
      <div className="bg-[#ffb300] backdrop-blur-xl px-4 py-2 rounded-full">
        <span className="text-white font-bold text-[12px] md:text-base w-fit">New</span>
      </div>
    </div>
  
    <div className="w-full h-40 overflow-hidden rounded-xl mb-2">
      <img
        src={data?.image}
        alt={data?.title}
        className="w-full h-full object-cover"
      />
    </div>
    
    <div className="text-white">
      <h3 className="text-base md:text-lg font-semibold truncate text-center">
        {data?.title}
      </h3>
    </div>
  </div>
  
  );
};


const ProductSlider = ({ data }) => {
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
      className='mb-8 !px-4 !py-4'
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