import Image from "next/image";
import React from "react";
import BannerImg from "../../../assets/images/banner.jpg";
import Mayoori from "../../../assets/images/mayoori_logo.png";

const MainTopOffers = () => {
  const offers = [
    {
      title: "Best Summer Offer",
      brand: "Malabar Gold & Diamonds",
      image: BannerImg,
      logo: Mayoori,
    },
    {
      title: "50% off and Cashbacks",
      brand: "Hype",
      image: BannerImg,
      logo: Mayoori,
    },
  ];
  return (
    <div className=" py-6 md:py-10 md:px-10 w-full lg:w-[60%] mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl md:text-3xl font-bold text-black">Top Offers</h2>
        <button className="text-blue-500 font-medium hover:underline">
          View All
        </button>
      </div>

      <div className="space-y-6">
        {offers.map((offer, index) => (
          <div
            key={index}
            className="flex items-center bg-white rounded-3xl border border-[#638BF5] overflow-hidden shadow-sm justify-between gap-10 w-full sm:w-3/4 mx-auto"
          >
            <div className="w-1/2  h-[200px]">
              <Image
                src={offer.image}
                alt={offer.title}
                width={300}
                height={300}
                className="object-cover w-full h-full rounded-3xl"
              />
            </div>
            <div className=" md:px-0 md:py-8  w-1/2 md:w-2/4 ">
              <div className="mb-2 ">
                <Image
                  src={offer.logo}
                  alt={offer.brand}
                  width={100}
                  height={40}
                  className="object-cover"
                />
              </div>
              <h3 className=" text-base md:text-xl font-bold text-black px-2">
                {offer.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainTopOffers;
