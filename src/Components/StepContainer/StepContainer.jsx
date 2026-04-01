"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { Assets } from "assets/assets";
import Link from "next/link";

const stepCardData = [
  { id: 1, title: "Wedding Invitations", desc: "Design elegant, heartfelt invites with RSVP and photo galleries.", img: Assets.steps.create_account, tag: "Most Popular", accent: "#C8A96E" },
  { id: 2, title: "Business Events", desc: "Sleek digital invitations for product launches and corporate meetups.", img: Assets.steps.user_name, tag: "Professional", accent: "#0D9DC6" },
  { id: 3, title: "Birthday Parties", desc: "Vibrant birthday invites for all age groups with instant RSVP.", img: Assets.steps.tempalate, tag: "Celebration", accent: "#153BA6" },
  { id: 4, title: "Engagements", desc: "Celebrate love by crafting beautiful digital invites with ease.", img: Assets.steps.customize, tag: "Romantic", accent: "#C8A96E" },
  { id: 5, title: "Custom Events", desc: "Housewarming, baby shower, or reunion — fits perfectly.", img: Assets.steps.final_step, tag: "Flexible", accent: "#0D9DC6" },
];


export default function StepContainer() {
  const targetRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const CARD_WIDTH = 420;
  const GAP = 28;
  const totalShift = (stepCardData.length - 1) * (CARD_WIDTH + GAP);

  const rawX = useTransform(scrollYProgress, [0, 1], [0, -totalShift]);
  const x = useSpring(rawX, { stiffness: 60, damping: 22, mass: 0.8 });

  // Active card tracking
  useEffect(() => {
    return scrollYProgress.on("change", (v) => {
      const idx = Math.round(v * (stepCardData.length - 1));
      setActiveIndex(Math.min(Math.max(idx, 0), stepCardData.length - 1));
    });
  }, [scrollYProgress]);

  const accent = stepCardData[activeIndex].accent;

  // Scroll progress bar
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <>
      <section ref={targetRef} className="relative bg-black pt-10" style={{ height: "600vh" }}>
        <div className="container mx-auto px-6 flex items-center gap-3 justify-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mt-6 text-center">
            Explore Events
          </h2>
        </div>

        {/* Progress bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 z-50 h-[2px] origin-left"
          style={{
            scaleX,
            background: `linear-gradient(90deg, ${accent}, #0D9DC6)`,
            boxShadow: `0 0 12px ${accent}`,
          }}
        />

        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          {/* Ambient background orb that shifts with active card */}
          <motion.div
            className="pointer-events-none absolute inset-0 z-0"
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="absolute rounded-full blur-[180px]"
              animate={{
                left: `${10 + activeIndex * 15}%`,
                top: "20%",
                backgroundColor: accent,
              }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              style={{ width: "40vw", height: "40vh", opacity: 0.08 }}
            />
            <div
              className="absolute bottom-0 right-0 rounded-full blur-[200px]"
              style={{ width: "30vw", height: "30vh", background: "#153BA6", opacity: 0.06 }}
            />
          </motion.div>

          {/* Section label */}

          {/* Card strip */}
          <motion.div
            style={{ x, willChange: "transform" }}
            className="flex gap-7 px-[12vw] flex-shrink-0 relative z-10"
          >
            {stepCardData.map((card, index) => (
              <Card
                key={card.id}
                card={card}
                index={index}
                progress={scrollYProgress}
                total={stepCardData.length}
                isActive={activeIndex === index}
              />
            ))}
          </motion.div>

          {/* Dot indicators */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
            {stepCardData.map((c, i) => (
              <motion.div
                key={i}
                animate={{
                  width: activeIndex === i ? 24 : 4,
                  backgroundColor: activeIndex === i ? c.accent : "rgba(255,255,255,0.2)",
                  boxShadow: activeIndex === i ? `0 0 8px ${c.accent}` : "none",
                }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="h-[3px] rounded-full"
              />
            ))}
          </div>

          {/* Scroll hint */}
          <motion.div
            className="absolute bottom-10 right-12 flex items-center gap-3"
            style={{ opacity: useTransform(scrollYProgress, [0, 0.1], [1, 0]) }}
          >
            <span className="text-[9px] uppercase tracking-[0.25em] text-white/25">Scroll</span>
            <svg width="28" height="10" viewBox="0 0 28 10" fill="none" className="text-white/25">
              <path d="M0 5h26M22 1l4 4-4 4" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
            </svg>
          </motion.div>
        </div>
      </section>
    </>
  );
}

const Card = ({ card, index, progress, total, isActive }) => {
  const sliceSize = 1 / total;
  const center = index * sliceSize + sliceSize / 2;
  const [hovered, setHovered] = useState(false);

  // Parallax inner image
  const imageY = useTransform(
    progress,
    [center - sliceSize * 1.5, center + sliceSize * 1.5],
    ["8%", "-8%"]
  );

  const scale = useSpring(
    useTransform(progress, [center - sliceSize, center, center + sliceSize], [0.84, 1, 0.84]),
    { stiffness: 80, damping: 20 }
  );

  const opacity = useTransform(
    progress,
    [center - sliceSize * 1.2, center, center + sliceSize * 1.2],
    [0.35, 1, 0.35]
  );

  const rotateY = useSpring(
    useTransform(progress, [center - sliceSize, center, center + sliceSize], [6, 0, -6]),
    { stiffness: 60, damping: 18 }
  );

  return (
    <motion.div
      style={{ scale, opacity, rotateY, perspective: 1200 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative h-[540px] md:h-[560px] w-[350px] md:w-[420px] flex-shrink-0 cursor-pointer"
    >
      {/* Card glow halo */}
      <motion.div
        className="absolute -inset-px rounded-[36px] opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        style={{
          background: `radial-gradient(ellipse at 50% 0%, ${card.accent}40, transparent 70%)`,
          filter: "blur(1px)",
        }}
      />

      {/* Main card */}
      <div
        className="relative h-full w-full overflow-hidden rounded-[34px] border border-white/[0.07] bg-[#080808]"
        style={{
          boxShadow: isActive
            ? `0 0 0 1px ${card.accent}30, 0 30px 80px -20px ${card.accent}25, 0 0 120px -40px ${card.accent}20`
            : "0 20px 60px -20px rgba(0,0,0,0.8)",
          transition: "box-shadow 0.8s ease",
        }}
      >
        {/* Image area */}
        <div className="relative h-[58%] w-full overflow-hidden">
          <motion.div className="absolute inset-0" style={{ y: imageY }}>
            <motion.img
              src={card.img?.url || card.img}
              alt={card.title}
              className="h-[115%] w-full object-cover"
              animate={{ scale: hovered ? 1.06 : 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            />
          </motion.div>

          {/* Image gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#080808]" />

          {/* Tag pill */}
          <motion.div
            className="absolute top-5 left-5 flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[10px] font-medium uppercase tracking-widest backdrop-blur-md border"
            style={{
              backgroundColor: `${card.accent}18`,
              borderColor: `${card.accent}35`,
              color: card.accent,
            }}
            animate={{ opacity: isActive ? 1 : 0.5 }}
          >
            <span
              className="inline-block h-1.5 w-1.5 rounded-full"
              style={{ backgroundColor: card.accent, boxShadow: `0 0 6px ${card.accent}` }}
            />
            {card.tag}
          </motion.div>
        </div>

        {/* Content */}
        <div className="relative flex h-[42%] flex-col justify-between p-7">
          {/* Large ghost number */}
          <div
            className="pointer-events-none absolute top-0 right-5 select-none font-black leading-none"
            style={{
              fontSize: "8rem",
              opacity: 0.028,
              color: card.accent,
              fontVariantNumeric: "tabular-nums",
              fontStyle: "italic",
            }}
          >
            {String(card.id).padStart(2, "0")}
          </div>

          <div>
            <motion.h3
              className="mb-2.5 text-[1.6rem] font-semibold leading-tight tracking-[-0.02em] text-white"
              animate={{ x: hovered ? 2 : 0 }}
              transition={{ duration: 0.4 }}
            >
              {card.title}
            </motion.h3>
            <p className="text-lg leading-relaxed text-white/70 font-light max-w-[85%]">
              {card.desc}
            </p>
          </div>

          {/* CTA */}
          <motion.div
            className="flex items-center justify-between"
            initial={false}
            animate={{ opacity: isActive ? 1 : 0.4 }}
          >
            <Link
              href="/templates"
              className="group/link flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.18em]"
              style={{ color: card.accent }}
            >
              <span>Explore</span>
              <motion.div
                className="flex items-center overflow-hidden"
                animate={{ width: hovered ? 40 : 20 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="h-px w-full" style={{ backgroundColor: card.accent }} />
                <svg
                  width="6"
                  height="10"
                  viewBox="0 0 6 10"
                  fill="none"
                  style={{ color: card.accent, flexShrink: 0 }}
                >
                  <path d="M1 1l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                </svg>
              </motion.div>
            </Link>

            {/* Card shimmer line */}
            <div
              className="h-px w-12 rounded-full opacity-20"
              style={{ background: `linear-gradient(90deg, transparent, ${card.accent}, transparent)` }}
            />
          </motion.div>
        </div>

        {/* Scanline shimmer on active */}
        {isActive && (
          <motion.div
            className="pointer-events-none absolute inset-0 rounded-[34px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.04, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 1 }}
            style={{
              background: `linear-gradient(135deg, transparent 40%, ${card.accent}80 50%, transparent 60%)`,
            }}
          />
        )}
      </div>
    </motion.div>
  );
};