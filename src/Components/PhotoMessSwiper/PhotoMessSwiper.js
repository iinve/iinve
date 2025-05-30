'use client';

import { AnimatePresence, motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const randomOffset = () => ({
  x: (Math.random() - 0.5) * 30,
  y: (Math.random() - 0.5) * 30,
  rotate: (Math.random() - 0.5) * 15,
});

const generateOffsets = (images) => images.map(() => randomOffset());

export default function PhotoMessSwiper({ data, delay = 3000 }) {
  const { images } = data;
  const [index, setIndex] = useState(0);
  const [offsets, setOffsets] = useState(generateOffsets(images));

  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.5 }); // triggers only once

  useEffect(() => {
    setOffsets(generateOffsets(images));
  }, [index]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, delay);
    return () => clearInterval(interval);
  }, [images.length, delay]);

  const MAX_VISIBLE = 4;
  const stack = [...images.slice(index), ...images.slice(0, index)].slice(0, MAX_VISIBLE);

  return (
    <div
      ref={ref}
      className="relative h-[300px] w-[200px] mx-auto mt-10"
    >
      <AnimatePresence initial={false}>
        {inView &&
          stack.map((src, i) => {
            const zIndex = stack.length - i;
            const isTop = i === 0;
            const offset = offsets[i];

            return (
              <motion.div
                key={i}
                initial={{
                  opacity: 0,
                  scale: 0.5,
                  x: 0,
                  y: 0,
                  rotate: 0,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  x: offset.x,
                  y: offset.y,
                  rotate: isTop ? [0, -5, 5, -5, 5, 0] : offset.rotate,
                  filter: isTop ? 'brightness(1)' : 'brightness(0.6)',
                }}
                transition={{
                  rotate: isTop
                    ? { type: 'spring', stiffness: 300, damping: 10 }
                    : { type: 'spring', stiffness: 120, damping: 20 },
                  x: { type: 'spring', stiffness: 120, damping: 20 },
                  y: { type: 'spring', stiffness: 120, damping: 20 },
                  scale: { type: 'spring', stiffness: 120, damping: 20 },
                  opacity: { duration: 0.4 },
                  delay: i * 0.1,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.9,
                  x: 0,
                  y: 0,
                  rotate: 0,
                  transition: {
                    type: 'spring',
                    stiffness: 100,
                    damping: 15,
                  },
                }}
                className="absolute top-0 left-0 w-full h-full"
                style={{
                  zIndex,
                  willChange: 'transform, opacity',
                }}
              >
                <div className="w-full h-full shadow-xl rounded-lg overflow-hidden">
                  <Image
                    src={src}
                    alt={`photo-${i}`}
                    fill
                    className="object-cover rounded-3xl border-[8px] border-white"
                    priority={isTop}
                  />
                </div>
              </motion.div>
            );
          })}
      </AnimatePresence>
    </div>
  );
}
