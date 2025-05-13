import { Card, CardBody, CardFooter, CardHeader, Chip, Tab, Tabs } from "@heroui/react";
import Image from "next/image";
import ProIcon from "ProUI/Icons/icons";
import { useMemo, useState } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react';
import useWindowDimensions from "utils/useWindowDimensions";


const ProductCard = ({ data, isLightTheme = false, color }) => {
  const { isMobile } = useWindowDimensions();
  return (
    <div className="relative bg-white/50 backdrop-blur-lg border rounded-2xl p-4 w-full h-fit flex flex-col justify-even shadow-lg transition-transform duration-300 ease-in-out cursor-pointer" style={{ borderColor: color?.highlight_color }}>
      <div className="flex justify-end items-center absolute -top-2 -right-2 !z-10">
        <div className="backdrop-blur-xl px-4 py-2 rounded-full" style={{ background: color?.highlight_color }}>
          <span className="text-white font-bold text-[12px] md:text-base w-fit flex items-center"><ProIcon name='FaRegGrinStars' size={20} color={color?.theme_color} /> <small className="text-base ml-2">New</small></span>
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
        <h3 className="text-base md:text-lg font-semibold truncate" style={{ color: color?.content_color }}>
          {data?.title}
        </h3>
        <span className="text-sm block w-full opacity-70" style={{ color: color?.content_color }}>{data?.weight}</span>
      </div>
    </div>

  );
};


const ProductSlider = ({ data, color, isLightTheme = false }) => {
  const [selected, setSelected] = useState(data?.categories?.[0]?.name);
  const filteredProducts = data?.products.filter((product) => product.category === selected);
  return (
    <>
      <Tabs aria-label="Options" selectedKey={selected} onSelectionChange={setSelected} className="!px-4 !py-4 flex 
      justify-center" radius="xl" classNames={{
          // tabList: "gap-6 w-full relative rounded-none p-0 border-b border-divider",
          cursor: `w-full bg-[#fff]`,
          tab: "max-w-fit",
          tabContent: `group-data-[selected=true]:text-[#333]`,
        }}
      >
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
                {Array.isArray(filteredProducts) && filteredProducts.length === 0 ? (
                  <div className="flex items-center justify-center"> <Chip
                  color="warning"
                  startContent={<ProIcon name={'IoMdSad'} size={20} />}
                  size="lg"
                >
                  No products found!
                </Chip></div>
                ) : (
                  filteredProducts.map((prod, index) => (
                    <SwiperSlide key={index}>
                      <ProductCard data={prod} isLightTheme={isLightTheme} color={color} />
                    </SwiperSlide>
                  ))
                )}
              </Swiper>
            </Tab>
          )
        })}
      </Tabs>

    </>
  )
}

export default ProductSlider