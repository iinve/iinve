"use client";


import { Avatar, AvatarGroup } from "@heroui/react";
import { Assets } from "assets/assets";
import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { LuMessagesSquare } from "react-icons/lu";
import CommonButton from "../CommonButton";
import Style from "./Quotes.module.scss";
import { useQuotes } from "./useQuotes";

const Quote = ({ data }) => {
  const { handleWishes } = useQuotes(data);
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
            {data?.couples_data.map((item, i) => (
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
        <p className={Style.name}>
          - By {data?.bride} and {data?.groom}
        </p>
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
