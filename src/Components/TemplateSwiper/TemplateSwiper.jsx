"use client";

import { motion } from "framer-motion";
import { default as SwiperCore } from "swiper";
import { Autoplay, EffectCards } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { templateData } from "../../data/templateData";
import TemplateCard from "../TemplateCard/TemplateCard";

SwiperCore.use([Autoplay, EffectCards]);

const TemplateSwiper = ({ inView }) => {
  const springVariants = {
    hidden: {
      opacity: 0,
      scale: 0.5,
    },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.1, 
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    }),
  };

  return (
    <div className='w-full md:w-[60%] overflow-hidden px-10 md:px-0'>
      <Swiper
        spaceBetween={10}
        loop={true}
        autoplay={{
          delay: 2000,
          pauseOnMouseEnter: true,
        }}
        modules={[Autoplay, EffectCards]}
        effect="cards"
        grabCursor={true}
      >
        {templateData?.map((template, i) => (
          <SwiperSlide key={i} className="flex">
            <motion.div
              custom={i}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={springVariants}
            >
              <TemplateCard template={template} selection={false} isPro={null} />
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TemplateSwiper;
