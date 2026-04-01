export default function AnimatedText({
    children,
    shadeOne = "#153AA4",
    shadeTwo = "#08AAD0",
    shadeThree = "#153AA4",
    className = ""
}) {
    return (
        <span
            className={`inline-block pr-[2px] bg-[length:400%_100%] bg-clip-text text-transparent animate-textSmooth ${className}`}
            style={{
                backgroundImage: `linear-gradient(to right, ${shadeOne}, ${shadeTwo}, ${shadeThree})`,
            }}
        >
            {children}
        </span>
    )
}