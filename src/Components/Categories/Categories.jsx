"use client";

import { Assets } from "@/assets/assets";

const Categories = () => {
  return (
    <div className="categories !px-6 md:p-16">
      <div className="category_list bg-[#191b2882] rounded-3xl px-10 py-16 md:w-[80%] w-full mx-auto">
        <div className="category_item flex flex-col items-center md:flex-row gap-20 items-center justify-between mb-8 ">
          <div className="category_content max-w-2xl text-center md:text-left">
            <h2 className="text-xl md:text-4xl font-bold mb-4">
              Digital Invitation
            </h2>
            <p className="text-gray-400 text-md md:text-lg leading-relaxed">
              Say goodbye to paper waste and hello to stylish digital
              invitations. Whether it’s a birthday, wedding, housewarming, or
              corporate event create and share beautiful invites instantly
              through iinve.
            </p>
          </div>

          <div className="category_img w-full w-full rounded-xl overflow-hidden shadow-lg">
            <img
              src={Assets.invitation}
              alt="Digital Wall"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
        <div className="category_item mt-6 md:mt-0 flex flex-col md:flex-row flex-col-reverse gap-20 items-center items-center justify-between  ">
          <div className="category_img w-full rounded-xl overflow-hidden shadow-lg">
            <img
              src={Assets.digital_wall}
              alt="Digital Wall"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="category_content max-w-2xl text-center md:text-left">
            <h2 className="text-xl md:text-4xl font-bold mb-4">Digital Wall</h2>
            <p className="text-gray-400 leading-relaxed text-md md:text-lg">
              Digital Wall by iinve lets local shops and small businesses
              showcase their latest products, offers, and updates all in one
              sleek, shareable webpage. No app, no clutter. Just smart, simple
              visibility.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
