"use client";
import React from "react";
import { Logo } from "Components/Logo/Logo";
import useWindowDimensions from "utils/useWindowDimensions";

const MainWallHeader = () => {
  const { isMobile, isTablet } = useWindowDimensions();
  return (
    <div className="flex justify-center  mx-auto h-[80px] items-center">
      <Logo width={isMobile | isTablet ? 80 : 120} height={120} />
    </div>
  );
};

export default MainWallHeader;
