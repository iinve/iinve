"use client";

import { motion } from "framer-motion";
import { LuVolume2, LuVolumeX } from "react-icons/lu";
import Style from "./SoundToggle.module.scss";

const SoundToggle = ({ music, playing, onToggle }) => {
  if (!music) return null;

  return (
    <motion.button
      className={Style.toggle}
      onClick={onToggle}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5, duration: 0.4 }}
      aria-label={playing ? "Pause music" : "Play music"}
    >
      {playing ? <LuVolume2 size={16} /> : <LuVolumeX size={16} />}
      <span className={playing ? Style.bars : ""}>
        <i />
        <i />
        <i />
      </span>
    </motion.button>
  );
};

export default SoundToggle;
