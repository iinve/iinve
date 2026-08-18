"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";
import StarField from "Components/StarField/StarField";
import Style from "./BismillahScreen.module.scss";

const HOLD_MS = 2200;

const BismillahScreen = ({ data, onComplete }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const timer = setTimeout(() => onComplete?.(), HOLD_MS);
    return () => {
      document.body.style.overflow = "";
      clearTimeout(timer);
    };
  }, [onComplete]);

  return (
    <motion.div
      className={Style.screen}
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className={Style.flipIn}
        initial={{ rotateY: -110, scale: 1.7, y: -70 }}
        animate={{ rotateY: 0, scale: 1, y: 0 }}
        transition={{ duration: 0.55, ease: [0.7, 0, 0.3, 1] }}
      >
        <StarField />

        <motion.p
          className={Style.arabic}
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -14 }}
          transition={{ duration: 1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          dir="rtl"
          lang="ar"
        >
          {data?.bismillah || "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ"}
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default BismillahScreen;
