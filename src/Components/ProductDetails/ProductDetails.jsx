"use client";
import { sheetVisibility } from "atoms/sheetAtom";
import LeadGenerationForm from "Components/LeadGenerationForm/LeadGenerationForm";

import { motion, useScroll, useTransform } from "framer-motion";
import { useAtom } from "jotai";
import Image from "next/image";
import ActionButton from "ProUI/ActionButton/ActionButton";
import Button from "ProUI/Button/Button";
import { useRef } from "react";
import { SHEETS, useToggleVisibility } from "utils/sheetUtils";

// ── Ease curve consistent with your iinve design system ──
const EASE = [0.22, 1, 0.36, 1];

// ── Blur-in entrance (matches AnimatedText pattern) ──
const BlurIn = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, filter: "blur(12px)", y: 24 }}
    whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.9, ease: EASE, delay }}
    className={className}
  >
    {children}
  </motion.div>
);

// ── Thin horizontal rule with gradient ──
const Rule = () => (
  <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-0" />
);

const StepCard = ({ step }) => (
  <div className="w-full bg-white/[0.03] border border-white/30 rounded-2xl p-6 hover:border-[#0D9DC6]/30 transition-colors duration-500 group">
    <h4 className="text-lg font-bold text-white mb-2 group-hover:text-[#0D9DC6] transition-colors">
      {step.step}
    </h4>
    <p className="text-white/40 text-sm font-light leading-relaxed">
      {step.desc}
    </p>
  </div>
);

