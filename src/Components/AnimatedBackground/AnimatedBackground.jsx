"use client";

import { motion } from "framer-motion";
import Style from "./AnimatedBackground.module.scss";

const ORBS = [
  { size: 320, top: "2%", left: "-8%", duration: 26, delay: 0 },
  { size: 220, top: "18%", left: "78%", duration: 22, delay: 2 },
  { size: 260, top: "48%", left: "-10%", duration: 30, delay: 4 },
  { size: 200, top: "68%", left: "82%", duration: 24, delay: 1 },
  { size: 300, top: "86%", left: "10%", duration: 28, delay: 3 },
];

const AnimatedBackground = ({ variant = "light", fixed = false }) => {
  return (
    <div
      className={`${Style.field} ${variant === "dark" ? Style.dark : ""} ${
        fixed ? Style.fixedLayer : ""
      }`}
      aria-hidden="true"
    >
      {ORBS.map((orb, i) => (
        <motion.span
          key={i}
          className={Style.orb}
          style={{
            width: orb.size,
            height: orb.size,
            top: orb.top,
            left: orb.left,
          }}
          animate={{
            y: [0, -30, 0, 30, 0],
            x: [0, 20, 0, -20, 0],
            opacity: [0.35, 0.55, 0.35],
          }}
          transition={{
            duration: orb.duration,
            delay: orb.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      <svg className={Style.linework} viewBox="0 0 400 2400" preserveAspectRatio="none">
        <motion.path
          d="M40,0 C 120,150 -30,320 60,480 C 150,640 -20,820 70,980 C 160,1140 -10,1320 60,1480 C 130,1640 -20,1820 70,1980 C 160,2140 -10,2280 60,2400"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.16 }}
          transition={{ duration: 3, ease: "easeInOut" }}
        />
        <motion.path
          d="M360,0 C 280,150 430,320 340,480 C 250,640 420,820 330,980 C 240,1140 410,1320 340,1480 C 270,1640 420,1820 330,1980 C 240,2140 410,2280 340,2400"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.16 }}
          transition={{ duration: 3, delay: 0.3, ease: "easeInOut" }}
        />
      </svg>
    </div>
  );
};

export default AnimatedBackground;
