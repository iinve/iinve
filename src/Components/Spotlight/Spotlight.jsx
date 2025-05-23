"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
// import { useState } from 'react'
import ActionButton from "../../ProUI/ActionButton/ActionButton";
import { HeroHighlight } from "../HeroHighlight/HeroHighlight";
import HomeTemplates from "../HomeTemplates/HomeTemplates";
// import TemplateChip from '../TemplateChip/TemplateChip'
import SpotlightTags from "Components/SpotlightTags/SpotlightTags";
import ProHeading from "ProUI/ProHeading/ProHeading";
import { useToggleVisibility } from "utils/sheetUtils";
import useWindowDimensions from "utils/useWindowDimensions";
import Style from "./Spotlight.module.scss";
import { useWhatsAppMessage } from "hooks/useWhatsAppMessage";
// import { addToast } from '@heroui/react'

const blurVariants = {
  hidden: { opacity: 0, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.2,
    },
  },
};

const Spotlight = () => {
  const { isMobile } = useWindowDimensions();
  const { handleSendWhatsAppMessage } = useWhatsAppMessage()


  return (
    <HeroHighlight>
      <motion.div
        id="spotlight"
        className={Style.spotlight}
        initial="hidden"
        animate="visible"
        variants={blurVariants}
      >
        {isMobile && <SpotlightTags />}
        <motion.div className={Style.main} variants={blurVariants}>
          <motion.div variants={blurVariants}>
            {/* <TemplateChip /> */}
            <motion.div variants={blurVariants}>
              <ProHeading className={Style.heading}>
              Unveil the <span>Magic</span> of {!isMobile && <br />}
              Your Special Day! 
              </ProHeading>
            </motion.div>
          </motion.div>
          <motion.span className={Style.quote} variants={blurVariants}>
            Create stunning digital event invitations and bring your brand to
            life with magical digital walls that showcase offers, new arrivals,
            and announcements with style.
          </motion.span>
          <motion.div variants={blurVariants}>
            {/* <HomeInput /> */}
            <div className="flex md:justify-start justify-center gap-4">
              <ActionButton size="lg" color="primary" onPress={() => handleSendWhatsAppMessage('invite')}>
                Create invitation
              </ActionButton>
              <ActionButton size="lg" color="primary" onPress={() => handleSendWhatsAppMessage('wall')}>
                Create wall
              </ActionButton>
            </div>
          </motion.div>
        </motion.div>
        <div className="w-[150px]">{!isMobile && <HomeTemplates />}</div>
      </motion.div>
    </HeroHighlight>
  );
};

export default Spotlight;
