'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const randomOffset = () => ({
  x: (Math.random() - 0.5) * 30,
  y: (Math.random() - 0.5) * 30,
  rotate: (Math.random() - 0.5) * 15,
});

export default function PhotoMessSwiper({ data, delay = 3000 }) {
  const { images } = data;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, delay);
    return () => clearInterval(interval);
  }, [images.length, delay]);

  const stack = [...images.slice(index), ...images.slice(0, index)];

  return (
    <div className="relative h-[300px] w-[200px] mx-auto mt-10">
      {stack.map((src, i) => {
        const zIndex = stack.length - i;
        const isTop = i === 0;
        const offset = randomOffset();

        return (
          <AnimatePresence key={i}>
            <motion.div
              key={i}
              initial={{
                opacity: 0,
                scale: 0.9,
                x: 0,
                y: 0,
                rotate: 0,
                filter: 'brightness(0.7)',
              }}
              animate={{
                opacity: 1,
                scale: 1,
                x: offset.x,
                y: offset.y,
                rotate: isTop ? [0, -5, 5, -5, 5, 0] : offset.rotate,
                filter: isTop ? 'brightness(1)' : 'brightness(0.5)',
                transition: {
                  rotate: isTop
                    ? { type: 'spring', stiffness: 300, damping: 10, duration: 0.6 }
                    : { type: 'spring', stiffness: 120, damping: 20 },
                  filter: { duration: 0.5 },
                  x: { type: 'spring', stiffness: 120, damping: 20 },
                  y: { type: 'spring', stiffness: 120, damping: 20 },
                  scale: { type: 'spring', stiffness: 120, damping: 20 },
                  opacity: { duration: 0.3 },
                },
              }}
              exit={{
                opacity: 0,
                scale: 0.8,
                x: 0,
                y: 0,
                rotate: 0,
                filter: 'brightness(0.7)',
                transition: {
                  type: 'spring',
                  stiffness: 100,
                  damping: 15,
                },
              }}
              className="absolute top-0 left-0 w-full h-full"
              style={{
                zIndex,
              }}
            >

              <div className="w-full h-full shadow-xl rounded-md overflow-hidden">
                <Image
                  src={src}
                  alt={`photo-${i}`}
                  fill
                  className="object-cover rounded-md border-[10px] border-white"
                />
              </div>
            </motion.div>
          </AnimatePresence>
        );
      })}
    </div>
  );
}
