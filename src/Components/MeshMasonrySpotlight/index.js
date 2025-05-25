"use client";


import { Skeleton } from "@heroui/react";
import { Assets } from "assets/assets";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { getHeading } from "utils/greetingUtils";
import Style from "./MeshMasonrySpotlight.module.scss";

const MeshMasonrySpotlight = ({ isNotSpotlight, data }) => {
  const [isLoaded, setIsLoaded] = useState(false);

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

  const renderColumn = (index, items) => (
    <div className="column" key={index}>
      {items?.map((item, i) => (
        <motion.div
          key={i}
          className={Style.brick}
          style={!isNotSpotlight && { y: calculateY(index) }}
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 1, y: 150 }}
          transition={{ duration: 0.3 }}
          layout
          ref={ref} // Attach ref here
        >
          <Skeleton
            className={`${Style.skelton} rounded-lg`}
            isLoaded={isLoaded}
          >
            <Image
              src={item}
              alt={`Image ${i}`}
              width={800}
              height={800}
              onLoad={() => setIsLoaded(true)}
            />
          </Skeleton>
        </motion.div>
      ))}
    </div>
  );

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

        <div className={`${Style.masonry} flex items-center justify-center mt-4`}>
          {[
            data?.images.slice(0, 1),
            data?.images.slice(1, 3),
            data?.images.slice(3, 5),
            data?.images.slice(7, 8),
          ].map((items, index) => renderColumn(index, items))}
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
