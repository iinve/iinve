"use client";

import { motion } from "framer-motion";
import { LuMessageCircleHeart } from "react-icons/lu";
import Style from "./MessageBand.module.scss";

const MessageBand = ({ data }) => {
  const sendWishes = () => {
    const numbers = [data?.phone1, data?.phone2].filter(Boolean);
    const message = encodeURIComponent(
      "Wishing you both a lifetime filled with love, laughter, and endless happiness.",
    );
    numbers.forEach((phone) =>
      window.open(`https://wa.me/${phone}?text=${message}`, "_blank"),
    );
  };

  return (
    <div className={Style.band}>
      <motion.span
        className={Style.mark}
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 0.5, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        &ldquo;
      </motion.span>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7 }}
      >
        {data?.wdn_quote}
      </motion.p>

      <motion.span
        className={Style.signature}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {data?.groom} &amp; {data?.bride}
      </motion.span>

      {/* {data?.send_wishes && (
        <motion.button
          className={Style.wishes}
          onClick={sendWishes}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <LuMessageCircleHeart size={16} />
          Send Wishes
        </motion.button>
      )} */}
    </div>
  );
};

export default MessageBand;
