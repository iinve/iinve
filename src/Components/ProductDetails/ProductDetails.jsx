import React from "react";
import Image from "next/image";
import { Assets } from "assets/assets";

const ProductDetails = () => {
  return (
    <div>
      <div className="w-full flex justify-center py-4 mb-6">
        <div className="w-full h-[170px] md:h-[200px] max-w-7xl relative aspect-[3/1]">
          <Image
            src={Assets?.Banner}
            alt="Grocery Shopping Sale"
            fill
            className="object-cover rounded-3xl shadow-lg opacity-50"
            sizes="100vw"
          />

          {/* Centered text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-white text-xl md:text-3xl font-semibold text-center">
              iinve e-invitation
            </h2>
          </div>
        </div>
      </div>
      <div className="category_item flex flex-col  md:flex-row gap-20  justify-between p-14 ">
        <div className="category_img w-full w-full rounded-xl overflow-hidden shadow-lg">
          <Image
            src={Assets?.invitation}
            alt="Digital Wall"
            className="w-full h-auto object-cover"
            width={500}
            height={500}
          />
        </div>
        <div className="category_content max-w-2xl text-left">
          <h2 className="text-xl md:text-4xl font-bold mb-4">
            iinve e-invitation
          </h2>
          <p className="text-gray-400 text-md md:text-lg leading-relaxed mb-4">
            Say goodbye to paper waste and hello to stylish digital invitations.
            Whether it’s a birthday, wedding, housewarming, or corporate event
            create and share beautiful invites instantly through iinve.Say
            goodbye to paper waste and hello to stylish digital invitations.
            Whether it’s a birthday, wedding, housewarming, or corporate event
            create and share beautiful invites instantly through iinve.Say
            goodbye to paper waste and hello to stylish digital invitations.
            Whether it’s a birthday, wedding, housewarming, or corporate event
            create and share beautiful invites instantly through iinve.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
