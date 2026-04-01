"use client";

import { useMemo, useState, useRef, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import { Tab, Tabs } from "@heroui/react";
import MainFooter from "Components/MainFooter/MainFooter";
import TemplateCard from "Components/TemplateCard/TemplateCard";
import { templateData } from "DB/templateData";
import ActionButton from "ProUI/ActionButton/ActionButton";
import { Sheet, SheetBody } from "ProUI/Sheet/Sheet";
import AnimatedText from "ProUI/AnimatedText/AnimatedText";
import PageLoader from "Components/PageLoader/PageLoader";
import { SHEETS, useToggleVisibility } from "utils/sheetUtils";
import { sheetVisibility } from "atoms/sheetAtom";
import { useRecoilState } from "recoil";
import FormSheet from "Components/FormSheet/FormSheet";

/* ─── Category pill with animated indicator ─── */
const CATEGORIES = [
  { key: "all", label: "All", count: null },
  { key: "standard", label: "Signature", count: null },
  { key: "premium", label: "premium", count: null },
];

function CategoryPill({ cat, isActive, onClick, templateData }) {
  const count =
    cat.key === "all"
      ? templateData.length
      : templateData.filter((t) => t.type === cat.key).length;

  return (
    <motion.button
      onClick={onClick}
      className="relative flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium tracking-wide transition-colors duration-300"
      animate={{
        color: isActive ? "#000" : "rgba(255,255,255,0.45)",
        backgroundColor: isActive
          ? "rgba(255,255,255,1)"
          : "rgba(255,255,255,0.06)",
      }}
      whileHover={{
        backgroundColor: isActive
          ? "rgba(255,255,255,1)"
          : "rgba(255,255,255,0.12)",
      }}
      transition={{ duration: 0.25 }}
    >
      {cat.label}
      <motion.span
        className="text-xs px-1.5 py-0.5 rounded-full font-mono"
        animate={{
          backgroundColor: isActive
            ? "rgba(0,0,0,0.15)"
            : "rgba(255,255,255,0.1)",
          color: isActive ? "#000" : "rgba(255,255,255,0.4)",
        }}
      >
        {count}
      </motion.span>
    </motion.button>
  );
}

/* ─── Luxury Template Card ─── */
function LuxuryCard({ template, isSelected, onSelect }) {
  const ref = useRef(null);
  const [hovered, setHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), {
    stiffness: 200,
    damping: 25,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), {
    stiffness: 200,
    damping: 25,
  });

  const handleMouseMove = (e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setHovered(false);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={onSelect}
      className="relative group"
      style={{ perspective: 800 }}
      layout
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative"
      >
        {/* Card frame */}
        <motion.div
          className="relative overflow-hidden rounded-3xl cursor-pointer"
          animate={{
            boxShadow: isSelected
              ? "0 0 0 2px rgba(255,255,255,0.9), 0 32px 64px rgba(0,0,0,0.8)"
              : hovered
                ? "0 0 0 1px rgba(255,255,255,0.2), 0 24px 48px rgba(0,0,0,0.6)"
                : "0 4px 24px rgba(0,0,0,0.4)",
          }}
          transition={{ duration: 0.3 }}
        >
          {/* Template image */}
          <div className="aspect-[9/16] w-full bg-zinc-900 relative overflow-hidden">
            {template.image ? (
              <Image
                src={template.image}
                alt={template.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-950" />
            )}

            {/* Shimmer overlay on hover */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/8 to-transparent -translate-x-full"
              animate={
                hovered ? { translateX: "200%" } : { translateX: "-100%" }
              }
              transition={{ duration: 0.6, ease: "easeInOut" }}
            />

            {/* Pro badge */}
            {template.isPro && (
              <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[10px] font-semibold tracking-widest text-white/90 uppercase">
                Top Selling
              </div>
            )}

            {/* Bottom gradient + name on hover */}
            <motion.div
              className="absolute bottom-0 left-0 right-0 p-4 pt-12"
              style={{
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.95) 0%, transparent 100%)",
              }}
              initial={{ opacity: 0, y: 8 }}
              animate={{
                opacity: hovered || isSelected ? 1 : 0,
                y: hovered || isSelected ? 0 : 8,
              }}
              transition={{ duration: 0.25 }}
            >
              <p className="text-white text-sm font-semibold tracking-wide truncate">
                {template.name}
              </p>
              <p className="text-white/50 text-xs mt-0.5 tracking-wider uppercase">
                {template.type}
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Selected checkmark */}
        <AnimatePresence>
          {isSelected && (
            <motion.div
              className="absolute top-3 left-3 w-7 h-7 rounded-full bg-white flex items-center justify-center shadow-lg"
              initial={{ scale: 0, rotate: -90 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 90 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
                <path
                  d="M1 5L4.5 8.5L11 1"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}

function PreviewSheet({ template, onClose }) {
  const scrollRef = useRef(null);
  const { toggleSheetVisibility } = useToggleVisibility();

  useEffect(() => {
    const el = scrollRef.current;
    if (!el || !template) return;

    let direction = 1;

    const interval = setInterval(() => {
      if (!el) return;

      if (direction === 1) {
        el.scrollTop += 1;
        if (el.scrollTop + el.clientHeight >= el.scrollHeight) {
          direction = -1;
        }
      } else {
        el.scrollTop -= 1;
        if (el.scrollTop <= 0) {
          direction = 1;
        }
      }
    }, 20);

    return () => clearInterval(interval);
  }, [template]);

  if (!template) return null;

  return (
    <Sheet
      isOpen={!!template}
      onClose={onClose}
      hideCloseButton
      placement="bottom"
      size="full"
      className="!bg-[#080808]/80 backdrop-blur-2xl border-t border-white/10"
    >
      <SheetBody>
        <div
          className="
          flex flex-col lg:flex-row 
          items-center  
          justify-center 
          gap-10 lg:gap-16 
          p-6 md:p-12 pt-20 md:pt-16 
          min-h-screen
          text-center lg:text-left
        "
        >
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 160,
              damping: 22,
              delay: 0.05,
            }}
            className="relative shrink-0 order-1"
          >
            <div className="relative w-[240px] sm:w-[280px] md:w-[320px]">
              {/* Phone frame */}
              <div className="absolute inset-0 rounded-[2.5rem] border-[10px] border-zinc-800 shadow-[0_40px_120px_rgba(0,0,0,0.9)] z-10 pointer-events-none" />

              {/* Notch */}
              <div className="absolute top-[20px] left-1/2 -translate-x-1/2 w-20 h-6 bg-zinc-800 rounded-2xl z-20" />

              {/* Screen */}
              <div
                ref={scrollRef}
                className="aspect-[9/19] rounded-[2.6rem] bg-zinc-900 relative overflow-y-auto no-scrollbar"
              >
                {template.full_template ? (
                  <Image
                    src={template.full_template}
                    alt={template.name}
                    width={400}
                    height={1200} // 👈 make it tall
                    className="w-full h-auto object-top"
                    priority
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-8 h-8 border-2 border-white/20 border-t-white/80 rounded-full animate-spin" />
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          {/* 🔥 RIGHT: Info panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              delay: 0.15,
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex flex-col gap-6 max-w-md w-full order-2"
          >
            {/* Category */}
            <div className="flex items-center justify-center lg:justify-start gap-3">
              <div className="h-px w-8 bg-white/30" />
              <span className="text-white/40 text-xs tracking-[0.2em] uppercase font-medium">
                {template.type}
              </span>
            </div>

            {/* Title + Description */}
            <div>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight mb-3">
                {template.name}
              </h3>
              <p className="text-white/40 text-sm leading-relaxed">
                Handcrafted with fluid motion transitions, high-fidelity
                typography, and an obsessive attention to every frame.
              </p>
            </div>

            {/* Specs */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { label: "Format", value: "Digital" },
                { label: "Sharing", value: "Instant" },
                { label: "Edits", value: "Unlimited" },
              ].map(({ label, value }) => (
                <div
                  key={label}
                  className="p-3 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md"
                >
                  <p className="text-white/35 text-[10px] tracking-widest uppercase mb-1">
                    {label}
                  </p>
                  <p className="text-white text-sm font-semibold">{value}</p>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-3 pt-2">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-full h-14 rounded-full bg-white text-black font-bold text-sm tracking-wide hover:bg-white/90 transition"
                onClick={() => toggleSheetVisibility(SHEETS.LEAD_FORM, true)}
              >
                Reserve This Template
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                onClick={onClose}
                className="w-full h-12 rounded-full border border-white/20 text-white/70 text-sm font-medium hover:border-white/40 hover:text-white transition"
              >
                Back to Gallery
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* ❌ Close Button */}
        <motion.button
          className="absolute top-6 right-6 w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white transition"
          onClick={onClose}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M1 1L13 13M13 1L1 13"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </motion.button>
      </SheetBody>
    </Sheet>
  );
}

const Page = () => {
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [selectedTab, setSelectedTab] = useState("all");
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const [sheetsVisibility, setSheetsVisibility] =
    useRecoilState(sheetVisibility);

  const handleCloseDemoSheet = () => {
    setSheetsVisibility((prev) => ({
      ...prev,
      [SHEETS.LEAD_FORM]: false,
    }));
  };

  const filteredTemplates = useMemo(() => {
    return selectedTab === "all"
      ? templateData
      : templateData.filter((t) => t.type === selectedTab);
  }, [selectedTab]);

  const containerVars = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.06, delayChildren: 0.1 },
    },
    exit: { opacity: 0, transition: { duration: 0.15 } },
  };

  const itemVars = {
    hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { type: "spring", stiffness: 120, damping: 18 },
    },
  };

  return (
    <div className="min-h-screen bg-[#080808] text-white selection:bg-white/15">
      {/* Ambient background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-[#0D9DC6]/5 blur-[120px]" />
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-[#153BA6]/6 blur-[100px]" />
      </div>

      {/* Hero */}
      <section className="relative pt-36 pb-16 px-6 text-center overflow-hidden">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl md:text-5xl font-bold tracking-tighter leading-none mb-6"
        >
          Select Your <AnimatedText>Aesthetic</AnimatedText>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-white/35 max-w-md mx-auto text-base leading-relaxed"
        >
          Exquisite digital canvases, designed for your most significant
          moments.
        </motion.p>
      </section>

      {/* Filter pills */}
      <div className="z-40 flex justify-center mb-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex items-center gap-2 p-1.5 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl"
        >
          {CATEGORIES.map((cat) => (
            <CategoryPill
              key={cat.key}
              cat={cat}
              isActive={selectedTab === cat.key}
              onClick={() => setSelectedTab(cat.key)}
              templateData={templateData}
            />
          ))}
        </motion.div>
      </div>

      {/* Count indicator */}
      <div className="text-center mb-8">
        <AnimatePresence mode="wait">
          <motion.p
            key={selectedTab}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            className="text-white/25 text-xs tracking-widest uppercase"
          >
            {filteredTemplates.length} template
            {filteredTemplates.length !== 1 ? "s" : ""}
          </motion.p>
        </AnimatePresence>
      </div>

      {/* Grid */}
      <div className="px-4 md:px-12 lg:px-20 max-w-[1600px] mx-auto pb-32">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedTab}
            variants={containerVars}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-5"
          >
            {filteredTemplates.map((template, i) => (
              <motion.div
                key={template.id}
                variants={itemVars}
                onHoverStart={() => setHoveredIndex(i)}
                onHoverEnd={() => setHoveredIndex(null)}
                animate={{
                  opacity:
                    hoveredIndex !== null && hoveredIndex !== i ? 0.45 : 1,
                }}
                transition={{ duration: 0.3 }}
              >
                <LuxuryCard
                  template={template}
                  isSelected={selectedTemplate?.id === template.id}
                  onSelect={() => setSelectedTemplate(template)}
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Preview Sheet */}
      <PreviewSheet
        template={selectedTemplate}
        onClose={() => setSelectedTemplate(null)}
      />
      <FormSheet
        isOpen={sheetsVisibility?.[SHEETS.LEAD_FORM] || false}
        handleClose={handleCloseDemoSheet}
      />
    </div>
  );
};

export default Page;
