"use client";
import React, { useRef } from "react";
import ProHeading from "ProUI/ProHeading/ProHeading";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useInView } from "react-intersection-observer";
import TemplateSwiper from "../TemplateSwiper/TemplateSwiper";
import Style from "./TemplateSlider.module.scss";
import NumberCounter from "ProUI/NumerCounter/NumberCounter";
import ActionButton from "ProUI/ActionButton/ActionButton";
import Link from "next/link";
import Button from "ProUI/Button/Button";

const TemplateSlider = () => {
  const targetRef = useRef(null);
  const { ref: inViewRef, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });
  const scale = useTransform(smoothProgress, [0, 0.2], [0.95, 1]);

  return (
    <section
      className="py-10 bg-[#050505] overflow-hidden relative"
      id="templates"
      ref={targetRef}
    >
      <motion.div
        ref={inViewRef}
        style={{ scale }}
        viewport={{ once: true }}
        className="container mx-auto px-6"
      >
        {/* Single Line Heading */}
        <div className="flex flex-col md:flex-row items-center justify-between w-full gap-10">
          <div className="flex flex-row items-center md:w-2/3">
            <motion.div
              initial={{ opacity: 1, y: 0 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h4 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
                Curated Invitations for Every Moment.
              </h4>
              <p className="text-white/50 text-lg md:text-xl font-light">
                Elegant, minimalist invites that elevate your event seamlessly
                blending your event details, personalized message, and a touch
                of your style through photos or custom themes.
              </p>
              <motion.div
                className="mt-16 flex justify-start items-center gap-8"
                initial={{ opacity: 1 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.5, duration: 1 }}
              >
                <div className="flex flex-col items-start ">
                  <span className="text-3xl font-bold text-white">
                    <NumberCounter value="10K+" duration={2} />
                  </span>
                  <span className="text-[16px] text-white/30">
                    Invite Shared
                  </span>
                </div>
                <div className="w-[1px] h-8 bg-white/10" />
                <div className="flex flex-col items-start">
                  <span className="text-3xl font-bold text-white">
                    <NumberCounter value="99.9%" duration={3} />
                  </span>
                  <span className="text-[16px] text-white/30">
                    Satisfaction Rate
                  </span>
                </div>
              </motion.div>
              <Button
                size="lg"
                type="secondary"
                href="/templates"
                className="mt-10"
              >
                Explore Templates
              </Button>
            </motion.div>
          </div>

          {/* Swiper Container */}
          <TemplateSwiper inView={inView} />
        </div>
      </motion.div>
    </section>
  );
};

export default TemplateSlider;
