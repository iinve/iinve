import Image from "next/image";
import React from "react";
import Subtract from "../../assets/images/Subtract.png";
import Quote from "../../assets/images/comma.svg";

const EternityInviteQuote = ({ data }) => {
  return (
    <div
      className="flex items-center justify-center"
      style={{ background: data.theme }}
    >
      <div className="relative  w-full  rounded-lg text-center px-6 py-16">
        {/* Top Leaf Decoration (optional) */}

        {/* Quote Icon */}
        <div className="flex justify-center  mb-4">
          <span className="text-5xl font-serif">&quot;</span>
        </div>

        {/* Invitation Text */}
        <p
          className="text-base leading-relaxed max-w-2xl mx-auto text-center"
          style={{ color: data.default_color }}
        >
          With hearts full of love and joy, we,{" "}
          <strong>
            {data?.groom} & {data?.bride}
          </strong>
          , invite you, our beloved family, to join us in celebrating our union
          and the beginning of our new life together. Your presence at our
          wedding ceremony and reception will mean the world to us as we embark
          on this beautiful journey as a family.
          <br />
          <br />
          Let us come together to share in the love, happiness, and cherished
          memories on <strong>[Date of the Wedding]</strong> at{" "}
          <strong>[Venue Name and Address]</strong>. We look forward to creating
          unforgettable moments with all of you.
        </p>

        {/* Bottom Separator */}
        <div className="flex justify-center mt-12">
          <Image
            src={Subtract}
            alt="Separator"
            className="h-8 rotate-180 object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default EternityInviteQuote;
