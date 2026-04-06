"use client";

import InfoChip from "Components/InfoChip/InfoChip";
import { motion, useInView } from "framer-motion";
import AnimatedText from "ProUI/AnimatedText/AnimatedText";
import { useRef, useState } from "react";
import { IoHappyOutline } from "react-icons/io5";
import { TiStarFullOutline } from "react-icons/ti";
import { TiStarOutline } from "react-icons/ti";




const testimonials = [
  {
    name: "Rooney & Rose",
    event: "Wedding",
    place: 'Dubai',
    avatar: "/testimonials/rooney-rose.jpg",
    rating: 4,
    quote:
      "Our guests couldn't stop talking about the invitation. It felt like the wedding had already started the moment they opened the link.",
    accent: "#0D9DC6",
    template: "Opaline",
  },
  {
    name: "Sara Al Mansouri",
    event: "Birthday Party",
    place: 'Abu Dhabi',
    avatar: "/testimonials/sara.jpg",
    rating: 5,
    quote:
      "I made my daughter's invite in under 10 minutes. It looked like something a designer spent days on. Absolutely magical.",
    accent: "#153BA6",
    template: "Bloom",
  },
  {
    name: "Karthik & Varsha",
    event: "Wedding",
    place: 'Kerala',
    avatar: "/testimonials/nour-khalid.jpg",
    rating: 5,
    quote:
      "I loved how easy it was to customize everything. We matched our wedding colors perfectly, and every detail felt thoughtfully designed.",
    accent: "#0D9DC6",
    template: "Opaline",
  },
  {
    name: "Ashi & Laami",
    event: "Wedding",
    place: 'Kerala',
    avatar: "/testimonials/premagic.jpg",
    rating: 5,
    quote:
      "We switched from printed cards entirely. iinve saves us hours per event and our clients love the modern feel.",
    accent: "#153BA6",
    template: "Eclipse",
  },
  {
    name: "Aisha & Omar",
    event: "Anniversary",
    place: 'Cairo',
    avatar: "/testimonials/aisha-omar.jpg",
    rating: 4,
    quote:
      "Simple, beautiful, and fast. The invite was shared 200+ times on WhatsApp within the first hour.",
    accent: "#0D9DC6",
    template: "Velvet",
  },
  {
    name: "Layla Hassan",
    event: "Housewarming",
    place: 'London',
    avatar: "/testimonials/layla.jpg",
    rating: 4,
    quote:
      "I've used it three times now — for a birthday, a baby shower, and a dinner party. Each one looked completely different and stunning.",
    accent: "#153BA6",
    template: "Dusk",
  },
  {
    name: "Sreejitha & Nikil",
    event: "Wedding",
    place: 'Kerala',
    avatar: "/testimonials/layla.jpg",
    rating: 4,
    quote:
      "We used it for our wedding invite and it was a showstopper. Clean, modern, and super creative—everyone asked where we got it from!",
    accent: "#0D9DC6",
    template: "Dusk",
  },
];

const row1 = testimonials.slice(0, 3);
const row2 = testimonials.slice(3);


const Stars = ({ count, accent }) => {
  const totalStars = 5;

  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: totalStars }).map((_, index) => {
        const isFilled = index < count;

        return (

          isFilled ? (
            <TiStarFullOutline key={index} className="w-5 h-5" color={accent} />
          ) : (
            <TiStarOutline key={index} className="w-5 h-5" color={accent} />
          )

        );
      })}
    </div>
  );
};


function TestimonialCard({ t, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28, filter: "blur(6px)" }}
      animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative shrink-0 w-[300px] rounded-2xl overflow-hidden cursor-default select-none"
      style={{
        background: "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)",
        border: `1px solid ${hovered ? t.accent + "40" : "rgba(255,255,255,0.07)"}`,
        boxShadow: hovered ? `0 0 32px ${t.accent}18` : "none",
        transition: "border-color 0.4s ease, box-shadow 0.4s ease",
      }}
    >
      <div
        className="absolute -top-10 -left-10 w-32 h-32 rounded-full blur-3xl pointer-events-none transition-opacity duration-500"
        style={{ background: t.accent, opacity: hovered ? 0.18 : 0.08 }}
      />

      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative z-10 p-5 flex flex-col gap-4">
        {/* top row */}
        <div className="flex items-center justify-between">
          <Stars count={t.rating} accent={t.accent} />

          <span
            className="text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-full"
            style={{
              background: `${t.accent}15`,
              color: t.accent,
              border: `1px solid ${t.accent}30`,
            }}
          >
            {t.event}
          </span>
        </div>

        {/* quote */}
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <p className="text-white/60 text-sm leading-relaxed">
          {`"${t.quote}"`}
        </p>

        {/* divider */}
        <div
          className="h-px w-full"
          style={{ background: `linear-gradient(to right, ${t.accent}30, transparent)` }}
        />

        {/* author */}
        <div className="flex items-center gap-3">
          <div
            className="relative w-9 h-9 rounded-full overflow-hidden shrink-0 ring-1"
            style={{ ringColor: t.accent + "50" }}
          >
            <div
              className="w-full h-full rounded-full flex items-center justify-center text-sm font-bold"
              style={{ background: `${t.accent}25`, color: t.accent }}
            >
              {t.name[0]}
            </div>
          </div>
          <div>
            <p className="text-white text-sm font-semibold leading-none">{t.name}</p>
            <p className="text-white/35 text-xs mt-1">{t.place}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}


