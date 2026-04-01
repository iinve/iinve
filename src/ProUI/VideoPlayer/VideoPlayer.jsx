import { useEffect, useRef, useState } from "react"
import { FaPause, FaPlay } from "react-icons/fa6"
import { GoMute, GoUnmute } from "react-icons/go"

export function VideoPlayer({
    url,
    thumbnail,
    muted = true,
    autoPlay,
}) {
    const videoRef = useRef(null)
    const hideTimeout = useRef(null)


    const [isPlaying, setIsPlaying] = useState(false)
    const [isHovered, setIsHovered] = useState(false)
    const [isMuted, setIsMuted] = useState(muted)
    const [currentTime, setCurrentTime] = useState(0)
    const [duration, setDuration] = useState(0)

    const togglePlay = () => {
        const video = videoRef.current
        if (!video) return

        if (video.paused) {
            video.play()
            setIsPlaying(true)
        } else {
            video.pause()
            setIsPlaying(false)
        }
    }

    const handleMute = () => {
        const video = videoRef.current
        if (!video) return
        video.muted = !video.muted
        setIsMuted(video.muted)
    }

    const handleMouseMove = () => {
        setIsHovered(true)
        clearTimeout(hideTimeout.current)
        hideTimeout.current = setTimeout(() => {
            setIsHovered(false)
        }, 3000)
    }

    useEffect(() => {
        return () => clearTimeout(hideTimeout.current)
    }, [])

    return (
        <div
            className="relative w-full rounded-3xl overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseMove={handleMouseMove}
            onMouseLeave={() => {
                clearTimeout(hideTimeout.current)
                setIsHovered(false)
            }}
        >
            <video
                ref={videoRef}
                src={url}
                autoPlay={autoPlay}
                muted={muted}
                loop
                playsInline
                poster={thumbnail}
                preload="metadata"
                className="w-full aspect-video object-cover"
                onClick={togglePlay}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onTimeUpdate={() => {
                    const video = videoRef.current
                    if (video) setCurrentTime(video.currentTime)
                }}
                onLoadedMetadata={() => {
                    const video = videoRef.current
                    if (video) setDuration(video.duration)
                }}
            />

            {/* Progress bar */}
            <div
                className={`absolute bottom-4 left-0 w-full z-30 px-10 ${isPlaying && !isHovered
                    ? "opacity-0 pointer-events-none"
                    : "opacity-100"
                    }`}
            >
                <input
                    type="range"
                    min={0}
                    max={duration}
                    value={currentTime}
                    style={{
                        "--progress": `${(currentTime / duration) * 100}%`,
                    }}
                    onChange={(e) => {
                        const video = videoRef.current
                        const time = Number(e.target.value)
                        if (video) {
                            video.currentTime = time
                            setCurrentTime(time)
                        }
                    }}
                    className="w-full custom-range"
                />
            </div>

            {/* Play / Pause */}
            <button
                onClick={togglePlay}
                className={`absolute inset-0 flex items-center justify-center transition-all duration-300 z-20
        ${isPlaying && !isHovered
                        ? "opacity-0 pointer-events-none"
                        : "opacity-100"
                    }`}
            >
                <div className="relative z-10 w-20 h-20 flex items-center justify-center bg-black/50 text-white rounded-full p-6 backdrop-blur-md transform transition-transform hover:scale-110 active:scale-95 shadow-xl">
                    {isPlaying ? (
                        <FaPause size={28} />
                    ) : (
                        <FaPlay size={30} className="ml-1" />
                    )}
                </div>

                {!isPlaying && (
                    <div className="animate-ripple bg-black/10 w-[100px] h-[100px] absolute -z-10 rounded-full" />
                )}
            </button>

            {/* Mute */}
            <button
                onClick={handleMute}
                className={`absolute bottom-12 right-10 z-40 bg-black/50 text-white w-10 h-10 flex items-center justify-center rounded-full
        ${isPlaying && !isHovered
                        ? "opacity-0 pointer-events-none"
                        : "opacity-100"
                    }`}
            >
                {isMuted ? <GoMute /> : <GoUnmute />}
            </button>
        </div>
    )
}