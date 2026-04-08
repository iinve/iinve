"use client";

import { Assets } from "assets/assets";
import InfoChip from "Components/InfoChip/InfoChip";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { FaRegGem } from "react-icons/fa";
import useWindowDimensions from "utils/useWindowDimensions";


const bentoData = [
  {
    heading: "Elegant Templates",
    sub_heading: "Handcrafted designs for every celebration — weddings, birthdays, and beyond.",
    tag: "50+ designs",
    accent: "#0D9DC6",
    image: { url: Assets.bento.template, style: { width: "65%", right: "-22px", bottom: "100px" } },
    gradient: "from-[#0a1628] via-[#0d1f3c] to-[#071420]",
    gridClass: "col-span-12 md:col-span-5 md:row-span-2",
    mobileOrder: 1,
  },
  {
    heading: "Your Personalization",
    sub_heading: "Every colour, font, and layout — fully yours.",
    tag: "Fully custom",
    accent: "#00C896",
    image: { url: Assets.bento.customize, style: { width: "70%", right: "-30px", bottom: "-20px" } },
    gradient: "from-[#0c0e2a] via-[#111440] to-[#080a1c]",
    gridClass: "col-span-12 md:col-span-7 md:row-span-1",
    mobileOrder: 2,
  },
  {
    heading: "Premium Design",
    sub_heading: "Studio-grade aesthetics, accessible to everyone.",
    tag: "Pro quality",
    accent: "#B96B0C",
    image: { url: Assets.bento.crown, style: { width: "45%", right: "50%", marginRight: "-90px", bottom: "90px" } },
    gradient: "from-[#130e28] via-[#1a1040] to-[#0d0820]",
    gridClass: "col-span-12 md:col-span-4 md:row-span-1",
    mobileOrder: 3,
  },
  {
    heading: "Fast & Secure",
    sub_heading: "Lightning-fast delivery with enterprise-grade security baked in.",
    tag: "100% uptime",
    accent: "#08AAD0",
    image: { url: Assets.bento.speed, style: { width: "60%", left: "56%", bottom: "120px", marginLeft: "-35%" } },
    gradient: "from-[#071a14] via-[#091f18] to-[#04120e]",
    gridClass: "col-span-12 md:col-span-3 md:row-span-1",
    mobileOrder: 4,
  },

];

function BentoCard({ item, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32, scale: 0.96, filter: "blur(6px)" }}
      animate={inView ? { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" } : {}}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: index * 0.08 }}
      className={`${item.gridClass} relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#808080]/20 to-[#000] border border-white/[0.06] group cursor-pointer min-h-[200px] md:min-h-0`}
      style={{ order: item.mobileOrder }}
      whileHover={{ scale: 1.012, transition: { duration: 0.3, ease: "easeOut" } }}
    >
      <div
        className="absolute -top-20 -left-20 w-52 h-52 rounded-full opacity-20 blur-3xl pointer-events-none transition-opacity duration-500 group-hover:opacity-35"
        style={{ background: item.accent }}
      />

      <div
        className="absolute -bottom-12 -right-12 w-36 h-36 rounded-full opacity-10 blur-2xl pointer-events-none"
        style={{ background: item.accent }}
      />

      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div
        className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `linear-gradient(135deg, ${item.accent}18 0%, transparent 60%)`,
          boxShadow: `inset 0 0 0 1px ${item.accent}30`,
        }}
      />

      <div className="relative z-10 p-6 flex flex-col h-full">
        <motion.span
          initial={{ opacity: 0, x: -8 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: index * 0.08 + 0.3, duration: 0.5 }}
          className="inline-flex items-center gap-1.5 self-start mb-auto"
        >
          <span
            className="px-2.5 py-1 rounded-full text-[10px] font-semibold tracking-wider uppercase"
            style={{
              background: `${item.accent}18`,
              color: item.accent,
              border: `1px solid ${item.accent}35`,
            }}
          >
            {item.tag}
          </span>
        </motion.span>

        <div className="mt-auto pt-24">
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.08 + 0.2, duration: 0.55 }}
            className="text-white font-semibold text-lg leading-tight mb-1.5"
          >
            {item.heading}
            <span style={{ color: item.accent }}>.</span>
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.08 + 0.32, duration: 0.55 }}
            className="text-white/40 text-md leading-relaxed"
          >
            {item.sub_heading}
          </motion.p>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 pointer-events-none" style={item.image.style}>
        <Image
          src={item.image.url}
          alt={item.heading}
          width={400}
          height={400}
          className="w-full h-auto object-contain transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04] group-hover:-translate-y-1"
        />
      </div>
    </motion.div>
  );
}

function SectionHeader() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="mb-10 flex flex-col  md:items-start justify-between gap-4"
    >
      <div>
        <InfoChip icon={<FaRegGem />} name={"Why iinve"} isLeft />
        <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mt-6">
          Everything you need,<br />
          <span className="text-white/30">nothing you don&apos;t.</span>
        </h2>
      </div>
      <p className="text-white/50 text-lg max-w-lg leading-relaxed">
        {"Built for modern hosts who care about first impressions — fast, beautiful, and completely personal."}
      </p>
    </motion.div>
  );
}

const Bento = () => {
  const { isMobile } = useWindowDimensions();

  return (
    <section className="relative py-10 md:py-10 px-5 md:px-14 lg:px-24 bg-black overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[radial-gradient(circle,rgba(13,157,198,0.04)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <SectionHeader />
        <div className={`grid gap-4 grid-cols-12 ${!isMobile ? "md:grid-rows-[280px_280px]" : ""}`}>
          {bentoData.map((item, i) => (
            <BentoCard key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bento;