"use client";

const ActionButton = ({
  children,
  color = "primary",
  isLoading = false,
  onPress,
  className = "",
  size = "md",
  disabled,
  ...props
}) => {
  const colorMap = {
    primary: "bg-gradient-to-tr from-[#153BA6] to-[#0D9DC0] text-white",
    secondary: "bg-white text-black border border-[#e2e2e2]",
    transparent: "bg-transparent text-white border border-white/20",
  };

  const sizeMap = {
    sm: "px-4 py-1.5 text-sm",
    md: "px-6 py-2 text-sm",
    lg: "px-10 py-2.5 text-base",
  };

  return (
    <button
      onClick={onPress}
      disabled={isLoading || disabled}
      className={`
        group relative inline-flex items-center justify-center
        rounded-full overflow-hidden font-medium
        transition-all duration-300 ease-out
        hover:opacity-90 hover:scale-[1.02]
        active:scale-[0.98]
        disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
        ${colorMap[color]}
        ${sizeMap[size]}
        ${className}
      `}
      {...props}
    >
      {isLoading ? (
        <span className="flex items-center gap-2">
          <svg
            className="animate-spin h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v8z"
            />
          </svg>
          Loading...
        </span>
      ) : (
        children
      )}

      {!isLoading && (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-full overflow-hidden"
        >
          <span className="absolute top-0 left-0 h-full w-[45%] -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:translate-x-[250%] transition-transform duration-700 ease-out" />
        </span>
      )}
    </button>
  );
};

export default ActionButton;
