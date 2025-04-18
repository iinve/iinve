"use client";

import { motion } from "framer-motion";
import { default as SwiperCore } from "swiper";
import { Autoplay, EffectCards } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import TemplateCard from "../TemplateCard/TemplateCard";
import { Assets } from "@/assets/assets";


const templateData = [
    {
        id:2,
        image: Assets.templates.galaxy,
        name:"Galaxy",
        template_name:"galaxy",
        price: 0,
        isPro:false,
        isTopSelling: false,
        features: ['AVATAR', 'BANNER', 'NAME', 'BIO', 'ABOUT_INFO', 'COLLAB_BUTTON', 'PORTFOLIO_LINKS', 'SOCIAL_LINKS' ],
        available_features:[
            "Gallery",
            "Custom Links",
            "Banner",
            "Social Media Links",
        ]
    },
    {
        id:1,
        image: Assets.templates.hero_me,
        name:"Hero Me",
        template_name:"hero_me",
        price: 149,
        isPro:true,
        isTopSelling: false,
        features: ['AVATAR', 'NAME', 'BIO', 'GREETING', 'ABOUT_INFO', 'COLLAB_BUTTON', 'PORTFOLIO_LINKS', 'SOCIAL_LINKS', 'GALLERY' ],
        available_features:[
            "Custom Links",
            "Social Media Links",
            "Gallery",
        ]
    },
    {
        id:3,
        image: Assets.templates.jupiter,
        name:"Jupiter",
        template_name:"jupiter",
        isPro: true,
        isTopSelling: false,
        price: 149,
        features: ['AVATAR', 'NAME', 'GREETING', 'BIO', 'ABOUT_INFO', 'COLLAB_BUTTON', 'PORTFOLIO_LINKS', 'SOCIAL_LINKS' ],
        available_features:[
            "Gallery",
            "Custom Links",
            "Social Media Links",
        ]
    },
    {
        id:4,
        image: Assets.templates.stellar,
        name:"Stellar",
        template_name:"stellar",
        isPro: true,
        isTopSelling: true,
        price: 249,
        features: ['AVATAR', 'THEME_EDITOR', 'NAME', 'GREETING', 'BIO', 'ABOUT_INFO', 'COLLAB_BUTTON', 'PORTFOLIO_LINKS', 'SOCIAL_LINKS','VIDEO_LINKS', 'GALLERY' ],
        available_features:[
            "Custom Theme",
            "Custom Text Color",
            "Custom Links",
            "Social Media Links",
            "Gallery",
            "Video Player"
        ]
    },
   
]
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
