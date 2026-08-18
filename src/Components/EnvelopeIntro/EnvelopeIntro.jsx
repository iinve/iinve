"use client";

import StarField from "Components/StarField/StarField";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { getHeading } from "utils/greetingUtils";
import Style from "./EnvelopeIntro.module.scss";

const SHARD_ANGLES = [10, 55, 95, 135, 180, 220, 260, 305];

const EnvelopeIntro = ({ data, onOpen, onPlayRequest }) => {
  const [phase, setPhase] = useState("sealed"); // sealed -> breaking -> opening -> done

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const handleSealClick = () => {
    if (phase !== "sealed") return;
    onPlayRequest?.();
    setPhase("breaking");
    setTimeout(() => setPhase("opening"), 560);
  };

  const handleCardAnimationComplete = () => {
    if (phase === "opening") {
      setPhase("flipping");
    } else if (phase === "flipping") {
      setPhase("done");
      onOpen?.();
    }
  };

  const isOpen = phase === "opening" || phase === "flipping" || phase === "done";

  return (
    <motion.div className={Style.overlay} exit={{ opacity: 0 }} transition={{ duration: 0.35 }}>
      <div className={Style.backdrop} />
      <StarField />

      <motion.div
        className={Style.stage}
        animate={{ opacity: phase === "done" ? 0 : 1 }}
        transition={{ duration: 0.4, ease: "easeIn" }}
      >
        {!isOpen && (
          <motion.div
            className={Style.intro}
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className={Style.eyebrow}>{getHeading(data)}</span>
            <h2>
              {data?.groom} <em>&amp;</em> {data?.bride}
            </h2>
          </motion.div>
        )}

        <div className={Style.stageBox}>
          <motion.div
            className={Style.envelope}
            initial={{ rotateX: 0, scale: 1 }}
            animate={{ rotateX: isOpen ? -10 : 0, scale: isOpen ? 1.06 : 1 }}
            transition={{ type: "spring", stiffness: 90, damping: 16 }}
          >
            <div className={Style.envelopeBack} />
            <div className={Style.crease} />

            <motion.div
              className={Style.card}
              initial={{
                y: 18,
                z: -60,
                rotateX: -50,
                rotateY: 0,
                scale: 1,
                scaleY: 0.82,
                opacity: 0,
              }}
              animate={
                phase === "flipping"
                  ? { y: -520, z: 160, rotateX: 0, rotateY: 110, scale: 1.7, scaleY: 1, opacity: [1, 1, 0] }
                  : isOpen
                    ? { y: -248, z: 90, rotateX: 0, rotateY: 0, scale: 1, scaleY: 1, opacity: 1 }
                    : { y: 18, z: -60, rotateX: -50, rotateY: 0, scale: 1, scaleY: 0.82, opacity: 0 }
              }
              transition={
                phase === "flipping"
                  ? { duration: 0.62, ease: [0.7, 0, 0.3, 1], opacity: { times: [0, 0.6, 1] } }
                  : isOpen
                    ? { type: "spring", stiffness: 130, damping: 13, mass: 0.9 }
                    : { duration: 0 }
              }
              style={{ zIndex: isOpen ? 6 : 2 }}
              onAnimationComplete={handleCardAnimationComplete}
            >
              <span className={Style.cardBorder} />
              <div className={Style.cardMonogram}>
                <span>{data?.groom?.[0]}</span>
                <em>&amp;</em>
                <span>{data?.bride?.[0]}</span>
              </div>
              {isOpen && (
                <motion.span
                  className={Style.cardShine}
                  initial={{ x: "-130%", opacity: 0 }}
                  animate={{ x: "130%", opacity: [0, 0.9, 0] }}
                  transition={{ duration: 0.9, delay: 0.3, ease: "easeInOut" }}
                />
              )}
            </motion.div>

            <motion.div
              className={Style.flap}
              initial={{ rotateX: 0 }}
              animate={{ rotateX: isOpen ? [0, -178, -172, -178] : 0 }}
              transition={
                isOpen
                  ? { duration: 1.05, times: [0, 0.72, 0.88, 1], ease: "easeOut" }
                  : { duration: 0.4 }
              }
            >
              <span className={Style.flapShade} />
            </motion.div>

            <div className={Style.envelopeFront} />

            {!isOpen && (
              <motion.button
                type="button"
                className={Style.seal}
                onClick={handleSealClick}
                whileTap={{ scale: 0.9 }}
                initial={{ x: "-50%", y: "-50%", scale: 0.8, opacity: 0 }}
                animate={
                  phase === "breaking"
                    ? { x: "-50%", y: "-64%", scale: 1.5, opacity: 0, rotate: 22 }
                    : { x: "-50%", y: "-50%", scale: [1, 1.05, 1], opacity: 1, rotate: 0 }
                }
                transition={
                  phase === "breaking"
                    ? { duration: 0.4, ease: [0.55, 0, 1, 0.45] }
                    : { duration: 2.4, repeat: Infinity, ease: "easeInOut" }
                }
                aria-label="Open invitation"
              >
                <span className={Style.sealRing} />
                <span className={Style.sealShine} />
                <span className={Style.sealLetters}>
                  {data?.groom?.[0]}
                  {data?.bride?.[0]}
                </span>
              </motion.button>
            )}

            {phase === "breaking" && (
              <>
                <motion.span
                  className={Style.burst}
                  initial={{ x: "-50%", y: "-50%", scale: 0.4, opacity: 0.8 }}
                  animate={{ x: "-50%", y: "-50%", scale: 2.8, opacity: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                />
                {SHARD_ANGLES.map((angle, i) => {
                  const rad = (angle * Math.PI) / 180;
                  const dist = 42 + (i % 3) * 16;
                  return (
                    <motion.span
                      key={angle}
                      className={Style.shard}
                      initial={{ x: "-50%", y: "-50%", opacity: 1, scale: 1, rotate: angle }}
                      animate={{
                        x: `calc(-50% + ${Math.cos(rad) * dist}px)`,
                        y: `calc(-50% + ${Math.sin(rad) * dist}px)`,
                        opacity: 0,
                        scale: 0.3,
                        rotate: angle + (i % 2 === 0 ? 90 : -90),
                      }}
                      transition={{ duration: 0.55, ease: [0.55, 0, 0.85, 0.45] }}
                    />
                  );
                })}
              </>
            )}
          </motion.div>

          <div className={Style.groundShadow} />
        </div>

        {phase === "sealed" && (
          <motion.p
            className={Style.hint}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.4, 0.9, 0.4], y: [0, -3, 0] }}
            transition={{
              opacity: { delay: 1, duration: 2.6, repeat: Infinity, ease: "easeInOut" },
              y: { delay: 1, duration: 2.6, repeat: Infinity, ease: "easeInOut" },
            }}
          >
            Tap the seal to open
          </motion.p>
        )}
      </motion.div>
    </motion.div>
  );
};

export default EnvelopeIntro;
