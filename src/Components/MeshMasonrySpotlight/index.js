"use client";

import {
  motion,
  useScroll,
  useTransform,
  useAnimation,
  useInView,
} from "framer-motion";
import Image from "next/image";
import { useMemo, useEffect, useRef, useState } from "react";
import { Assets } from "assets/assets";
import { getHeading } from "utils/greetingUtils";
import Style from "./MeshMasonrySpotlight.module.scss";

const COLUMN_OFFSETS = [0, 60, 20];

const MeshMasonrySpotlight = ({ isNotSpotlight, data }) => {
  const { scrollY } = useScroll();
  const controls = useAnimation();
  const stripRef = useRef(null);
  const containerRef = useRef(null);
  const sectionRef = useRef(null);
  const [isReady, setIsReady] = useState(false);
  const [colWidth, setColWidth] = useState(100);
  const loadedCount = useRef(0);

  const isMobile =
    typeof window !== "undefined" ? window.innerWidth <= 480 : false;

  const y0 = useTransform(scrollY, [0, 800], [0, isMobile ? 0 : -40]);
  const y1 = useTransform(scrollY, [0, 800], [0, isMobile ? 0 : -70]);
  const y2 = useTransform(scrollY, [0, 800], [0, isMobile ? 0 : -50]);
  const columnParallax = [y0, y1, y2];

  // Framer Motion useInView
  const inView = useInView(sectionRef, { once: true, amount: 0.2 });

  const columns = useMemo(() => {
    const imgs = data?.images ?? [];
    return [imgs.slice(0, 2), imgs.slice(2, 4), imgs.slice(4, 6)];
  }, [data?.images]);

  const totalImages = columns.flat().length * 2;

  useEffect(() => {
    const calculateColWidth = () => {
      if (!containerRef.current) return;
      const containerWidth = containerRef.current.offsetWidth;
      const gap = 12;
      const isMobileView = window.innerWidth <= 480;
      // On desktop use 60% of container, mobile full width
      const effectiveWidth = isMobileView
        ? containerWidth
        : containerWidth * 0.6;
      const width =
        (effectiveWidth - gap * (columns.length - 1)) / columns.length;
      setColWidth(width);
    };

    calculateColWidth();
    window.addEventListener("resize", calculateColWidth);
    return () => window.removeEventListener("resize", calculateColWidth);
  }, [columns.length]);

  const handleImageLoad = () => {
    loadedCount.current += 1;
    if (loadedCount.current >= totalImages) {
      setIsReady(true);
    }
  };

  const startAnimation = () => {
    if (!stripRef.current) return;
    const halfWidth = stripRef.current.scrollWidth / 2;
    controls.start({
      x: [0, -halfWidth],
      transition: {
        duration: 30,
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop",
      },
    });
  };

  useEffect(() => {
    if (!isReady) return;
    const raf = requestAnimationFrame(startAnimation);
    return () => cancelAnimationFrame(raf);
  }, [isReady, colWidth]);

  useEffect(() => {
    if (!isReady || !stripRef.current) return;
    const observer = new ResizeObserver(startAnimation);
    observer.observe(stripRef.current);
    return () => observer.disconnect();
  }, [isReady]);

  const renderColumns = (keyPrefix) =>
    columns.map((colImages, colIndex) => (
      <motion.div
        key={`${keyPrefix}-${colIndex}`}
        className="flex flex-col gap-3 flex-shrink-0"
        style={{
          y: !isNotSpotlight ? columnParallax[colIndex] : 0,
          marginTop: COLUMN_OFFSETS[colIndex],
          width: colWidth,
        }}
      >
        {colImages.map((src, i) => (
          <motion.div
            key={i}
            className="w-full rounded-2xl overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
              delay: colIndex * 0.1 + i * 0.08,
            }}
          >
            <Image
              src={src}
              alt={`Image ${colIndex}-${i}`}
              width={300}
              height={400}
              className="w-full h-auto block object-cover"
              onLoad={handleImageLoad}
            />
          </motion.div>
        ))}
      </motion.div>
    ));

  return (
    <div ref={sectionRef} className={Style.spotlight}>
      <div className="wrapper">
        {!isNotSpotlight && (
          <div className={Style.nameBox}>
            <span>{getHeading(data)}</span>
            <h4>
              {data?.groom} & {data?.bride}
            </h4>
          </div>
        )}

        <div ref={containerRef} className="w-full overflow-hidden py-4">
          <motion.div
            ref={stripRef}
            animate={controls}
            className="flex gap-3 items-start"
            style={{ width: "max-content", willChange: "transform" }}
          >
            {renderColumns("original")}
            {renderColumns("duplicate")}
          </motion.div>
        </div>

        {!isNotSpotlight && (
          <motion.div
            className={Style.quote}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          >
            <span>&quot;</span>
            <p dangerouslySetInnerHTML={{ __html: data?.quote }} />
          </motion.div>
        )}

        <Image src={Assets?.flower} alt="Flower" className={Style.flower} />
      </div>
    </div>
  );
};

export default MeshMasonrySpotlight;
