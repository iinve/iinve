"use client";
import { useEffect, useRef, useState, useCallback } from "react";

export default function MusicPlayer({
  music,
  trackName = "Our Song",
  trackSub = "Wedding Mix",
}) {
  const audioRef = useRef(null);
  const audioCtxRef = useRef(null);
  const analyserRef = useRef(null);
  const canvasRef = useRef(null);
  const rafRef = useRef(null);
  const noteTimer = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [visible, setVisible] = useState(true);
  const scrollTimer = useRef(null);

  // Scroll hide/show
  useEffect(() => {
    const onScroll = () => {
      setVisible(false);
      clearTimeout(scrollTimer.current);
      scrollTimer.current = setTimeout(() => setVisible(true), 500);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Audio init
  const initAudio = useCallback(() => {
    if (audioCtxRef.current || !audioRef.current) return;
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const analyser = ctx.createAnalyser();
    analyser.fftSize = 64;
    ctx.createMediaElementSource(audioRef.current).connect(analyser);
    analyser.connect(ctx.destination);
    audioCtxRef.current = ctx;
    analyserRef.current = analyser;
  }, []);

  // Canvas bar visualizer
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !analyserRef.current) return;
    const ctx = canvas.getContext("2d");
    const data = new Uint8Array(analyserRef.current.frequencyBinCount);
    const draw = () => {
      rafRef.current = requestAnimationFrame(draw);
      analyserRef.current.getByteFrequencyData(data);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const barW = 3,
        gap = 2,
        count = 6;
      const startX = (canvas.width - (count * barW + (count - 1) * gap)) / 2;
      for (let i = 0; i < count; i++) {
        const v = data[Math.floor((i * data.length) / count)] / 255;
        const h = Math.max(3, v * canvas.height);
        const x = startX + i * (barW + gap);
        const y = (canvas.height - h) / 2;
        ctx.fillStyle = `rgba(255,255,255,${0.5 + v * 0.5})`;
        ctx.beginPath();
        ctx.roundRect(x, y, barW, h, 2);
        ctx.fill();
      }
    };
    if (isPlaying) draw();
    return () => cancelAnimationFrame(rafRef.current);
  }, [isPlaying]);

  const togglePlay = async () => {
    initAudio();
    if (audioCtxRef.current?.state === "suspended")
      await audioCtxRef.current.resume();
    if (isPlaying) {
      audioRef.current.pause();
      clearInterval(noteTimer.current);
    } else {
      audioRef.current.play();
    }
    setIsPlaying((p) => !p);
  };

  return (
    <div
      className={`fixed bottom-4 right-4 z-[999] flex flex-col items-end gap-1.5 transition-opacity duration-300 ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
    >
      {/* "tap to play" hint */}
      {!isPlaying && (
        <p className="text-[11px] text-white/40 tracking-wide mr-1 animate-fade-in">
          tap to play
        </p>
      )}

      {/* Pill */}
      <div
        className={`flex items-center rounded-full border transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]
        bg-white/10 border-white/20 backdrop-blur-xl
        ${isPlaying ? "pl-3 pr-1.5 py-1.5 border-white/30" : "pl-0 pr-1.5 py-1.5"}`}
      >
        {/* Track info */}
        <div
          className={`overflow-hidden transition-all duration-400 ${isPlaying ? "w-[100px] opacity-100 mr-2" : "w-0 opacity-0"}`}
        >
          <span className="block text-[12px] font-medium text-white/90 whitespace-nowrap">
            {trackName}
          </span>
          <span className="block text-[10px] text-white/50 whitespace-nowrap">
            {trackSub}
          </span>
        </div>

        {/* Canvas bars */}
        <canvas
          ref={canvasRef}
          width={28}
          height={20}
          className={`mr-2 transition-all duration-300 ${isPlaying ? "opacity-100 w-7" : "opacity-0 w-0"}`}
        />

        {/* Button */}
        <button
          onClick={togglePlay}
          className="relative w-[42px] h-[42px] rounded-full bg-white flex items-center justify-center
            transition-transform duration-200 hover:scale-110 active:scale-95 flex-shrink-0"
        >
          {/* Pulse rings when paused */}
          {!isPlaying && (
            <>
              <span className="absolute inset-0 rounded-full border border-white/50 animate-ping" />
              <span className="absolute inset-0 rounded-full border border-white/25 animate-ping [animation-delay:0.6s]" />
            </>
          )}

          {/* Play icon */}
          <svg
            className={`absolute transition-all duration-200 ${isPlaying ? "opacity-0 scale-50" : "opacity-100 scale-100"}`}
            width="16"
            height="16"
            viewBox="0 0 24 24"
          >
            <polygon points="6 3 20 12 6 21 6 3" fill="#1a0a2e" />
          </svg>
          {/* Pause icon */}
          <svg
            className={`absolute transition-all duration-200 ${isPlaying ? "opacity-100 scale-100" : "opacity-0 scale-50"}`}
            width="16"
            height="16"
            viewBox="0 0 24 24"
          >
            <rect x="6" y="4" width="4" height="16" rx="1" fill="#1a0a2e" />
            <rect x="14" y="4" width="4" height="16" rx="1" fill="#1a0a2e" />
          </svg>
        </button>
      </div>

      <audio ref={audioRef} src={music} loop />
    </div>
  );
}
