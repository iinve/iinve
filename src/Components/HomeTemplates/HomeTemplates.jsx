import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Style from './HomeTemplates.module.scss';
import { Assets } from 'assets/assets';
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import { Pagination, Autoplay } from "swiper/modules";


const HomeTemplates = ({ type, isHorizontal = false }) => {
  const [isSkewed, setIsSkewed] = useState(false);
  const [positions, setPositions] = useState([
    { top: 0, left: -200, zIndex: 3 },
    { top: 100, left: -150, zIndex: 2 },
    { top: 200, left: -100, zIndex: 1 },
  ]);

  useEffect(() => {
    if (!isHorizontal) {
      setIsSkewed(true);

      const interval = setInterval(() => {
        setPositions((prev) => [
          prev[1],
          prev[2],
          prev[0],
        ]);
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [isHorizontal]);

  const invitationTemplates = [
    Assets?.templates?.stellar,
    Assets?.templates?.jupiter,
    Assets?.templates?.hero_me,
  ];

  const wallTemplates = [
    Assets?.walls.wall_02,
    Assets?.walls.wall_01,
    Assets?.walls.wall_02,
  ];

  const templateSet = type === "wall" ? wallTemplates : invitationTemplates;

  // Slider row layout
  if (isHorizontal) {
    return (
      <Swiper
        effect="coverflow"
        grabCursor
        centeredSlides
        slidesPerView={3}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 10,
          stretch: 0,
          depth: 150,
          modifier: 2,
          slideShadows: true,
        }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className='w-full'
      >
        {templateSet.map((src, i) => (
          <SwiperSlide key={i} className='w-[110px]'>
            <Image
              src={src}
              alt={`Image ${i}`}
              width={110}
              height={150}
              className='rounded-2xl shadow-2xl'
            // onLoad={() => setIsLoaded(true)}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    );
  }

  // Original stacked layout
  return (
    <motion.div
      className={Style.Home_template}
      style={{ position: 'relative', width: '100%', height: '800px' }}
    >
      <div>
        {templateSet.map((src, index) => (
          <motion.div
            key={index}
            animate={{
              top: positions[index].top,
              left: positions[index].left,
            }}
            transition={{
              type: 'spring',
              stiffness: 180,
              damping: 12,
              mass: 0.5,
            }}
            style={{
              position: 'absolute',
              zIndex: positions[index].zIndex,
              skewX: isSkewed ? '-15deg' : '0deg',
            }}
          >
            <Image
              src={src}
              width={400}
              height={600}
              priority
              className="w-[400px] lg:w-[300px] lg:h-[450px] md:w-[200px] md:h-[375px] max-sm:w-[140px] max-sm:h-[250px] rounded-3xl"
              alt={`home_${index + 1}`}
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default HomeTemplates;