import { useState, useEffect, useRef } from "react"
import { animate, useInView } from "framer-motion"

function Digit({ target, delay, duration }) {
    const [value, setValue] = useState(0)
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, amount: 0.5 })

    useEffect(() => {
        if (!inView) return

        let controls

        const t = setTimeout(() => {
            controls = animate(0, target, {
                duration,
                ease: "easeOut",
                onUpdate: v => setValue(Math.min(9, v)),
            })
        }, delay)

        return () => {
            clearTimeout(t)
            controls?.stop()
        }
    }, [inView, target, duration, delay])

    const cur = Math.floor(value)
    const progress = value - cur

    return (
        <span
            ref={ref}
            style={{
                position: "relative",
                overflow: "hidden",
                height: "1.2em",
                display: "inline-flex",
                alignItems: "center",
                minWidth: "0.6em",
                justifyContent: "center",
            }}
        >
            <span
                style={{
                    position: "absolute",
                    width: "100%",
                    textAlign: "center",
                    transform: `translateY(${progress * -100}%)`,
                }}
            >
                {cur}
            </span>
            {progress > 0 && cur + 1 <= 9 && (
                <span
                    style={{
                        position: "absolute",
                        width: "100%",
                        textAlign: "center",
                        transform: `translateY(${(1 - progress) * 100}%)`,
                    }}
                >
                    {cur + 1}
                </span>
            )}
        </span>
    )
}

export default function NumberCounter({
    value = "1234",
    duration = 2,
    prefix = "",
    suffix = "",
}) {
    let digitIndex = 0
    return (
        <span className="inline-flex items-center tabular-nums">
            {prefix}
            {value.split("").map((ch, i) => {
                if (!/\d/.test(ch)) return <span key={i}>{ch}</span>
                const d = parseInt(ch)
                const delay = digitIndex++ * 100
                return (
                    <Digit key={i} target={d} delay={delay} duration={duration * 0.8} />
                )
            })}
            {suffix}
        </span>
    )
}
