"use client";

import { Avatar } from "@heroui/react";
import { motion } from "framer-motion";
import Style from "./CouplesDetails.module.scss";

const CouplesDetails = ({ full_name, bio, avatar }) => {
  return (
    <motion.div
      className={`${Style.couplesDetails}`}
      initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: false, amount: 0.5 }} // triggers when 50% in view
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className={Style.avatar}>
        <Avatar size="lg" className="w-full h-full">
          <Avatar.Image
            radius="full"
            src={avatar?.src}
            className="object-cover"
          />
        </Avatar>
      </div>

      <div className={Style.ContentBox}>
        <h5>{full_name}</h5>
        <p>{bio}</p>
      </div>
    </motion.div>
  );
};

export default CouplesDetails;
