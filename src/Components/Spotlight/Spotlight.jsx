"use client";

import ProHeading from "ProUI/ProHeading/ProHeading";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useWhatsAppMessage } from "hooks/useWhatsAppMessage";
import useWindowDimensions from "utils/useWindowDimensions";
import ActionButton from "../../ProUI/ActionButton/ActionButton";
import HomeTemplates from "../HomeTemplates/HomeTemplates";
import Style from "./Spotlight.module.scss";
import { GiDoorRingHandle } from "react-icons/gi";
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { LuPartyPopper } from "react-icons/lu";
import { PiBagSimple } from "react-icons/pi";
import { GiLovers } from "react-icons/gi";
import AnimatedText from "ProUI/AnimatedText/AnimatedText";
import FormSheet from "Components/FormSheet/FormSheet";
import { SHEETS, useToggleVisibility } from "utils/sheetUtils";
import { sheetVisibility } from "atoms/sheetAtom";
import { useRecoilState } from "recoil";
import Link from "next/link";


const fadeUp = {
  hidden: { opacity: 0, y: 40, filter: "blur(6px)" },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1], delay },
  }),
  exit: {
    opacity: 0,
    y: -24,
    filter: "blur(4px)",
    transition: { duration: 0.45, ease: "easeIn" },
  },
};

const slideFromRight = {
  hidden: { opacity: 0, x: 60, scale: 0.97 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    x: -40,
    scale: 0.97,
    transition: { duration: 0.4, ease: "easeIn" },
  },
};


const tags = [
  {
    emoji: <GiDoorRingHandle />
    , label: "Weddings"
  },
  {
    emoji: <LiaBirthdayCakeSolid />
    , label: "Birthdays"
  },
  {
    emoji: <LuPartyPopper />
    , label: "Parties"
  },
  {
    emoji: <PiBagSimple />
    , label: "Corporate"
  },
  {
    emoji: <GiLovers />
    , label: "Engagements"
  },
];


const Spotlight = () => {
  const { isMobile } = useWindowDimensions();
  const { handleSendWhatsAppMessage } = useWhatsAppMessage();
  const shouldReduceMotion = useReducedMotion();
  const { toggleSheetVisibility } = useToggleVisibility();

  const [sheetsVisibility, setSheetsVisibility] =
    useRecoilState(sheetVisibility);

  const handleCloseDemoSheet = () => {
    setSheetsVisibility((prev) => ({
      ...prev,
      [SHEETS.LEAD_FORM]: false,
    }));
  };


  return (
    <div id="spotlight" className={`${Style.spotlight} relative bg-[#050505]`}>
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[50%] h-[50%] bg-blue-600/10 blur-[140px] rounded-full" />
        <div className="absolute bottom-[10%] right-[-5%] w-[40%] h-[40%] bg-cyan-500/5 blur-[120px] rounded-full" />
      </div>
      {/* ── Mobile: templates carousel at top ── */}
      {isMobile && (
        <div className="w-[34%] pt-[250px]">
          <HomeTemplates type="invitation" isHorizontal />
        </div>
      )}

      <motion.div className={Style.main} initial="hidden" animate="visible">

        {!isMobile && <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap gap-2 mb-6 md:justify-start justify-center"
        >
          {tags.map((tag) => (
            <span
              key={tag.label}
              className="
                  inline-flex items-center gap-1.5
                  px-4 py-2 rounded-full
                  text-xs font-medium tracking-wide
                  bg-white/5 border border-white/10
                  text-white/60
                  backdrop-blur-sm
                  select-none
                "
            >
              <span className="text-sm">{tag.emoji}</span>
              {tag.label}
            </span>
          ))}
        </motion.div>}

        {/* Heading */}
        <motion.div
          custom={0.1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          <ProHeading className={Style.heading}>
            Unveil the <AnimatedText className="text-shadow-glow" shadeOne={"#C8A96E"} shadeTwo={"#ffbc41ff"} shadeThree={"#C8A96E"}>Luxury</AnimatedText> of <br className="hidden md:block" /> Your Special Day!
          </ProHeading>
        </motion.div>

        {/* Description */}
        <motion.p
          custom={0.35}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className={Style.quote}
        >
          Create stunning digital event invitations, Beautifully designed,
          instantly shared, and effortlessly personalised for any occasion.
        </motion.p>

        {/* CTAs */}
        <motion.div
          custom={0.55}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          <div className="flex md:justify-start justify-center gap-3 flex-wrap">
            <ActionButton
              size="lg"
              color="primary"
              className='px-10'
              onPress={() => toggleSheetVisibility(SHEETS.LEAD_FORM, true)}
            >
              Create Invitation
            </ActionButton>

            <ActionButton
              size="lg"
              color="default"
              variant="bordered"
              className="border-1 border-white/20 text-white/80 hover:bg-white/5 px-8"

            >
              <Link href="/templates">
                Explore Templates
              </Link>
            </ActionButton>
          </div>
        </motion.div>

        {/* Social proof micro-line */}
        {!isMobile && <motion.p
          custom={0.75}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-10 text-xs text-white/35 md:text-left text-center tracking-wide uppercase max-w-[350px] mx-auto md:max-w-full"
        >
          Trusted by 10,000+ hosts · 50+ premium templates · No app needed
        </motion.p>}
      </motion.div>

      {/* ── Desktop: templates sidebar ── */}
      {
        !isMobile && (
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              variants={shouldReduceMotion ? {} : slideFromRight}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="w-1/2 shrink-1"
            >
              <HomeTemplates type="invitation" />
            </motion.div>
          </AnimatePresence>
        )
      }
      <FormSheet
        isOpen={sheetsVisibility?.[SHEETS.LEAD_FORM] || false}
        handleClose={handleCloseDemoSheet}
      />
    </div >
  );
};

export default Spotlight;