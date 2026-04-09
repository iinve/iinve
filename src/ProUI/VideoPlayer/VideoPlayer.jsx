import { useEffect, useRef, useState, useCallback } from "react";
import { FaPause, FaPlay } from "react-icons/fa6";
import { GoMute, GoUnmute } from "react-icons/go";

export function VideoPlayer({ url, thumbnail, muted = true, autoPlay }) {
  const videoRef = useRef(null);
  const progressRef = useRef(null); // direct DOM manipulation instead of state
  const hideTimeout = useRef(null);
  const rafRef = useRef(null);
  const isSeekingRef = useRef(false);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isMuted, setIsMuted] = useState(muted);

  // RAF-based progress update — no setState on every frame
  const updateProgress = useCallback(() => {
    const video = videoRef.current;
    const bar = progressRef.current;
    if (!video || !bar || isSeekingRef.current) return;

    const pct = video.duration ? (video.currentTime / video.duration) * 100 : 0;
    bar.style.setProperty("--progress", `${pct}%`);
    bar.value = video.currentTime;

    rafRef.current = requestAnimationFrame(updateProgress);
  }, []);

  const startProgress = useCallback(() => {
    cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(updateProgress);
  }, [updateProgress]);

  const stopProgress = useCallback(() => {
    cancelAnimationFrame(rafRef.current);
  }, []);

  useEffect(() => {
    return () => {
      clearTimeout(hideTimeout.current);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const togglePlay = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  }, []);

  const handleMute = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  }, []);

  const handleMouseMove = useCallback(() => {
    setIsHovered(true);
    clearTimeout(hideTimeout.current);
    hideTimeout.current = setTimeout(() => setIsHovered(false), 3000);
  }, []);

  const handleSeekStart = () => {
    isSeekingRef.current = true;
  };

  const handleSeek = (e) => {
    const video = videoRef.current;
    if (!video) return;
    const time = Number(e.target.value);
    video.currentTime = time;
    const pct = video.duration ? (time / video.duration) * 100 : 0;
    progressRef.current?.style.setProperty("--progress", `${pct}%`);
  };

  const handleSeekEnd = () => {
    isSeekingRef.current = false;
  };

  const controlsVisible = !isPlaying || isHovered;

  return (
    <div
      className="relative w-full rounded-3xl overflow-hidden bg-black"
      onMouseEnter={() => setIsHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        clearTimeout(hideTimeout.current);
        setIsHovered(false);
      }}
    >
      <video
        ref={videoRef}
        src={url}
        autoPlay={autoPlay}
        muted={isMuted}
        loop
        playsInline
        poster={thumbnail}
        preload="metadata"
        className="w-full aspect-video object-cover"
        onClick={togglePlay}
        onPlay={() => {
          setIsPlaying(true);
          startProgress();
        }}
        onPause={() => {
          setIsPlaying(false);
          stopProgress();
        }}
        onLoadedMetadata={() => {
          const video = videoRef.current;
          if (progressRef.current && video) {
            progressRef.current.max = video.duration;
          }
        }}
        onEnded={() => {
          setIsPlaying(false);
          stopProgress();

          if (progressRef.current) {
            progressRef.current.value = 0;
            progressRef.current.style.setProperty("--progress", "0%");
          }
        }}
      />

      {/* Progress bar — no state, direct DOM */}
      <div
        className="absolute bottom-4 left-0 w-full z-30 px-10"
        style={{
          opacity: controlsVisible ? 1 : 0,
          pointerEvents: controlsVisible ? "auto" : "none",
          transition: "opacity 0.3s",
        }}
      >
        <input
          ref={progressRef}
          type="range"
          min={0}
          max={100}
          defaultValue={0}
          step={0.1}
          className="w-full custom-range"
          onMouseDown={handleSeekStart}
          onTouchStart={handleSeekStart}
          onChange={handleSeek}
          onMouseUp={handleSeekEnd}
          onTouchEnd={handleSeekEnd}
        />
      </div>

      {/* Play / Pause */}
      <button
        onClick={togglePlay}
        className="absolute inset-0 flex items-center justify-center z-20"
        style={{
          opacity: controlsVisible ? 1 : 0,
          pointerEvents: controlsVisible ? "auto" : "none",
          transition: "opacity 0.3s",
        }}
      >
        <div className="w-20 h-20 flex items-center justify-center bg-black/50 text-white rounded-full backdrop-blur-md transition-transform hover:scale-110 active:scale-95">
          {isPlaying ? (
            <FaPause size={24} />
          ) : (
            <FaPlay size={26} className="ml-1" />
          )}
        </div>
      </button>

      {/* Mute */}
      <button
        onClick={handleMute}
        className="absolute bottom-12 right-10 z-40 bg-black/50 text-white w-10 h-10 flex items-center justify-center rounded-full"
        style={{
          opacity: controlsVisible ? 1 : 0,
          pointerEvents: controlsVisible ? "auto" : "none",
          transition: "opacity 0.3s",
        }}
      >
        {isMuted ? <GoMute /> : <GoUnmute />}
      </button>
    </div>
  );
}
