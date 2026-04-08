"use client";
import React, { useRef, useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
} from "framer-motion";
import { Assets } from "assets/assets";
import Link from "next/link";
import Image from "next/image";

const EASE = [0.22, 1, 0.36, 1];

const stepCardData = [
  { id: 1, title: "Wedding Invitations", desc: "Design elegant, heartfelt invites with RSVP and photo galleries.", img: Assets.steps.create_account, tag: "Most Popular", accent: "#C8A96E" },
  { id: 2, title: "Business Events", desc: "Sleek digital invitations for product launches and corporate meetups.", img: Assets.steps.user_name, tag: "Professional", accent: "#0D9DC6" },
  { id: 3, title: "Birthday Parties", desc: "Vibrant birthday invites for all age groups with instant RSVP.", img: Assets.steps.tempalate, tag: "Celebration", accent: "#153BA6" },
  { id: 4, title: "Engagements", desc: "Celebrate love by crafting beautiful digital invites with ease.", img: Assets.steps.customize, tag: "Romantic", accent: "#C8A96E" },
  { id: 5, title: "Custom Events", desc: "Housewarming, baby shower, or reunion — fits perfectly.", img: Assets.steps.final_step, tag: "Flexible", accent: "#0D9DC6" },
];

const CARD_W = 420;
const GAP = 28;
const TOTAL_SHIFT = (stepCardData.length - 1) * (CARD_W + GAP);

