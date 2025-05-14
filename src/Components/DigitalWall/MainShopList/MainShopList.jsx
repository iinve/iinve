import Image from "next/image";
import React from "react";
import BannerImg from "../../../assets/images/banner.jpg";
import Mayoori from "../../../assets/images/mayoori_logo.png";

const MainShopList = () => {
  const offers = [
    {
      title: "$1000 cashback\nIn every purchase",
      image: BannerImg,
      brandLogo: Mayoori,
    },
    {
      title: "$1000 cashback\nIn every purchase",
      image: BannerImg,
      brandLogo: Mayoori,
      date: "10th - 11th DEC",
    },
    {
      title: "$1000 cashback\nIn every purchase",
      image: BannerImg,
      brandLogo: Mayoori,
      date: "10th - 11th DEC",
    },
    {
      title: "$1000 cashback\nIn every purchase",
      image: BannerImg,
      brandLogo: Mayoori,
    },
  ];

  return (
    <div className=" py-6 md:py-10  md:px-10  w-full md:w-3/4 mx-auto">
      <h2 className="text-xl md:text-3xl font-bold text-black mb-6">
        Other Offers
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {offers.map((offer, index) => (
          <div
            key={index}
            className="rounded-xl border border-blue-300 overflow-hidden bg-white shadow-sm"
          >
            <div className="relative">
              <Image
                src={offer.image}
                alt="offer"
                width={400}
                height={250}
                className="w-full  h-[160px] sm:h-[200px] object-cover"
              />
              {offer.brandLogo && (
                <div className="absolute top-2 right-2 bg-white p-1 rounded">
                  <Image
                    src={offer.brandLogo}
                    alt="brand"
                    width={60}
                    height={30}
                    className="object-contain"
                  />
                </div>
              )}
              {offer.date && (
                <div className="absolute top-2 left-2 bg-yellow-300 text-xs font-semibold px-2 py-1 rounded">
                  {offer.date}
                </div>
              )}
            </div>
            <div className="p-4">
              <p className=" text-base md:text-lg font-bold text-black whitespace-pre-line">
                {offer.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainShopList;
