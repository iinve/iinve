'use client';
import { motion } from "framer-motion";

const PageLoader = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black">
      <div className="relative w-48 h-[2px] bg-neutral-900 overflow-hidden">
        {/* The Scanning Beam */}
        <motion.div
          className="absolute h-full bg-gradient-to-r from-[#08AAD0] to-[#153AA4]"
          initial={{ width: "0%", left: "-100%" }}
          animate={{
            width: ["0%", "50%", "0%"],
            left: ["-50%", "100%"]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        {/* Subtle grid indicators */}
        <div className="flex justify-between w-full px-2 mt-2">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="w-[1px] h-2 bg-neutral-800" />
          ))}
        </div>
      </div>

      {/* Brand Indicator */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute mt-12 text-[10px] tracking-[0.4em] text-neutral-600 font-light"
      >
        IINVE INVITING YOU
      </motion.p>
    </div>
  );
};

export default PageLoader;