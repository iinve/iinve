import ActionButton from "ProUI/ActionButton/ActionButton";
import ProIcon from "ProUI/Icons/icons";
import { useEffect, useRef, useState } from "react";
import { Button } from "rsuite";

export default function MusicPlayer() {
  const audioRef = useRef(null);
  const canvasRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPlayer, setShowPlayer] = useState(true);
let scrollTimeout = useRef(null);

  useEffect(() => {
    if (!audioRef.current) return;

    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const source = audioContext?.createMediaElementSource(audioRef.current);
    const analyser = audioContext?.createAnalyser();
    source?.connect(analyser);
    analyser?.connect(audioContext?.destination);

    analyser.fftSize = 256;
    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

   const draw = () => {
  requestAnimationFrame(draw);

  analyser.getByteFrequencyData(dataArray);

  ctx.fillStyle = "#fff"; // Background
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  const barWidth = (canvas.width / bufferLength) * 2;
  let barHeight;
  let x = 0;
  const centerY = canvas.height / 2;

  for (let i = 0; i < bufferLength; i++) {
    barHeight = dataArray[i];

    ctx.fillStyle = `rgb(${barHeight + 100},50,150)`;

    // Draw from center upwards
    ctx.fillRect(x, centerY - barHeight / 9, barWidth, barHeight / 9);

    // Draw from center downwards (mirror effect)
    ctx.fillRect(x, centerY, barWidth, barHeight / 9);

    x += barWidth + 1;
  }
};


    draw();

    return () => {
      audioContext.close();
    };
  }, [isPlaying]);

  useEffect(() => {
    const handleScroll = () => {
      setShowPlayer(false);
      clearTimeout(scrollTimeout.current);
      scrollTimeout.current = setTimeout(() => {
        setShowPlayer(true);
      }, 500); // 1.5 seconds after stopping scroll
    };
  
    window.addEventListener("scroll", handleScroll);
  
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout.current);
    };
  }, []);

  const togglePlay = () => {
    
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
      
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className={`flex items-center p-2 rounded-2xl shadow-lg w-fit bg-white/50 fixed bottom-0 right-0 m-4 z-[999] backdrop-blur-lg transition-all duration-300 ${showPlayer ? 'opacity-100' : 'opacity-0'}`}>
      <canvas
        ref={canvasRef}
        width={50}
        height={50}
        className="rounded-2xl"
      ></canvas>

      <audio
        ref={audioRef}
        src="/audio/arabic.mp3"
      />

      <ActionButton
        onClick={togglePlay}
         className="bg-gradient-to-tr from-blue-500 to-cyan-500 text-white shadow-lg ml-2"
        isIconOnly
        color="warning" variant="faded"
      >
        <ProIcon name={isPlaying ? "FaPause" : "IoIosPlay"}  color="white" size={18}/>
      </ActionButton>
    </div>
  );
}