function TestimonialRow({ items, direction = "ltr", duration = 36, delay = 0 }) {
  const [paused, setPaused] = useState(false);
  const tiles = [...items, ...items, ...items];

  return (
    <div
      className="overflow-hidden w-full"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="flex gap-4 w-max py-2"
        style={{
          animation: `t-marquee-${direction} ${duration}s linear infinite`,
          animationDelay: `${delay}s`,
          animationPlayState: paused ? "paused" : "running",
          willChange: "transform",
        }}
      >
        {tiles.map((t, i) => (
          <TestimonialCard key={i} t={t} index={i % items.length} />
        ))}
      </div>
    </div>
  );
}


function SectionHeader() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
      animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      className="text-center mb-14 flex flex-col items-center gap-4"
    >
      <InfoChip icon={<IoHappyOutline />
      } name={"Loved by hosts"} />

      <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight max-w-xl mt-4">
        Real moments,<br />
        <AnimatedText>real reactions.</AnimatedText>
      </h2>

      <p className="text-white/35 text-md max-w-md leading-relaxed">
        From intimate weddings to corporate launches, here&apos;s what hosts say after their first iinve.
      </p>

      {/* aggregate rating */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ delay: 0.4, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="flex items-center gap-3 mt-2 px-5 py-2.5 rounded-full bg-white/[0.04] border border-white/[0.08]"
      >
        <div className="flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <svg key={i} width="14" height="14" viewBox="0 0 12 12">
              <path
                d="M6 1L7.39 4.26L11 4.64L8.5 6.97L9.18 10.5L6 8.77L2.82 10.5L3.5 6.97L1 4.64L4.61 4.26L6 1Z"
                fill="#0D9DC6"
              />
            </svg>
          ))}
        </div>
        <span className="text-white font-bold text-sm">4.9</span>
        <span className="text-white/30 text-xs">·</span>
        <span className="text-white/40 text-xs">from 2,400+ invitations</span>
      </motion.div>
    </motion.div>
  );
}


const Testimonials = () => {
  return (
    <section className="relative py-20 md:py-28 bg-[#050505] overflow-hidden">
      {/* keyframes */}
      <style>{`
        @keyframes t-marquee-ltr {
          from { transform: translateX(0); }
          to   { transform: translateX(calc(-100% / 3)); }
        }
        @keyframes t-marquee-rtl {
          from { transform: translateX(calc(-100% / 3)); }
          to   { transform: translateX(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          [style*="t-marquee"] { animation: none !important; }
        }
      `}</style>

      {/* ambient glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(13,157,198,0.05)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(21,59,166,0.07)_0%,transparent_70%)] pointer-events-none" />

      {/* header */}
      <div className="px-5 md:px-14 lg:px-24">
        <SectionHeader />
      </div>

      {/* marquee rows */}
      <div
        className="space-y-4 px-4"
        style={{
          maskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
        }}
      >
        <TestimonialRow items={row1} direction="ltr" duration={38} delay={0} />
        <TestimonialRow items={row2} direction="rtl" duration={44} delay={-6} />
      </div>

      {/* bottom CTA nudge */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
        className="mt-14 flex flex-col items-center gap-2"
      >
        <p className="text-white/30 text-md tracking-wide">Join thousands of happy hosts</p>
        <div className="flex -space-x-2">
          {["#0D9DC6", "#7B61FF", "#F59E0B", "#00C896", "#F472B6"].map((c, i) => (
            <div
              key={i}
              className="w-7 h-7 rounded-full border-2 border-black flex items-center justify-center text-[10px] font-bold backdrop-blur-sm"
              style={{ background: `${c}25`, color: c, borderColor: "#000", zIndex: 5 - i }}
            >
              {["R", "S", "N", "P", "A"][i]}
            </div>
          ))}
        </div>
        <p className="text-white/20 text-sm">2,400+ invitations sent this month</p>
      </motion.div>
    </section>
  );
};

export default Testimonials;