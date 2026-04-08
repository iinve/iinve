"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ActionButton from "ProUI/ActionButton/ActionButton";
import AnimatedText from "ProUI/AnimatedText/AnimatedText";
import Button from "ProUI/Button/Button";
import { VideoPlayer } from "ProUI/VideoPlayer/VideoPlayer";

const VideoIntro = () => {
  return (
    <section className="relative py-24 md:py-32 bg-[#050505] overflow-hidden">
      {/* Ambient Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="relative w-full max-w-4xl group"
          >
            <VideoPlayer
              url="/assets/videos/iinve-intro.mp4"
              autoPlay
              muted
              playsInline
              aria-label="iinve introduction video"
            />
          </motion.div>

          {/* Hero Heading */}
          <div className="md:w-2/3">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight ">
              The Future of <br />
              <AnimatedText>Invitations</AnimatedText>
            </h2>

            {/* Supporting Text */}
            <p className="text-white/50 text-lg md:text-xl font-light leading-relaxed mb-12 max-w-2xl">
              Say goodbye to paper waste and hello to stylish digital
              experiences. Whether it’s a wedding or a corporate gala, create
              and share beautiful invites instantly through a platform designed
              for the modern era.
            </p>

            {/* Centered CTA */}

            <Button size="lg" type="secondary" href="/templates">
              Create Your Invitation
            </Button>
          </div>

          {/* Hero Image - Elevated with Glow */}
        </motion.div>
      </div>
    </section>
  );
};

export default VideoIntro;
