"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import useWindowDimensions from "utils/useWindowDimensions";
import Hamburger from "../Hamburger/Hamburger";
import { Logo } from "../Logo/Logo";
import ActionButton from "../../ProUI/ActionButton/ActionButton";
import { useWhatsAppMessage } from "hooks/useWhatsAppMessage";
import { Assets } from "assets/assets";
import { SHEETS, useToggleVisibility } from "utils/sheetUtils";

const navItems = [
  { name: "Templates", link: "/templates" },
  { name: "Invitations", link: "#invitations" },
  { name: "Blogs", link: "#blogs" },
  { name: "FAQs", link: "#faq" },
];

function useMagnet(strength = 0.35) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 18 });
  const sy = useSpring(y, { stiffness: 200, damping: 18 });
  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * strength);
    y.set((e.clientY - (r.top + r.height / 2)) * strength);
  };
  const onLeave = () => { x.set(0); y.set(0); };
  return { ref, sx, sy, onMove, onLeave };
}

/* ── Nav link: letter-by-letter colour sweep ── */
function NavLink({ name, link }) {
  const [hovered, setHovered] = useState(false);
  const letters = name.split("");

  return (
    <Link
      href={link}
      className="relative flex items-center gap-0.5 py-1 group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {letters.map((char, i) => (
        <motion.span
          key={i}
          className="text-md font-medium inline-block"
          animate={{
            color: hovered ? "#0D9DC6" : "rgba(255,255,255,0.80)",
            y: hovered ? -2 : 0,
          }}
          transition={{
            duration: 0.2,
            delay: hovered ? i * 0.03 : (letters.length - i) * 0.015,
            ease: "easeOut",
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}

      {/* Glowing underline dot that slides */}
      <motion.span
        className="absolute -bottom-1 left-0 h-[2px] rounded-full"
        style={{
          background: "linear-gradient(90deg, #0D9DC6, #153BA6)",
          boxShadow: "0 0 8px #0D9DC6aa",
        }}
        initial={{ scaleX: 0, originX: 0 }}
        animate={{ scaleX: hovered ? 1 : 0 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      />
    </Link>
  );
}

function PulseDot() {
  return (
    <span className="relative flex h-1.5 w-1.5 shrink-0">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0D9DC6] opacity-60" />
      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#0D9DC6]" />
    </span>
  );
}


function AnimatedLogo({ scrolled, isCompact, isMobile }) {
  return (
    <div className="relative flex items-center" style={{ width: scrolled ? 108 : (isCompact ? 80 : 108), height: 60, transition: "width 0.4s cubic-bezier(0.22,1,0.36,1)" }}>

      <AnimatePresence mode="wait">
        {!scrolled ? (
          <motion.div
            key="wordmark"
            initial={{ opacity: 0, x: -8, filter: "blur(4px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, x: -8, filter: "blur(4px)" }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 flex items-center"
          >
            <Logo width={isCompact ? 90 : 108} height={40} />
          </motion.div>
        ) : (

          <motion.div
            key="icon"
            initial={{ opacity: 0, scale: 0.6, rotate: -15, filter: "blur(4px)" }}
            animate={{ opacity: 1, scale: 1, rotate: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 0.6, rotate: 15, filter: "blur(4px)" }}
            transition={{ duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
            className="absolute inset-0 flex items-center justify-start"
          >
            <Link href="/">
              <motion.div
                whileHover={{ scale: 1.12, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <Image
                  src={Assets?.Logo?.icon}
                  alt="iinve icon"
                  width={isMobile ? 30 : 40}
                  height={isMobile ? 30 : 40}
                />
              </motion.div>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const Header = () => {
  const { isMobile, isTablet } = useWindowDimensions();
  const { handleSendWhatsAppMessage } = useWhatsAppMessage();
  const isCompact = isMobile || isTablet;
  const [scrolled, setScrolled] = useState(false);
  const magnet = useMagnet(0.28);
  const { toggleSheetVisibility } = useToggleVisibility();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: 0, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
      className={`
  fixed inset-x-0 top-0 z-50 w-full
  transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
  py-2 md:py-3
  border-b border-transparent
  ${scrolled
          ? "bg-black/50 backdrop-blur-2xl border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.25)]"
          : "bg-transparent"
        }
`}
    >
      {/* Noise shimmer */}
      <AnimatePresence>
        {scrolled && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 pointer-events-none overflow-hidden"
          >
            <svg className="absolute inset-0 w-full h-full opacity-[0.03]" aria-hidden="true">
              <filter id="hdr-noise">
                <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="3" />
                <feColorMatrix type="saturate" values="0" />
              </filter>
              <rect width="100%" height="100%" filter="url(#hdr-noise)" />
            </svg>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="container mx-auto px-6 flex items-center justify-between relative z-10">

        {/* Logo — animates between wordmark and icon */}
        <motion.div
          whileHover={{ scale: 1.04 }}
          transition={{ type: "spring", stiffness: 280, damping: 22 }}
        >
          <AnimatedLogo scrolled={scrolled} isCompact={isCompact} isMobile={isMobile} />
        </motion.div>

        {/* Desktop Nav */}
        {!isCompact && (
          <nav className="flex items-center gap-8">
            {navItems.map((item) => (
              <NavLink key={item.name} name={item.name} link={item.link} />
            ))}
          </nav>
        )}

        <div className="flex items-center gap-4">
          <motion.div
            ref={magnet.ref}
            style={{ x: magnet.sx, y: magnet.sy }}
            onMouseMove={magnet.onMove}
            onMouseLeave={magnet.onLeave}
            className="hidden md:block"
          >
            <ActionButton
              size="md"
              className="bg-gradient-to-tr from-[#153BA6] to-[#0D9DC6] text-white px-8 rounded-full font-semibold shadow-lg shadow-blue-500/20"
              onPress={() => toggleSheetVisibility(SHEETS.LEAD_FORM, true)}
            >
              <PulseDot /> Create Invitation
            </ActionButton>
          </motion.div>

          {isCompact && <Hamburger navItems={navItems} />}
        </div>
      </div>
    </motion.header>
  );
};

export default Header;