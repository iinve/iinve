"use client";

import AnimatedBackground from "Components/AnimatedBackground/AnimatedBackground";
import EnvelopeIntro from "Components/EnvelopeIntro/EnvelopeIntro";
import EventDetails from "Components/EventDetails/EventDetails";
import Footer from "Components/Footer/index.js";
import HeroSlider from "Components/HeroSlider/HeroSlider";
import ImageGallery from "Components/ImageGallery/ImageGallery";
import LocationSection from "Components/LocationSection/LocationSection";
import MessageBand from "Components/MessageBand/MessageBand";
import ParentsDetails from "Components/ParentsDetails/ParentsDetails";
import SoundToggle from "Components/SoundToggle/SoundToggle";
import WeddingCountdown from "Components/WeddingCountdown/WeddingCountdown";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Style from "./EnvelopeInvite.module.scss";

const PHASES = {
  SEALED: "sealed",
  REVEALED: "revealed",
};

function EnvelopeInvite({ data }) {
  const [phase, setPhase] = useState(PHASES.SEALED);
  const revealed = phase === PHASES.REVEALED;
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const playMusic = () => {
    if (!audioRef.current || playing) return;
    audioRef.current.play().catch(() => {});
    setPlaying(true);
  };

  const stopMusic = () => {
    if (!audioRef.current) return;
    audioRef.current.pause();
    setPlaying(false);
  };

  const toggleMusic = () => {
    if (playing) {
      stopMusic();
    } else {
      playMusic();
    }
  };

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) stopMusic();
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("pagehide", stopMusic);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("pagehide", stopMusic);
    };
  }, []);

  return (
    <div
      className={Style.wrapper}
      style={{
        "--theme-color": data?.theme,
        "--content-color": data?.default_color,
        "--highlight-color": data?.highlight_color,
      }}
    >
      {revealed && <AnimatedBackground variant="light" fixed />}

      <AnimatePresence>
        {phase === PHASES.SEALED && (
          <EnvelopeIntro
            key="envelope"
            data={data}
            onOpen={() => setPhase(PHASES.REVEALED)}
            onPlayRequest={playMusic}
          />
        )}
      </AnimatePresence>

      <motion.div
        className="relative z-10"
        style={{ marginBottom: "350px" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: revealed ? 1 : 0 }}
        transition={{ duration: 0.7 }}
      >
        <HeroSlider data={data} active={revealed} />

        <ParentsDetails data={data} />

        <WeddingCountdown data={data} />

        <div className="overflow-hidden">
          <MessageBand data={data} />
          <EventDetails data={data} />
        </div>

        <div className={Style.gallery}>
          <span className={Style.galleryEyebrow}>Our Moments</span>
          <ImageGallery images={data?.images} />
        </div>

        <LocationSection data={data} />

        <SoundToggle
          music={data?.music}
          playing={playing}
          onToggle={toggleMusic}
        />
      </motion.div>

      {data?.music && <audio ref={audioRef} src={data.music} loop />}

      <Footer data={data} />
    </div>
  );
}

export default EnvelopeInvite;