const ProductDetails = ({ data }) => {
  const heroRef = useRef(null);
  const featuresRef = useRef(null);
  const { toggleSheetVisibility } = useToggleVisibility();

  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const [sheetsVisibility, setSheetsVisibility] = useAtom(sheetVisibility);

  const handleCloseDemoSheet = () => {
    setSheetsVisibility((prev) => ({
      ...prev,
      [SHEETS.LEAD_FORM]: false,
    }));
  };

  const heroBgY = useTransform(heroScroll, [0, 1], ["0%", "30%"]);
  const heroScale = useTransform(heroScroll, [0, 1], [1, 1.12]);
  const heroOpacity = useTransform(heroScroll, [0, 0.7], [1, 0]);
  const heroTextY = useTransform(heroScroll, [0, 1], ["0%", "60%"]);

  if (!data) return null;

  return (
    <>
      <section
        ref={heroRef}
        className="relative w-full h-screen overflow-hidden flex items-center justify-center"
      >
        <motion.div
          className="absolute inset-0 z-0"
          style={{ y: heroBgY, scale: heroScale }}
        >
          <Image
            src={data.bannerImage}
            alt=""
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#0D9DC6]/10 blur-[120px] rounded-full" />
        </motion.div>

        <div className="absolute inset-0 z-10 opacity-[0.06] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

        <motion.div
          className="relative z-20 text-center px-6 max-w-5xl"
          style={{ y: heroTextY, opacity: heroOpacity }}
        >
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.5em" }}
            animate={{ opacity: 1, letterSpacing: "0.35em" }}
            transition={{ duration: 1.2, ease: EASE }}
            className="font-mono text-[11px] uppercase tracking-[0.35em] text-[#0D9DC6] mb-6"
          >
            {data.heroLabel ?? "Digital Invitations — Reimagined"}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: EASE, delay: 0.2 }}
            className="text-4xl md:text-7xl font-black text-white leading-none tracking-tighter mb-8"
          >
            {data.heroHead}
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, ease: EASE, delay: 0.6 }}
            className="w-24 h-px bg-gradient-to-r from-transparent via-[#0D9DC6] to-transparent mx-auto mb-8 origin-left"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-white/50 text-lg md:text-xl font-light max-w-xl mx-auto"
          >
            {data.introText}
          </motion.p>
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <div className="w-px h-16 bg-gradient-to-b from-white/0 to-white/30" />
          <span className="font-mono text-[9px] tracking-widest text-white/30 uppercase">
            Scroll
          </span>
        </motion.div>
      </section>

      <section className="relative bg-black py-32 px-6 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <div
          aria-hidden
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[clamp(80px,18vw,220px)] font-black text-white/[0.02] leading-none select-none pointer-events-none whitespace-nowrap"
        >
          IINVE
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <BlurIn></BlurIn>
          <BlurIn delay={0.1}>
            <h2 className="text-4xl md:text-6xl font-black text-white leading-none tracking-tighter mb-6">
              {data.introHeading}
            </h2>
          </BlurIn>
          <BlurIn delay={0.2}>
            <p className="text-xl text-white/40 font-light max-w-2xl mx-auto leading-relaxed">
              {data.introText}
            </p>
          </BlurIn>
        </div>
      </section>

      <Rule />

      <section className="bg-black py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <BlurIn className="mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter">
              Everything you need.
              <br />
              <span className="text-white/25">Nothing you don't.</span>
            </h2>
          </BlurIn>

          <div className="grid md:grid-cols-3 gap-px bg-white/5 border border-white/5 rounded-2xl overflow-hidden">
            {data.features.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: EASE, delay: i * 0.1 }}
                whileHover={{ backgroundColor: "rgba(13,157,198,0.04)" }}
                className="relative p-8 bg-black group cursor-default transition-colors duration-500"
              >
                <span className="font-mono text-[10px] tracking-widest text-white/15 mb-6 block">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <motion.div
                  className="absolute top-0 left-8 right-8 h-px bg-[#0D9DC6] origin-left"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    ease: EASE,
                    delay: i * 0.1 + 0.3,
                  }}
                />

                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#0D9DC6] transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-sm text-white/40 leading-relaxed font-light">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Rule />

      <section className="bg-black py-32 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-20 items-center">
          <BlurIn delay={0} className="w-full lg:w-1/2 flex-shrink-0">
            <div className="relative group">
              <div className="absolute -inset-4 bg-[#153BA6]/20 blur-[60px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -z-10" />

              <div className="absolute -top-3 -left-3 w-24 h-24 border border-[#0D9DC6]/30 rounded-xl pointer-events-none" />
              <div className="absolute -bottom-3 -right-3 w-24 h-24 border border-[#153BA6]/30 rounded-xl pointer-events-none" />

              <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black">
                <Image
                  src={data.heroImage}
                  alt="iinve Digital Invitation"
                  width={800}
                  height={600}
                  className="object-cover w-full h-full grayscale-[15%] group-hover:grayscale-0 transition-all duration-700"
                  priority
                />
              </div>
            </div>
          </BlurIn>

          <div className="w-full lg:w-1/2 space-y-8">
            <BlurIn delay={0.1}>
              <h3 className="text-3xl md:text-4xl font-black text-white tracking-tighter leading-tight">
                {data.whyChoose.heading}
              </h3>
            </BlurIn>

            <BlurIn delay={0.2}>
              <p className="text-white/40 font-light leading-relaxed text-lg">
                {data.whyChoose.description}
              </p>
            </BlurIn>

            <div className="space-y-0 border border-white/5 rounded-xl overflow-hidden">
              {data.whyChoose.points.map((point, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    ease: EASE,
                    delay: 0.3 + i * 0.08,
                  }}
                  className="flex items-start gap-4 px-6 py-4 border-b border-white/5 last:border-0 hover:bg-white/[0.02] transition-colors group"
                >
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#0D9DC6] flex-shrink-0 group-hover:shadow-[0_0_8px_#0D9DC6] transition-shadow" />
                  <span className="text-white/60 text-sm font-light leading-relaxed group-hover:text-white/80 transition-colors">
                    {point}
                  </span>
                </motion.div>
              ))}
            </div>

            <BlurIn delay={0.5}>
              <Button
                type="secondary"
                size="lg"
                onPress={() => toggleSheetVisibility(SHEETS.LEAD_FORM, true)}
              >
                Create your Invitation
              </Button>
            </BlurIn>
          </div>
        </div>
      </section>

      <Rule />

      <section className="bg-black py-32 px-6 overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <BlurIn className="mb-20 text-center">
            <h3 className="text-3xl md:text-6xl font-black text-white tracking-tighter">
              How it works.
            </h3>
          </BlurIn>

          <div className="relative">
            <motion.div
              className="absolute left-7 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#0D9DC6]/60 via-[#153BA6]/40 to-transparent origin-top"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: EASE }}
            />

            <div className="space-y-16">
              {data.steps.map((step, i) => {
                const isEven = i % 2 === 0;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: EASE, delay: i * 0.15 }}
                    className="relative flex items-center gap-0"
                  >
                    <div className="hidden md:flex w-[calc(50%-28px)] justify-end pr-10">
                      {isEven && <StepCard step={step} />}
                    </div>

                    <div className="relative z-10 flex-shrink-0 w-14 flex justify-center">
                      <div className="w-14 h-14 rounded-full border border-[#0D9DC6]/40 bg-black flex items-center justify-center shadow-[0_0_30px_rgba(13,157,198,0.2)]">
                        <span className="font-mono text-sm font-bold text-[#0D9DC6]">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>
                    </div>

                    <div className="hidden md:flex w-[calc(50%-28px)] justify-start pl-10">
                      {!isEven && <StepCard step={step} />}
                    </div>

                    <div className="flex md:hidden flex-1 pl-6">
                      <StepCard step={step} />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-black py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[700px] h-[200px] bg-[#153BA6]/15 blur-[100px] rounded-full" />
        </div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <BlurIn className="text-center relative z-10">
          <h2 className="text-3xl md:text-6xl font-black text-white tracking-tighter mb-10">
            Your perfect invitation
            <br />
            <span className="text-white/25">awaits.</span>
          </h2>
          <Button
            type="primary"
            size="lg"
            onPress={() => toggleSheetVisibility(SHEETS.LEAD_FORM, true)}
          >
            Create your Invitation
          </Button>
        </BlurIn>
        <LeadGenerationForm
          isOpen={sheetsVisibility?.[SHEETS.LEAD_FORM] || false}
          handleClose={handleCloseDemoSheet}
        />
      </section>
    </>
  );
};

export default ProductDetails;
