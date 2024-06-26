"use client";

import { Avatar, AvatarGroup } from "@nextui-org/react";
import Style from "./Quotes.module.scss";
import Image from "next/image";
import { Assets } from "@/assets/assets";
import { anilShakthiData } from "@/Data/Anil-Shakthi";
import CommonButton from "../CommonButton";
import { LuMessagesSquare } from "react-icons/lu";
import { useQuotes } from "./useQuotes";
import { useInView } from "framer-motion";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

const Quote = () => {
  const { handleWishes } = useQuotes();
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { amount: "some" });

  useEffect(() => {
    if (inView) {
      setTimeout(() => {
        controls.start("visible");
      }, 250);
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  // Animation variants
  const variants = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <div className={Style.quote}>
      <div className={Style.head}>
        <span>
          <Image src={Assets?.quote} alt="Quote" />
        </span>
        <div className={Style.avatars}>
          <AvatarGroup isBordered max={2}>
            {anilShakthiData?.couples_data.map((item, i) => (
              <Avatar src={item?.avatar?.src} size="lg" key={i} />
            ))}
          </AvatarGroup>
        </div>
      </div>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={variants}
        transition={{ duration: 0.5 }}
        className={Style.container}
      >
        <p>
          Your presence will bring immense joy and blessings to our hearts. We
          look forward to celebrating this special day with you.
        </p>
        <p className={Style.name}>- By Anil and Shakthi</p>
      </motion.div>
      <div className={Style.button_box}>
        <CommonButton
          text={"Send Wishes"}
          icon={<LuMessagesSquare />}
          onClick={handleWishes}
        />
      </div>
    </div>
  );
};

export default Quote;
