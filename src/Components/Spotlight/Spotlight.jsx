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

const homeTemplatesVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  },
  exit: {
    opacity: 0,
    x: -50,
    transition: { duration: 0.4, ease: "easeIn" }
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
        Your Shop, Digitally Framed on <span>Every Wall</span>
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
  const [currentSpotlight, setCurrentSpotlight] = useState("invitation");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
      setCurrentSpotlight(currentSpotlight === 'invitation' ? 'wall' : 'invitation')
    }, 8000);
    return () => clearInterval(interval);
  }, [currentSpotlight]);

  return (
    <HeroHighlight>
      <div id="spotlight" className={Style.spotlight}>
        {/* {isMobile && <SpotlightTags />} */}
        {/* {isMobile && <HomeTemplates type={currentSpotlight} style='slider-row' />} */}
        {isMobile && <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={currentSpotlight}
                variants={homeTemplatesVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="mb-6 pt-6"
              >
                <HomeTemplates type={currentSpotlight} isHorizontal={isMobile} />
              </motion.div>
            </AnimatePresence>}
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            className={Style.main}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Heading */}
            <motion.div
              variants={blurVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <ProHeading className={Style.heading}>
                {slides[index].heading}
              </ProHeading>
            </motion.div>

            {/* Description */}
            <motion.span
              className={Style.quote}
              variants={blurVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
            >
              {slides[index].description}
            </motion.span>

            {/* Buttons */}
            <motion.div
              variants={blurVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ delay: 0.6, duration: 0.7, ease: "easeOut" }}
            >
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
        <div className="w-[150px]">
          {!isMobile && (
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={currentSpotlight}
                variants={homeTemplatesVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <HomeTemplates type={currentSpotlight}  />
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      </div>
    </HeroHighlight>
  );
};

export default Spotlight;
