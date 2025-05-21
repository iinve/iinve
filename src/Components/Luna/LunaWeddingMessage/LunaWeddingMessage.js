import React from "react";
import quote from "../../../assets/images/format_quote.svg";
import Image from "next/image";

const LunaWeddingMessage = () => {
  return (
    <div className="text-center bg-white px-6 py-10 w-[100%] mx-auto">
      {/* Invitation message */}
      <p className="text-gray-600 text-lg md:text-xl leading-relaxed font-light mb-12">
        Join us on this joyous journey of love and commitment as Johny and June
        come together to create a lifetime of cherished moments and enduring
        happiness.
      </p>

      {/* Quote section */}
      <div className="relative inline-block">
        <div className="text-5xl text-gray-500 absolute -top-8 left-1/2 transform -translate-x-1/2">
          <Image src={quote} alt="Couple" />
        </div>
        <div className="bg-[#EDE5E0] px-8 py-6 rounded-2xl inline-block">
          <p className="text-gray-800 text-xl font-medium">
            I have found some one
            <br />
            whom my soul loves.
          </p>
          <p className="text-xs tracking-widest text-gray-600 mt-2">
            SONG OF SOLOMON 03:04
          </p>
        </div>
      </div>
    </div>
  );
};

export default LunaWeddingMessage;
