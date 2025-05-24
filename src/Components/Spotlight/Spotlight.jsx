"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import ActionButton from "../../ProUI/ActionButton/ActionButton";
import { HeroHighlight } from "../HeroHighlight/HeroHighlight";
import HomeTemplates from "../HomeTemplates/HomeTemplates";
import SpotlightTags from "Components/SpotlightTags/SpotlightTags";
import ProHeading from "ProUI/ProHeading/ProHeading";
import { useWhatsAppMessage } from "hooks/useWhatsAppMessage";
import useWindowDimensions from "utils/useWindowDimensions";
import Style from "./Spotlight.module.scss";

const blurVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    y: -50,
    transition: {
      duration: 0.5,
      ease: "easeIn",
    },
  },
};

const slides = [
  {
    heading: (
      <>
        Unveil the <span>Magic</span> of <br /> Your Special Day!
      </>
    ),
    description:
      "Create stunning digital event invitations and bring your brand to life with magical digital walls that showcase offers, new arrivals, and announcements with style.",
    buttons: [{ label: "Create invitation", action: "invite" }],
  },
  {
    heading: (
      <>
        Your Shop, Digitally Framed<br />  on <span>Every Wall</span>
      </>
    ),
    description:
      "Display offers, new arrivals, and updates on a branded digital wall. Perfect for local shops & events.",
    buttons: [{ label: "Create wall", action: "wall" }],
  },
];

const Spotlight = () => {
  const { isMobile } = useWindowDimensions();
  const { handleSendWhatsAppMessage } = useWhatsAppMessage();
  const [index, setIndex] = useState(0);

  // Autoplay every 6s
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <HeroHighlight>
      <div id="spotlight" className={Style.spotlight}>
        {isMobile && <SpotlightTags />}
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            className={Style.main}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={blurVariants}
          >
            <motion.div variants={blurVariants}>
              <ProHeading className={Style.heading}>
                {slides[index].heading}
              </ProHeading>
            </motion.div>
            <motion.span className={Style.quote} variants={blurVariants} transition={{ delay: 0.2 }}>
              {slides[index].description}
            </motion.span>
            <motion.div variants={blurVariants} transition={{ delay: 0.3 }}>
              <div className="flex md:justify-start justify-center gap-4">
                {slides[index].buttons.map((btn, i) => (
                  <ActionButton
                    key={i}
                    size="lg"
                    color="primary"
                    onPress={() => handleSendWhatsAppMessage(btn.action)}
                  >
                    {btn.label}
                  </ActionButton>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
        <div className="w-[150px]">{!isMobile && <HomeTemplates />}</div>
      </div>
    </HeroHighlight>
  );
};

export default Spotlight;
