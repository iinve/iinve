"use client";

import { Button } from "@heroui/react";

const shimmer = (
  <span className="pointer-events-none absolute inset-0 rounded-full overflow-hidden">
    <span className="absolute -left-[60%] top-0 rounded-full opacity-60 h-full w-[50%] bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:left-[120%] transition-all duration-700 ease-out"></span>
  </span>
);

const ActionButton = ({ children, color, isLoading, className, ...props }) => {
  const classNames = {
    primary: "bg-gradient-to-tr from-[#153BA6] to-[#0D9DC6] text-white",
    secondary: "bg-white text-black",
    transparent: "bg-transparent text-white",
  };
  return (
    <Button
      isLoading={isLoading}
      radius="full"
      className={`group relative transition-all ${classNames[color]} ${className}`}
      {...props}
      style={{ transition: ".3s ease" }}
    >
      {!isLoading && children}
      {shimmer}
    </Button>
  );
};
export default ActionButton;
