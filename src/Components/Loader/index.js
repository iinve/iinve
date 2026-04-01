"use client";
import { motion } from "framer-motion";

const Loader = ({ fullScreen = false, className = "", showText = false }) => {
  return (
    <div
      className={`
        ${fullScreen ? "fixed inset-0 z-[9999]" : "absolute inset-0"}
        flex items-center justify-center bg-black
        ${className}
      `}
    >
      <div className="relative w-40 h-[2px] bg-neutral-900 overflow-hidden">
        {/* scanning beam */}
        <motion.div
          className="absolute h-full bg-gradient-to-r from-[#08AAD0] to-[#153AA4]"
          initial={{ width: "0%", left: "-100%" }}
          animate={{
            width: ["0%", "50%", "0%"],
            left: ["-50%", "100%"],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* grid */}
        <div className="flex justify-between w-full px-2 mt-2">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="w-[1px] h-2 bg-neutral-800" />
          ))}
        </div>
      </div>

      {showText && (
        <p className="absolute mt-12 text-[10px] tracking-[0.4em] text-neutral-600">
          LOADING
        </p>
      )}
    </div>
  );
};

export default Loader;
