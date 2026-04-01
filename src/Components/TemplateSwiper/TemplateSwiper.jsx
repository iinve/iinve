"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { templateData } from "DB/templateData";


function MarqueeRow({
  items,
  direction = "ltr",
  duration = 32,
  inView,
  delay = 0,
}) {
  const [paused, setPaused] = useState(false);
  // Duplicate items so the seam is invisible
  const tiles = [...items, ...items, ...items];

  return (
    <motion.div
      initial={{ opacity: 0, y: direction === "ltr" ? 16 : -16, filter: "blur(6px)" }}
      animate={
        inView
          ? { opacity: 1, y: 0, filter: "blur(0px)" }
          : { opacity: 0, y: direction === "ltr" ? 16 : -16, filter: "blur(6px)" }
      }
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay }}
      className="overflow-hidden w-full"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="flex gap-4 w-max"
        style={{
          animation: `marquee-${direction} ${duration}s linear infinite`,
          animationPlayState: paused ? "paused" : "running",
          willChange: "transform",
        }}
      >
        {tiles.map((t, i) => (
          <TemplateCard key={i} template={t} />
        ))}
      </div>
    </motion.div>
  );
}


function TemplateCard({ template }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className="
        relative shrink-0 rounded-xl overflow-hidden
        w-[120px] h-[250px]
        border border-white/[0.07]
        bg-white/[0.03]
        group cursor-pointer
        transition-[border-color,box-shadow] duration-300
        hover:border-white/20
        hover:shadow-[0_0_20px_rgba(13,157,198,0.18)]
      "
      style={{ aspectRatio: "110/155" }}
    >
      {!loaded && (
        <div className="absolute inset-0 bg-white/[0.04] animate-pulse rounded-xl" />
      )}

      <Image
        src={template?.image || "/fallback.png"}
        fill
        sizes="110px"
        alt={template?.name || "template"}
        className={`
          object-cover rounded-xl
          transition-[opacity,transform] duration-500
          group-hover:scale-[1.06]
          ${loaded ? "opacity-100" : "opacity-0"}
        `}
        onLoad={() => setLoaded(true)}
        priority={false}
      />

      <div className="
        absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100
        transition-opacity duration-300
        bg-gradient-to-t from-black/50 via-transparent to-transparent
        pointer-events-none
      " />
    </div>
  );
}


const TemplateSwiper = ({ inView }) => {
  const mid = Math.ceil(templateData.length / 2);
  const firstRow = templateData.slice(0, mid);
  const secondRow = templateData.slice(mid);

  return (
    <>
      <style>{`
        @keyframes marquee-ltr {
          from { transform: translateX(0); }
          to   { transform: translateX(calc(-100% / 3)); }
        }
        @keyframes marquee-rtl {
          from { transform: translateX(calc(-100% / 3)); }
          to   { transform: translateX(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee-ltr, .marquee-rtl { animation: none !important; }
        }
      `}</style>

      <div
        className="
          md:w-1/2 w-full space-y-4 py-6 relative
          [mask-image:linear-gradient(to_right,transparent_0%,black_12%,black_88%,transparent_100%)]
        "
      >
        <MarqueeRow
          items={firstRow}
          direction="ltr"
          duration={28}
          inView={inView}
          delay={0}
        />
        <MarqueeRow
          items={secondRow}
          direction="rtl"
          duration={34}
          inView={inView}
          delay={0.15}
        />
      </div>
    </>
  );
};

export default TemplateSwiper;