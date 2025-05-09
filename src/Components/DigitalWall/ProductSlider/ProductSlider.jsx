import { Card, CardBody, CardFooter, CardHeader, Tab, Tabs } from "@heroui/react";
import Image from "next/image";
import { useMemo, useState } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react';
import useWindowDimensions from "utils/useWindowDimensions";


const ProductCard = ({ data, isLightTheme = false }) => {
  const { isMobile } = useWindowDimensions();
  return (
    <div className="relative bg-white/50 backdrop-blur-lg border border-[#ffb300] rounded-2xl p-4 w-full h-fit flex flex-col justify-even shadow-lg transition-transform duration-300 ease-in-out cursor-pointer">
      <div className="flex justify-end items-center absolute -top-2 -right-2 !z-10">
        <div className="bg-[#ffb300] backdrop-blur-xl px-4 py-2 rounded-full">
          <span className="text-white font-bold text-[12px] md:text-base w-fit">New</span>
        </div>
      </div>

      <div className="w-full overflow-hidden rounded-xl mb-2">
        <Image
          src={data?.imagePreview}
          alt={data?.title}
          className="w-full object-cover h-[100px] md:h-[200px]"
          width={270}
          height={270}
        />
      </div>
      <div className={isLightTheme ? 'text-black' : 'text-white'}>
        <h3 className="text-base md:text-lg font-semibold truncate">
          {data?.title}
        </h3>
        <span className="text-sm block w-full">{data?.weight}</span>
      </div>
    </div>
  
  );
};


const ProductSlider = ({ data, isLightTheme = false }) => {
  const [selected, setSelected] = useState(data?.categories?.[0]?.name);
  const filteredProducts = data?.products.filter((product) => product.category === selected);
  console.log(data?.products)
  return (
    <>
      <Tabs aria-label="Options" selectedKey={selected} onSelectionChange={setSelected} color='warning' className="!px-4 !py-4 flex 
      justify-center" radius="xl"classNames={{
        tabList: "bg-gray-100 text-black",
        tab: "",
        // tabContent: "text-sm font-medium text-black",
        
      }} >
        {data?.categories?.map((category, idx) => {
          return (
            <Tab key={category.name} title={category.name}>
              {/* Filter products based on the selected tab */}
              <Swiper
                spaceBetween={20}
                loop={true}
                autoplay={{
                  delay: 0,
                  disableOnInteraction: false,
                }}
                speed={4000}
                slidesPerView={6}
                breakpoints={{
                  0: {
                    slidesPerView: 2, // mobile
                  },
                  640: {
                    slidesPerView: 4, // tablet and up
                  },
                  560: {
                    slidesPerView: 2, // tablet and up
                  },
                }}
                modules={[Autoplay]}
                className='mb-8 !px-4 !py-4'
              >
                {filteredProducts.map((prod, index) => {
                    console.log(filteredProducts, '==prod')
                    return (
                      <SwiperSlide key={index}>
                        {filteredProducts ? <ProductCard data={prod} isLightTheme={isLightTheme} /> : 'No products found'}
                      </SwiperSlide>
                    )
                  })}
              </Swiper>
            </Tab>
          )
        })}
      </Tabs>

    </>
  )
}

export default ProductSlider