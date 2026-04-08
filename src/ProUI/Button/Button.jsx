"use client";

import Link from "next/link";

const Button = ({
  children,
  type = "primary",
  isLoading = false,
  onPress,
  className = "",
  size = "md",
  disabled,
  href,
  target,
  ...props
}) => {
  const typeMap = {
    primary: "bg-gradient-to-tr from-[#153BA6] to-[#0D9DC0] text-white",
    secondary: "bg-transparent text-white border border-[#515151]",
  };

  const sizeMap = {
    sm: "px-4 py-1.5 text-sm",
    md: "px-6 py-2 text-sm",
    lg: "px-10 py-2.5 text-base",
  };

  const baseClass = `
    group relative inline-flex items-center justify-center
    rounded-full overflow-hidden font-medium
    cursor-pointer
    transition-all duration-300 ease-out
    hover:opacity-90
    disabled:opacity-50 disabled:cursor-not-allowed
    ${typeMap[type]}
    ${sizeMap[size]}
    ${className}
  `;

  const Shimmer = () => (
    <span
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 rounded-full overflow-hidden"
    >
      <span className="absolute top-0 left-0 h-full w-[45%] -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-[250%] transition-transform duration-500 ease-out" />
    </span>
  );

  const content = (
    <>
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
      {!isLoading && <Shimmer />}
    </>
  );

  if (href) {
    return (
      <Link href={href} target={target} className={baseClass} {...props}>
        {content}
      </Link>
    );
  }

  return (
    <button
      onClick={onPress}
      disabled={isLoading || disabled}
      className={baseClass}
      {...props}
    >
      {content}
    </button>
  );
};

export default Button;
