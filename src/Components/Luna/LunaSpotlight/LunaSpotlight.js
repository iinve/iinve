import Image from "next/image";
import React from "react";
import bgImage from "../../../assets/images/Luna.png";

const LunaSpotlight = ({ data }) => {
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="w-[100%] h-[100dvh] relative rounded-lg overflow-hidden">
          <Image
            src={bgImage}
            alt="Wedding couple"
            layout="fill"
            objectFit="cover"
            className="absolute"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#C1A799]/70 via-[#C1A799]/20 to-transparent"></div>

          {/* Content */}
          <div className="relative h-full flex flex-col items-center justify-center text-white text-center px-4">
            <h1 className="text-3xl font-semibold mb-2">
              {data?.groom} & {data?.bride}
            </h1>
            <p className="text-lg">{data?.date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LunaSpotlight;
