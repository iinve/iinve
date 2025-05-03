import ActionButton from "ProUI/ActionButton/ActionButton";
import ProIcon from "ProUI/Icons/icons";
import { useEffect, useRef, useState } from "react";

export default function MusicPlayer({music}) {
  const audioRef = useRef(null);
  const canvasRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPlayer, setShowPlayer] = useState(true);

  const audioContextRef = useRef(null);
  const analyserRef = useRef(null);
  const sourceRef = useRef(null);
  const animationIdRef = useRef(null);
  const scrollTimeout = useRef(null);

  useEffect(() => {
    if (!audioRef.current || !canvasRef.current || audioContextRef.current) return;

    // Initialize AudioContext and Analyser only once
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const source = audioContext.createMediaElementSource(audioRef.current);
    const analyser = audioContext.createAnalyser();

    source.connect(analyser);
    analyser.connect(audioContext.destination);

    analyser.fftSize = 256;
    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const draw = () => {
      animationIdRef.current = requestAnimationFrame(draw);

      analyser.getByteFrequencyData(dataArray);

      ctx.fillStyle = "#fff"; // Background
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const barWidth = (canvas.width / bufferLength) * 6;
      let x = 0;
      const centerY = canvas.height / 2;

      for (let i = 0; i < bufferLength; i++) {
        const barHeight = dataArray[i];

        ctx.fillStyle = `rgb(${barHeight}, ${Math.floor(barHeight * 0.4)}, ${255 - barHeight})`;

        // Draw from center upwards and downwards (mirror effect)
        ctx.fillRect(x, centerY - barHeight / 9, barWidth, barHeight / 9);
        ctx.fillRect(x, centerY, barWidth, barHeight / 9);

        x += barWidth + 1;
      }
    };

    draw();

    // Save references
    audioContextRef.current = audioContext;
    analyserRef.current = analyser;
    sourceRef.current = source;

    return () => {
      cancelAnimationFrame(animationIdRef.current);
      audioContext.close();
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowPlayer(false);
      clearTimeout(scrollTimeout.current);
      scrollTimeout.current = setTimeout(() => {
        setShowPlayer(true);
      }, 500);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout.current);
    };
  }, []);

  const togglePlay = async () => {
    if (!audioRef.current) return;

    const audioContext = audioContextRef.current;
    if (audioContext && audioContext.state === "suspended") {
      await audioContext.resume(); // Required for autoplay policies
    }

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <div className={`flex items-center justify-end p-2 rounded-full shadow-lg ${isPlaying ? 'w-[130px]' : 'w-[65px]'} bg-white/50 fixed bottom-0 right-0 m-4 z-[999] backdrop-blur-lg transition-all duration-300 ${showPlayer ? 'opacity-100' : 'opacity-0'}`}>
      <canvas
        ref={canvasRef}
        width={50}
        height={50}
        className={`rounded-full shadow-lg mr-4 absolute transition-all duration-300 left-2 
              ${isPlaying ? 'opacity-100 visible scale-100' : 'opacity-0 invisible scale-75'}`}
      />
      <audio ref={audioRef} src={music} />

      <ActionButton
        onClick={togglePlay}
        className="bg-gradient-to-tr from-blue-500 to-cyan-500 text-white shadow-lg"
        isIconOnly
        color="warning"
        variant="faded"
        size="lg"
      >
        <ProIcon name={isPlaying ? "FaPause" : "IoIosPlay"} color="white" size={18} />
      </ActionButton>
    </div>
  );
}
