
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Style from './HomeTemplates.module.scss';
import { Assets } from 'assets/assets';


const HomeTemplates = () => {
  const [positions, setPositions] = useState([
    { top: 0, left: -200, zIndex: 3 },
    { top: 100, left: -150, zIndex: 2 },
    { top: 200, left: -100, zIndex: 1 },
  ]);
  const [isSkewed, setIsSkewed] = useState(false);

  useEffect(() => {
    setIsSkewed(true);

    const interval = setInterval(() => {
      setPositions((prev) => [
        prev[1], 
        prev[2], 
        prev[0], 
      ]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className={Style.Home_template}
      style={{ 
        position: 'relative', 
        width: '100%', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '800px', 
        top: "0" 
      }}
    >
      <div>
        {[Assets?.templates?.stellar, Assets?.templates?.jupiter, Assets?.templates?.hero_me].map((src, index) => (
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
              className="w-[400px] lg:w-[300px] lg:h-[450px] md:w-[200px] md:h-[375px] max-sm:w-[140px] max-sm:h-[250px]"
              alt={`home_${index + 1}`}
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default HomeTemplates;
