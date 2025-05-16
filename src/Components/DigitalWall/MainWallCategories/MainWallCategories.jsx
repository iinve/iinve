import React from "react";
import BannerImg from "../../../assets/images/jwels.jpeg";
import Image from "next/image";

const MainWallCategories = () => {
  const categories = [
    {
      label: "Jewelry",
      image: BannerImg,
    },
    {
      label: "Fashion",
      image: BannerImg,
    },
    {
      label: "Groceries",
      image: BannerImg,
    },
    {
      label: "Sports",
      image: BannerImg,
    },
  ];

  return (
    <div className=" py-6 md:py-10 mx-auto w-fit">
      <div className="grid grid-cols-4  gap-8 ">
        {categories.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="relative w-14 h-14 md:w-24 md:h-24 md:w-28 md:h-28 rounded-full border-2 border-gray-400 overflow-hidden">
              <Image
                src={item.image}
                alt={item.label}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 96px, 112px"
              />
            </div>
            <p className="mt-2 text-base md:text-lg font-semibold text-black">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainWallCategories;
