import Image from "next/image";
import React from "react";
import Banner from "../../../assets/images/LunaBanner.png";

const LunaBanner = () => {
  return (
    <div className="relative w-[100%] mx-auto h-[350px] overflow-hidden">
      <Image
        src={Banner} // Update this path
        alt="Couple"
        className="w-full h-full object-cover"
      />
      {/* Top Fade */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent pointer-events-none" />
      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </div>
  );
};

export default LunaBanner;
