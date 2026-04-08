"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import useWindowDimensions from "../../utils/useWindowDimensions";
import { Logo } from "../Logo/Logo";
import { Assets } from "assets/assets";
import ActionButton from "ProUI/ActionButton/ActionButton";
import ProIcon from "ProUI/Icons/icons";
import { useWhatsAppMessage } from "hooks/useWhatsAppMessage";
import Style from "./MainFooter.module.scss";


const socialLinks = [
  {
    icon: "FaWhatsapp",
    label: "WhatsApp",
    action: () => { },
    isWhatsApp: true,
    accent: "#25D366",
  },
  {
    icon: "FaInstagram",
    label: "Instagram",
    href: "https://www.instagram.com/hi.iinve",
    accent: "#E1306C",
  },
  {
    icon: "RiTwitterXFill",
    label: "X / Twitter",
    href: "https://x.com/iinve_ai",
    accent: "#ffffff",
  },
];

const quickLinks = [
  { name: "Templates", href: "/templates" },
  { name: "Invitations", href: "/e-invite" },
  // { name: "Blog", href: "#blogs" },
  { name: "FAQs", href: "#faq" },
];

const locations = [
  {
    country: "UAE",
    flag: "🇦🇪",
    city: "Dubai",
    detail: "",
    accent: "#0D9DC6",
    time: "GST (UTC+4)",
  },
  {
    country: "India",
    flag: "🇮🇳",
    city: "India",
    detail: "",
    accent: "#F59E0B",
    time: "IST (UTC+5:30)",
  },
];





function SocialBtn({ item }) {
  const { handleSendWhatsAppMessage } = useWhatsAppMessage();

  const inner = (
    <motion.div
      whileHover={{ scale: 1.1, y: -2 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300, damping: 18 }}
      className="w-10 h-10 rounded-full flex items-center justify-center border border-white/10 bg-white/[0.04] hover:border-white/20 transition-colors duration-300"
      style={{ boxShadow: `0 0 0 0 ${item.accent}` }}
      title={item.label}
    >
      <ProIcon name={item.icon} size={18} color="rgba(255,255,255,0.7)" />
    </motion.div>
  );

  if (item.isWhatsApp) {
    return (
      <button onClick={() => handleSendWhatsAppMessage("contact")} aria-label={item.label}>
        {inner}
      </button>
    );
  }

  return (
    <Link href={item.href} target="_blank" rel="noopener noreferrer" aria-label={item.label}>
      {inner}
    </Link>
  );
}

/* ─── main footer ─────────────────────────────────────────────────────── */

const MainFooter = () => {
  const { isMobile } = useWindowDimensions();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <footer
      ref={ref}
      className={`${Style.footer} relative overflow-hidden py-12`}
      style={{ background: "linear-gradient(to bottom, #05080f, #000000 120px)" }}
    >
      {/* ── top separation: glow line + bloom ── */}
      <div
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, transparent 0%, #153BA6 20%, #0D9DC6 50%, #153BA6 80%, transparent 100%)",
          opacity: 0.6,
        }}
      />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-28 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at top, rgba(13,157,198,0.10) 0%, transparent 70%)",
        }}
      />

      {/* ── main grid ── */}
      <div className="relative z-10 max-w-6xl mx-auto px-5 md:px-14 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-12">

          {/* col 1 — brand */}
          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-5"
          >
            <Link href="/">
              <Image
                src={Assets?.Logo.main}
                alt="iinve logo"
                priority
                width={150}
                height={52}
                className="opacity-90 hover:opacity-100 transition-opacity md:w-[120px] w-[90px]"
              />
            </Link>
            <p className="text-white/35 text-sm leading-relaxed max-w-[240px]">
              Create stunning digital invitations for every special occasion — beautifully designed, instantly shared.
            </p>
            {/* social icons */}
            <div className="flex gap-2.5 mt-1">
              {socialLinks.map((s, i) => (
                <SocialBtn key={i} item={s} />
              ))}
            </div>
          </motion.div>

          {/* col 2 — quick links */}
          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="flex flex-col gap-4"
          >
            <p className="text-[11px] font-semibold tracking-widest uppercase text-white/25 mb-1">
              Navigate
            </p>
            {quickLinks.map((link, i) => (
              <motion.div
                key={i}
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Link
                  href={link.href}
                  className="flex items-center gap-2 text-white/45 hover:text-white text-sm transition-colors duration-200 group"
                >
                  <span
                    className="w-1 h-1 rounded-full bg-[#0D9DC6] opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  />
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* col 3 — locations */}
          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="flex flex-col gap-4"
          >
            <p className="text-[11px] font-semibold tracking-widest uppercase text-white/25 mb-1">
              Locations
            </p>

            {/* UAE */}
            <div className="flex items-center gap-3 py-3 px-4 rounded-xl bg-white/[0.03]">
              <div>
                <p className="text-white/80 text-sm font-medium leading-none">United Arab Emirates</p>
              </div>
              <div className="ml-auto w-1.5 h-1.5 rounded-full bg-[#0D9DC6] animate-pulse" />
            </div>

            {/* India */}
            <div className="flex items-center gap-3 py-3 px-4 rounded-xl bg-white/[0.03]">
              <div>
                <p className="text-white/80 text-sm font-medium leading-none">India</p>
              </div>
              <div className="ml-auto w-1.5 h-1.5 rounded-full bg-[#F59E0B] animate-pulse" />
            </div>
          </motion.div>
        </div>

        {/* ── divider ── */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/[0.07] to-transparent mb-8" />

        {/* ── bottom bar ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col md:flex-row items-center justify-center gap-3"
        >
          <span className="text-white/20 text-xs">
            © iinve {new Date().getFullYear()} · All rights reserved.
          </span>
        </motion.div>
      </div>
    </footer>
  );
};

export default MainFooter;