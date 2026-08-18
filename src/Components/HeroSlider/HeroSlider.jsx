"use client";

import AnimatedBackground from "Components/AnimatedBackground/AnimatedBackground";
import { motion } from "framer-motion";
import Image from "next/image";
import "swiper/css";
import "swiper/css/effect-fade";
import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { getHeading } from "utils/greetingUtils";
import Style from "./HeroSlider.module.scss";

const HeroSlider = ({ data }) => {
  const images = data?.images || [];

  return (
    <section className={Style.hero}>
      <Swiper
        modules={[EffectFade, Autoplay]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        loop
        speed={1400}
        autoplay={{ delay: 3200, disableOnInteraction: false }}
        className={Style.slider}
      >
        {images.map((img, i) => (
          <SwiperSlide key={i} className={Style.slide}>
            <motion.div
              className={Style.kenBurns}
              initial={{ scale: 1 }}
              animate={{ scale: 1.12 }}
              transition={{ duration: 9, ease: "linear" }}
            >
              <Image
                src={img}
                alt={`Slide ${i + 1}`}
                fill
                priority={i === 0}
                sizes="100vw"
              />
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className={Style.scrim} />
      <AnimatedBackground variant="dark" />

      <div className={Style.overlay}>
        <motion.span
          className={Style.eyebrow}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {getHeading(data)}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
        >
          {data?.groom}
          <span>&amp;</span>
          {data?.bride}
        </motion.h1>

        <motion.div
          className={Style.hairline}
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: 64, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        />
      </div>

      <motion.div
        className={Style.scrollCue}
        initial={{ opacity: 0, x: "-50%" }}
        animate={{ opacity: 1, x: "-50%", y: [0, 8, 0] }}
        transition={{
          opacity: { delay: 1.3, duration: 0.6 },
          y: { duration: 1.8, repeat: Infinity },
        }}
      >
        <span />
        <em>Scroll</em>
      </motion.div>
    </section>
  );
};

export default HeroSlider;
