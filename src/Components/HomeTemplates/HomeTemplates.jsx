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
  const [order, setOrder] = useState([0, 1, 2]);
  const [frontIndex, setFrontIndex] = useState(0);

  const [positions, setPositions] = useState([
    { top: 0, left: -200, zIndex: 3 },
    { top: 50, left: -150, zIndex: 2 },
    { top: 100, left: -100, zIndex: 1 },
  ]);

  const handleClick = () => {
    setOrder((prev) => [prev[1], prev[2], prev[0]]);
  };

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
    Assets?.templates?.galaxy,
  ];

  // digital wall tempalte ( not pushing now - discontinued )
  // const wallTemplates = [
  //   Assets?.walls.wall_02,
  //   Assets?.walls.wall_01,
  //   Assets?.walls.wall_02,
  // ];

  const templateSet = invitationTemplates;

  /**
 * Generates stack positions for N cards.
 * Index 0 = furthest back, last index = front.
 */
  const generateStackPositions = (count) => {
    return Array.from({ length: count }, (_, i) => {
      const progress = i / (count - 1);
      const side = i % 2 === 0 ? -1 : 1;

      return {
        rotate: i === count - 1 ? -2 : side * (12 - progress * 8),
        translateY: (1 - progress) * 28,
        translateX: side * (1 - progress) * 12,
        scale: 0.88 + progress * 0.12,
        zIndex: i + 1,
        opacity: 0.65 + progress * 0.35,
      };
    });
  };

  const STACK_POSITIONS = generateStackPositions(templateSet.length);


  // Auto-cycle: rotate front card to back
  useEffect(() => {
    const interval = setInterval(() => {
      setFrontIndex((prev) => (prev + 1) % templateSet.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [templateSet.length]);

  const getPosition = (cardIndex) => {
    // How many steps behind the front is this card? (0 = front)
    const depth = (cardIndex - frontIndex + templateSet.length) % templateSet.length;
    // depth 0 = front, depth count-1 = furthest back
    const positionIndex = templateSet.length - 1 - depth; // flip so higher = closer to front
    return generateStackPositions(templateSet.length)[positionIndex];
  };


  // Slider row layout
  if (false) {
    return null;
  }



  // Original stacked layout
  return (
    // <motion.div
    //   className={Style.Home_template}
    //   style={{ position: 'relative', width: '100%', height: '800px' }}
    // >
    //   <div>
    //     {templateSet.map((src, index) => (
    //       <motion.div
    //         key={index}
    //         animate={{
    //           top: positions[index].top,
    //           left: positions[index].left,
    //         }}
    //         transition={{
    //           type: 'spring',
    //           stiffness: 180,
    //           damping: 12,
    //           mass: 0.2,
    //         }}
    //         style={{
    //           position: 'absolute',
    //           zIndex: positions[index].zIndex,
    //           skewX: isSkewed ? '-15deg' : '0deg',
    //         }}
    //       >
    //         <Image
    //           src={src}
    //           width={400}
    //           height={600}
    //           priority
    //           className="w-[400px] lg:w-[300px] lg:h-[450px] md:w-[200px] md:h-[375px] max-sm:w-[140px] max-sm:h-[250px] rounded-3xl"
    //           alt={`home_${index + 1}`}
    //         />
    //       </motion.div>
    //     ))}
    //   </div>
    // </motion.div>

    <div
      className="relative flex items-center justify-center"
      style={{ width: '100%' }}
      onClick={handleClick}
      role="button"
      aria-label="Cycle invitation cards"
    >
      {templateSet.map((src, cardIndex) => {
        const posIndex = order[cardIndex];
        const pos = getPosition(cardIndex);

        return (
          <motion.div
            key={cardIndex}
            animate={{
              rotate: pos.rotate,
              y: pos.translateY,
              x: pos.translateX,
              scale: pos.scale,
              opacity: pos.opacity,
              zIndex: pos.zIndex,
            }}
            transition={{
              type: 'spring',
              stiffness: 200,
              damping: 18,
              mass: 0.3,
            }}
            style={{
              position: 'absolute',
              transformOrigin: 'center bottom',
              willChange: 'transform',
            }}
          >
            <Image
              src={src}
              width={100}
              height={280}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={posIndex === 2}
              alt={`template_${cardIndex + 1}`}
              className="w-[260px]"
            />
          </motion.div>
        );
      })}
    </div>
  );
};

export default HomeTemplates;

