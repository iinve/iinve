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
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <StarField />

      <motion.p
        className={Style.arabic}
        initial={{ opacity: 0, y: 26 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -14 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        dir="rtl"
        lang="ar"
      >
        {data?.bismillah || "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ"}
      </motion.p>
    </motion.div>
  );
};

export default BismillahScreen;
