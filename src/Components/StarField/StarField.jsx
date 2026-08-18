"use client";

import { motion } from "framer-motion";
import Style from "./StarField.module.scss";

// Deterministic pseudo-random layout so server/client markup always match (no Math.random in render).
const STARS = Array.from({ length: 34 }, (_, i) => ({
  left: `${(i * 29.7) % 100}%`,
  top: `${(i * 53.3) % 100}%`,
  size: 1 + ((i * 7) % 3),
  duration: 2.2 + ((i * 3) % 5),
  delay: (i * 0.37) % 4,
}));

const BLOOMS = [
  { size: 340, top: "-6%", left: "-10%", duration: 24, delay: 0 },
  { size: 260, top: "58%", left: "72%", duration: 30, delay: 3 },
  { size: 220, top: "80%", left: "-6%", duration: 26, delay: 5 },
];

const StarField = () => {
  return (
    <div className={Style.field} aria-hidden="true">
      {BLOOMS.map((b, i) => (
        <motion.span
          key={i}
          className={Style.bloom}
          style={{ width: b.size, height: b.size, top: b.top, left: b.left }}
          animate={{ y: [0, -24, 0], x: [0, 16, 0], opacity: [0.25, 0.4, 0.25] }}
          transition={{ duration: b.duration, delay: b.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      {STARS.map((s, i) => (
        <motion.span
          key={i}
          className={Style.star}
          style={{ left: s.left, top: s.top, width: s.size, height: s.size }}
          animate={{ opacity: [0.15, 0.9, 0.15] }}
          transition={{ duration: s.duration, delay: s.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
};

export default StarField;
