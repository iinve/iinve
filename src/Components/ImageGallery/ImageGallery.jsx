"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaXmark } from "react-icons/fa6";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Style from "./ImageGallery.module.scss";

const ImageGallery = ({ images = [] }) => {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const openLightbox = (i) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);
  const showPrev = (e) => {
    e.stopPropagation();
    setLightboxIndex((i) => (i - 1 + images.length) % images.length);
  };
  const showNext = (e) => {
    e.stopPropagation();
    setLightboxIndex((i) => (i + 1) % images.length);
  };

  return (
    <div className={Style.gallery}>
      <Swiper
        modules={[EffectCoverflow, Autoplay]}
        effect="coverflow"
        grabCursor
        centeredSlides
        slidesPerView="auto"
        loop
        autoplay={{ delay: 2800, disableOnInteraction: false }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 130,
          modifier: 2.2,
          slideShadows: false,
        }}
        className={Style.slider}
      >
        {images.map((img, i) => (
          <SwiperSlide key={i} className={Style.slide}>
            <div className={Style.slideImage} onClick={() => openLightbox(i)}>
              <Image src={img} alt={`Moment ${i + 1}`} fill sizes="280px" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* <div className={Style.grid}>
        {images.map((img, i) => (
          <motion.div
            key={i}
            className={Style.gridItem}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
            onClick={() => openLightbox(i)}
          >
            <Image
              src={img}
              alt={`Moment ${i + 1}`}
              fill
              sizes="(max-width: 640px) 50vw, 25vw"
            />
          </motion.div>
        ))}
      </div> */}

      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            className={Style.lightbox}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <button
              className={Style.close}
              onClick={closeLightbox}
              aria-label="Close"
            >
              <FaXmark size={20} />
            </button>
            <button
              className={Style.prev}
              onClick={showPrev}
              aria-label="Previous"
            >
              <FaChevronLeft size={22} />
            </button>

            <motion.div
              key={lightboxIndex}
              className={Style.lightboxImage}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[lightboxIndex]}
                alt={`Moment ${lightboxIndex + 1}`}
                fill
                sizes="90vw"
              />
            </motion.div>

            <button className={Style.next} onClick={showNext} aria-label="Next">
              <FaChevronRight size={22} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ImageGallery;