export default function StepContainer() {
  const targetRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  // ── NO spring on x — direct transform, zero lag ──
  const x = useTransform(scrollYProgress, [0, 1], [0, -TOTAL_SHIFT]);

  // Spring only for the progress bar (decorative, lag is fine there)
  const progressBar = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  useEffect(() => {
    return scrollYProgress.on("change", (v) => {
      const idx = Math.round(v * (stepCardData.length - 1));
      setActiveIndex(Math.min(Math.max(idx, 0), stepCardData.length - 1));
    });
  }, [scrollYProgress]);

  const activeAccent = stepCardData[activeIndex].accent;

  return (
    <section
      ref={targetRef}
      className="relative bg-black"
      // 300vh gives a snappier feel — enough scroll room without dragging
      style={{ height: "350vh" }}
    >
      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 z-50 h-[2px] origin-left"
        style={{
          scaleX: progressBar,
          background: `linear-gradient(90deg, ${activeAccent}, #0D9DC6)`,
          boxShadow: `0 0 10px ${activeAccent}80`,
        }}
      />

      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">

        {/* Ambient orb — CSS transition, not Framer, zero cost */}
        <div
          className="pointer-events-none absolute rounded-full blur-[160px] transition-all duration-[1200ms] ease-out"
          style={{
            width: "45vw",
            height: "45vh",
            top: "15%",
            left: `${8 + activeIndex * 14}%`,
            backgroundColor: activeAccent,
            opacity: 0.07,
          }}
        />
        <div
          className="pointer-events-none absolute bottom-0 right-0 rounded-full blur-[200px]"
          style={{ width: "30vw", height: "30vh", background: "#153BA6", opacity: 0.05 }}
        />

        {/* Heading */}
        <div className="relative z-10 text-center mb-10 pt-4">
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter leading-none">
            Explore Events
          </h2>
        </div>

        {/* Card strip — x is direct, no spring */}
        <div className="relative z-10 flex items-center">
          <motion.div
            style={{ x, willChange: "transform" }}
            className="flex gap-7 px-[calc((100vw-420px)/2)] flex-shrink-0"
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
        </div>

        {/* Dot indicators */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
          {stepCardData.map((c, i) => (
            <div
              key={i}
              className="h-[3px] rounded-full transition-all duration-500 ease-out"
              style={{
                width: activeIndex === i ? 28 : 6,
                backgroundColor: activeIndex === i ? c.accent : "rgba(255,255,255,0.15)",
                boxShadow: activeIndex === i ? `0 0 8px ${c.accent}` : "none",
              }}
            />
          ))}
        </div>

        {/* Scroll hint — fades out after first card */}
        <motion.div
          className="absolute bottom-10 right-12 flex items-center gap-2"
          style={{ opacity: useTransform(scrollYProgress, [0, 0.12], [1, 0]) }}
        >
          <span className="text-[9px] uppercase tracking-[0.25em] text-white/25">Scroll</span>
          <svg width="28" height="10" viewBox="0 0 28 10" fill="none" className="text-white/25">
            <path d="M0 5h26M22 1l4 4-4 4" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}

// ── Card: only scale + opacity use spring, nothing else ──
const Card = ({ card, index, progress, total, isActive }) => {
  const [hovered, setHovered] = useState(false);
  const sliceSize = 1 / total;
  const center = index * sliceSize + sliceSize / 2;

  // Parallax image — direct transform, no spring
  const imageY = useTransform(
    progress,
    [center - sliceSize, center + sliceSize],
    ["6%", "-6%"]
  );

  // Scale — light spring only
  const rawScale = useTransform(
    progress,
    [center - sliceSize, center, center + sliceSize],
    [0.88, 1, 0.88]
  );
  const scale = useSpring(rawScale, { stiffness: 160, damping: 28, mass: 0.6 });

  // Opacity — direct, no spring (springs on opacity look muddy)
  const opacity = useTransform(
    progress,
    [center - sliceSize * 1.1, center, center + sliceSize * 1.1],
    [0.3, 1, 0.3]
  );

  // Subtle Y lift on active — direct
  const y = useTransform(
    progress,
    [center - sliceSize, center, center + sliceSize],
    [20, 0, 20]
  );

  return (
    <motion.div
      style={{ scale, opacity, y }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative h-[520px] md:h-[560px] w-[350px] md:w-[420px] flex-shrink-0 cursor-pointer"
    >
      {/* Hover glow rim */}
      <motion.div
        className="absolute -inset-px rounded-[36px] pointer-events-none"
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        style={{
          background: `radial-gradient(ellipse at 50% 0%, ${card.accent}35, transparent 65%)`,
        }}
      />

      <div
        className="relative h-full w-full overflow-hidden rounded-[32px] border border-white/[0.06] bg-[#080808]"
        style={{
          boxShadow: isActive
            ? `0 0 0 1px ${card.accent}25, 0 24px 70px -16px ${card.accent}20`
            : "0 16px 50px -16px rgba(0,0,0,0.7)",
          transition: "box-shadow 0.6s ease",
        }}
      >
        {/* Image */}
        <div className="relative h-[58%] w-full overflow-hidden">
          <motion.div className="absolute inset-[-10%]" style={{ y: imageY }}>
            <Image
              src={card.img?.url || card.img}
              alt={card.title}
              fill
              className="object-cover"
              style={{
                scale: hovered ? 1.05 : 1,
                transition: "scale 0.8s cubic-bezier(0.22,1,0.36,1)",
              }}
            />
          </motion.div>

          {/* Gradient fade to card bg */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#080808]" />

          {/* Tag pill */}
          <div
            className="absolute top-5 left-5 flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[10px] font-semibold uppercase tracking-widest backdrop-blur-md border"
            style={{
              backgroundColor: `${card.accent}15`,
              borderColor: `${card.accent}30`,
              color: card.accent,
              opacity: isActive ? 1 : 0.55,
              transition: "opacity 0.5s ease",
            }}
          >
            <span
              className="inline-block h-1.5 w-1.5 rounded-full"
              style={{ backgroundColor: card.accent, boxShadow: `0 0 5px ${card.accent}` }}
            />
            {card.tag}
          </div>
        </div>

        {/* Content */}
        <div className="relative flex h-[42%] flex-col justify-between p-7">
          {/* Ghost number */}
          <div
            className="pointer-events-none absolute top-0 right-4 select-none font-black leading-none italic"
            style={{ fontSize: "7rem", opacity: 0.025, color: card.accent }}
          >
            {String(card.id).padStart(2, "0")}
          </div>

          <div>
            <h3
              className="mb-2 text-[1.55rem] font-bold leading-tight tracking-tight text-white"
              style={{
                transform: hovered ? "translateX(3px)" : "translateX(0)",
                transition: "transform 0.4s ease",
              }}
            >
              {card.title}
            </h3>
            <p className="text-base leading-relaxed text-white/55 font-light max-w-[88%]">
              {card.desc}
            </p>
          </div>

          {/* CTA */}
          <div
            className="flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.18em]"
            style={{
              color: card.accent,
              opacity: isActive ? 1 : 0.4,
              transition: "opacity 0.5s ease",
            }}
          >
            <Link href="/templates" className="flex items-center gap-2">
              <span>Explore</span>
              <div className="flex items-center gap-1 overflow-hidden"
                style={{
                  width: hovered ? 36 : 16,
                  transition: "width 0.4s cubic-bezier(0.22,1,0.36,1)",
                }}>
                <div className="h-px flex-1" style={{ backgroundColor: card.accent }} />
                <svg width="5" height="8" viewBox="0 0 5 8" fill="none" style={{ color: card.accent, flexShrink: 0 }}>
                  <path d="M1 1l3 3-3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                </svg>
              </div>
            </Link>
          </div>
        </div>

        {/* Active shimmer sweep */}
        {isActive && (
          <motion.div
            className="pointer-events-none absolute inset-0 rounded-[32px]"
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: [0, 0.06, 0], x: ["−100%", "200%"] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 2.5, ease: "linear" }}
            style={{
              background: `linear-gradient(105deg, transparent 40%, ${card.accent}90 50%, transparent 60%)`,
            }}
          />
        )}
      </div>
    </motion.div>
  );
};