"use client";

import { Skeleton } from "@heroui/react";
import { Assets } from "assets/assets";
import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { getHeading } from "utils/greetingUtils";
import Style from "./MeshMasonrySpotlight.module.scss";

const MeshMasonrySpotlight = ({ isNotSpotlight, data }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const scrollContainerRef = useRef(null);
  const controls = useAnimation();

  const { scrollY } = useScroll();
  const yTransform = useTransform(
    scrollY,
    [0, 1000],
    [window?.innerWidth > 480 ? -50 : 0, 200]
  );

  const calculateY = (index) => {
    return index % 2 === 0 ? yTransform : yTransform.on((value) => -value);
  };

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      setIsLoaded(true);
    }
  }, [inView]);

  // Infinite horizontal scroll animation
  useEffect(() => {
    const startInfiniteScroll = async () => {
      if (scrollContainerRef.current) {
        const scrollWidth = scrollContainerRef.current.scrollWidth;
        const containerWidth = scrollContainerRef.current.offsetWidth;
        const scrollDistance = scrollWidth / 2; // Half because we duplicate content

        // Start the infinite scroll
        await controls.start({
          x: -scrollDistance,
          transition: {
            duration: 35, // Adjust speed here (higher = slower)
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
          },
        });
      }
    };

    // Start animation after a small delay to ensure everything is rendered
    const timer = setTimeout(startInfiniteScroll, 100);
    return () => clearTimeout(timer);
  }, [controls, data]);

  const renderColumn = (index, items, keyPrefix = "") => (
    <div className="column" key={`${keyPrefix}${index}`}>
      {items?.map((item, i) => (
        <motion.div
          key={`${keyPrefix}${i}`}
          className={Style.brick}
          style={!isNotSpotlight && { y: calculateY(index) }}
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 1, y: 150 }}
          transition={{ duration: 0.3 }}
          layout
          ref={ref}
        >
          <Skeleton
            className={`${Style.skelton} rounded-lg`}
            isLoaded={isLoaded}
          >
            <Image
              src={item}
              alt={`Image ${i}`}
              width={200}
              height={200}
              onLoad={() => setIsLoaded(true)}
            />
          </Skeleton>
        </motion.div>
      ))}
    </div>
  );

  // Create the masonry columns data
  const masonryColumns = [
    data?.images.slice(0, 1),
    data?.images.slice(1, 3),
    data?.images.slice(3, 5),
    data?.images.slice(7, 8),
  ];

  return (
    <div className={Style.spotlight}>
      <div className="wrapper">
        {!isNotSpotlight && (
          <div className={Style.nameBox}>
            <span>{getHeading(data)}</span>
            <h4>
              {data?.groom} & {data?.bride}
            </h4>
          </div>
        )}

        {/* Horizontal scroll container */}
        <div 
          className={`${Style.scrollContainer} overflow-hidden mt-4`}
          style={{ width: '100%', position: 'relative' }}
        >
          <motion.div
            ref={scrollContainerRef}
            animate={controls}
            className={`${Style.masonry} flex items-center justify-center`}
            style={{ 
              display: 'flex', 
              width: 'max-content',
              willChange: 'transform'
            }}
          >
            {/* Original content */}
            {masonryColumns.map((items, index) => 
              renderColumn(index, items, "original-")
            )}
            
            {/* Duplicated content for seamless loop */}
            {masonryColumns.map((items, index) => 
              renderColumn(index, items, "duplicate-")
            )}
          </motion.div>
        </div>

        {!isNotSpotlight && (
          <motion.div
            ref={ref}
            className={Style.quote}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <span>&quot;</span>
            <p dangerouslySetInnerHTML={{ __html: data?.quote }}></p>
          </motion.div>
        )}

        <Image src={Assets?.flower} alt="Flower" className={Style.flower} />
      </div>
    </div>
  );
};

export default MeshMasonrySpotlight;