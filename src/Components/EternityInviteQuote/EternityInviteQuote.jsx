import Image from "next/image";
import React from "react";
import ganesh from "../../assets/images/ganesh.png";
import Subtract from "../../assets/images/Subtract.png";
import Leaves from "../../assets/images/leaf.png";
import Quote from "../../assets/images/comma.svg";

const EternityInviteQuote = () => {
  return (
    <div className="bg-[#BDC8AB] flex items-center justify-center  ">
      <div className="bg-[#BDC8AB] relative  w-full  rounded-lg  text-center px-6 py-16">
        {/* Top Leaf Decoration (optional) */}
        <Image
          src={Leaves}
          alt="Leaves Decoration"
          className="absolute top-0 left-0 w-32 h-auto object-cover"
        />

        {/* Top Right Ganesha */}
        <Image
          src={ganesh}
          alt="Ganesha"
          className="absolute top-0 right-0 w-40 h-auto object-cover"
        />

        {/* Quote Icon */}
        <div className="flex justify-center  mb-6">
          <Image src={Quote} alt="Quote" />
        </div>

        {/* Invitation Text */}
        <p className="text-gray-800 text-base leading-relaxed max-w-2xl mx-auto">
          With hearts full of love and joy, we,{" "}
          <strong>[Names of the Couple]</strong>, invite you, our beloved
          family, to join us in celebrating our union and the beginning of our
          new life together. Your presence at our wedding ceremony and reception
          will mean the world to us as we embark on this beautiful journey as a
          family.
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
            className="h-8 rotate-180 object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default EternityInviteQuote;
