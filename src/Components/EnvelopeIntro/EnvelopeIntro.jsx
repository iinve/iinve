"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getHeading } from "utils/greetingUtils";
import Style from "./EnvelopeIntro.module.scss";

const DUST_MOTES = [
  { left: "18%", top: "26%", size: 3, duration: 12, delay: 0 },
  { left: "80%", top: "30%", size: 3, duration: 14, delay: 2 },
  { left: "26%", top: "70%", size: 3, duration: 13, delay: 4 },
  { left: "74%", top: "66%", size: 3, duration: 15, delay: 1 },
  { left: "50%", top: "14%", size: 3, duration: 11, delay: 3 },
  { left: "30%", top: "82%", size: 3, duration: 13.5, delay: 2.6 },
];

const EnvelopeIntro = ({ data, onOpen, onPlayRequest }) => {
  const [phase, setPhase] = useState("sealed"); // sealed -> revealing -> leaving -> holding -> done

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    if (phase === "revealing") {
      const t = setTimeout(() => setPhase("leaving"), 850 + 800);
      return () => clearTimeout(t);
    }
    if (phase === "leaving") {
      const t = setTimeout(() => setPhase("holding"), 550);
      return () => clearTimeout(t);
    }
    if (phase === "holding") {
      const t = setTimeout(() => {
        setPhase("done");
        onOpen?.();
      }, 1200);
      return () => clearTimeout(t);
    }
  }, [phase, onOpen]);

  const handleEnvelopeClick = () => {
    if (phase !== "sealed") return;
    onPlayRequest?.();
    setPhase("revealing");
  };

  const isLeaving =
    phase === "leaving" || phase === "holding" || phase === "done";

  return (
    <motion.div
      className={Style.overlay}
      style={
        data?.intro_background
          ? {
              "--intro-bg": `url(${data.intro_background.src || data.intro_background})`,
            }
          : undefined
      }
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className={Style.backdrop} />
      {data?.intro_background && (
        <>
          <motion.div
            className={Style.bgPhoto}
            initial={{ scale: 1 }}
            animate={{ scale: 1.15 }}
            transition={{ duration: 26, ease: "linear" }}
          />
          <div className={Style.bgTint} />
        </>
      )}

      <div className={Style.motes} aria-hidden="true">
        {DUST_MOTES.map((m, i) => (
          <motion.span
            key={i}
            className={Style.mote}
            style={{ left: m.left, top: m.top, width: m.size, height: m.size }}
            animate={{ y: [0, -18, 0], opacity: [0.15, 0.75, 0.15] }}
            transition={{
              duration: m.duration,
              delay: m.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className={Style.grain} aria-hidden="true" />

      <motion.div
        className={Style.stage}
        animate={{ opacity: phase === "done" ? 0 : 1 }}
        transition={{ duration: 0.5, ease: "easeIn" }}
      >
        {phase !== "holding" && phase !== "done" && (
          <motion.div
            className={Style.intro}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className={Style.eyebrow}>{getHeading(data)}</span>
            <h2>
              <motion.span className={Style.nameReveal}>
                {data?.bride}
              </motion.span>{" "}
              <em className="block md:inline">&amp;</em>{" "}
              <motion.span className={Style.nameReveal}>
                {data?.groom}
              </motion.span>
            </h2>
          </motion.div>
        )}

        <div className={Style.stageBox}>
          {!isLeaving && <span className={Style.envelopeGlow} />}

          {data?.intro_flower && (
            <motion.span
              className={Style.flowerWrap}
              initial={{ opacity: 0, x: 0, rotate: -6 }}
              animate={
                isLeaving
                  ? { opacity: 0, x: -40, y: -260, rotate: -14 }
                  : { opacity: 1, x: 0, rotate: 0 }
              }
              transition={
                isLeaving
                  ? { duration: 0.8, ease: [0.5, 0, 0.2, 1] }
                  : { duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }
              }
            >
              <Image
                src={data.intro_flower}
                alt=""
                className={Style.flowerImage}
                sizes="30vw"
                priority
              />
            </motion.span>
          )}

          <motion.button
            type="button"
            className={Style.envelopeTap}
            onClick={handleEnvelopeClick}
            aria-label="Open invitation"
            whileTap={phase === "sealed" ? { scale: 0.96 } : undefined}
            initial={{ opacity: 0, scale: 0.84, y: 14 }}
            animate={
              isLeaving
                ? { opacity: 0, scale: 0.92, y: -260 }
                : { opacity: 1, scale: 1, y: 0 }
            }
            transition={
              isLeaving
                ? { duration: 0.85, ease: [0.5, 0, 0.2, 1] }
                : { type: "spring", stiffness: 150, damping: 15, mass: 0.9 }
            }
          >
            {data?.intro_envelope && (
              <motion.div
                animate={
                  phase === "revealing" ? { scale: [1, 1.09, 1] } : { scale: 1 }
                }
                transition={
                  phase === "revealing"
                    ? { duration: 0.65, ease: [0.34, 1.56, 0.64, 1] }
                    : { duration: 0.3, ease: "easeOut" }
                }
              >
                <Image
                  src={data.intro_envelope}
                  alt="Wedding invitation envelope"
                  className={Style.envelopeImage}
                  sizes="80vw"
                  priority
                />
              </motion.div>
            )}
          </motion.button>

          <motion.div
            className={Style.groundShadow}
            animate={{ opacity: isLeaving ? 0 : 1 }}
            transition={{ duration: 0.5 }}
          />
        </div>

        {(phase === "holding" || phase === "done") && (
          <>
            <motion.span
              className={`${Style.bismillahLine} ${Style.bismillahLineTop}`}
              initial={{ opacity: 0, scaleX: 0.4 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{
                duration: 0.9,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
            />
            <motion.p
              className={Style.bismillahText}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              dir="rtl"
              lang="ar"
            >
              {data?.bismillah || "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ"}
            </motion.p>
            {/* <motion.span
              className={`${Style.bismillahLine} ${Style.bismillahLineBottom}`}
              initial={{ opacity: 0, scaleX: 0.4 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{
                duration: 0.9,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
            /> */}
          </>
        )}

        {phase === "sealed" && (
          <motion.p
            className={Style.hint}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.5, 0.85, 0.5] }}
            transition={{
              delay: 1,
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            Tap to open
          </motion.p>
        )}
      </motion.div>
    </motion.div>
  );
};

export default EnvelopeIntro;
