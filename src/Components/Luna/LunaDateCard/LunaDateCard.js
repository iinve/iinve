"use client";
import React, { useEffect, useState } from "react";
import bgImage from "../../../assets/images/LunaLeaf.png";
import Image from "next/image";

const LunaDateCard = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  //   useEffect(() => {
  //     const timer = setInterval(() => {
  //       setTimeLeft(getTimeLeft());
  //     }, 1000);
  //     return () => clearInterval(timer);
  //   }, []);
  return (
    <div className="w-[100%] mx-auto py-6 flex items-center justify-center bg-white relative">
      <div className="absolute inset-0  z-0">
        {/* Replace with your actual background if needed */}
        <Image
          src={bgImage}
          alt="Wedding couple"
          className="w-full h-full object-contain"
        />
      </div>

      <div className="relative z-10 text-center px-4 max-w-md">
        <p className="text-lg text-gray-700 mb-4">
          Join us in celebrating our love at our engagement ceremony!
        </p>
        <h2 className="text-2xl text-[#333333] font-semibold mb-1">
          The May 10
        </h2>
        <h2 className="text-2xl text-[#333333] font-semibold mb-6">Monday</h2>

        <div className="text-4xl font-bold text-gray-900 mb-1">
          {timeLeft.hours}:{timeLeft.minutes}:{timeLeft.seconds}
        </div>
        <div className="text-sm text-gray-500 tracking-widest mb-6">
          H&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;M&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;S
        </div>

        <button className="bg-[#C0A698] text-black font-medium py-2 px-6 rounded-full shadow-md">
          Add to calendar
        </button>
      </div>
    </div>
  );
};

export default LunaDateCard;

const targetDate = new Date("2025-05-10T00:00:00");

function getTimeLeft() {
  const now = new Date();
  const difference = +targetDate - +now;
  const hours = String(
    Math.floor((difference / (1000 * 60 * 60)) % 60)
  ).padStart(2, "0");
  const minutes = String(Math.floor((difference / (1000 * 60)) % 60)).padStart(
    2,
    "0"
  );
  const seconds = String(Math.floor((difference / 1000) % 60)).padStart(2, "0");
  return { hours, minutes, seconds };
}
