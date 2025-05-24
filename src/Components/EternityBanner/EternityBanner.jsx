import Image from "next/image";
import React from "react";
import Banner from "../../assets/images/banner.jpg";

const EternityBanner = () => {
  return (
    <div className="relative w-[100%] mx-auto h-[350px] overflow-hidden">
      <Image src={Banner} alt="Couple" className="w-full h-full object-cover" />
    </div>
  );
};

export default EternityBanner;
