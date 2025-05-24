// components/PhotoSwiper.js
'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const images = [
  'https://images.unsplash.com/photo-1726137065519-c9a1b9eca951?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1747886803344-5c5d24f859b5?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
];
const randomStyle = (i) => ({
  x: Math.sin(i) * 15 + (Math.random() - 0.5) * 20,
  y: Math.cos(i) * 15 + (Math.random() - 0.5) * 20,
  rotate: (Math.random() - 0.5) * 20,
  scale: 1,
  opacity: 1,
  zIndex: 10 - i,
});

export default function PhotoMessSwiper({ delay = 3000 }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, delay);
    return () => clearInterval(interval);
  }, []);

  const stack = [...images.slice(index)];

  return (
    <div className="relative w-[320px] aspect-[3/2] mx-auto mt-10">
      <AnimatePresence initial={false}>
        {stack.map((src, i) => (
          <motion.div
          key={src}
          initial={{
            opacity: 0,
            scale: 0.9,
            rotate: -5,
          }}
          animate={randomStyle(i)}
          exit={{
            opacity: 0,
            scale: 0.8,
            rotate: 5,
          }}
          transition={{
            duration: 0.8,
            ease: 'easeInOut',
          }}
          className="absolute top-0 left-0 w-full h-full"
          style={{ zIndex: images.length - i }}
        >
            <Image
              src={src}
              alt={`photo-${i}`}
              fill
              className="rounded-xl shadow-xl object-cover"
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>

  );
}