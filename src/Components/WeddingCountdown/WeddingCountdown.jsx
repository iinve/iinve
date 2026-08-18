"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useCountdown } from "./useCountdown";
import Style from "./WeddingCountdown.module.scss";

const UNITS = [
  { key: "days", label: "Days" },
  { key: "hours", label: "Hours" },
  { key: "minutes", label: "Minutes" },
  { key: "seconds", label: "Seconds" },
];

const WeddingCountdown = ({ data }) => {
  const timeLeft = useCountdown(data?.date, data?.begin_time);

  return (
    <div className={Style.countdown}>
      <span className={Style.eyebrow}>Counting down to forever</span>
      <h3>{timeLeft.done ? "The Celebration Has Begun" : "Until We Say I Do"}</h3>

      {!timeLeft.done && (
        <div className={Style.strip}>
          {UNITS.map(({ key, label }, i) => (
            <div className={Style.unit} key={key}>
              {i !== 0 && <span className={Style.sep}>:</span>}
              <div className={Style.unitBody}>
                <AnimatePresence mode="popLayout">
                  <motion.span
                    key={timeLeft[key]}
                    className={Style.digit}
                    initial={{ y: 14, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -14, opacity: 0 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                  >
                    {String(timeLeft[key]).padStart(2, "0")}
                  </motion.span>
                </AnimatePresence>
                <span className={Style.unitLabel}>{label}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WeddingCountdown;
