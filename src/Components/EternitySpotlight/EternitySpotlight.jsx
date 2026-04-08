"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { getHeading } from "utils/greetingUtils";
import ganesh from "../../assets/images/ganapathy.png";
// import ScrollToTop from "Components/ScrollUp/ScrollUp";

const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const EternitySpotlight = ({
  data,
  shuffle = false,
  isMalayalamPage,
  isHindu = false,
}) => {
  const [images, setImages] = useState(data.images);

  useEffect(() => {
    const interval = setInterval(() => {
      if (shuffle) {
        setImages(shuffleArray(data.images));
      }
    }, 8000); // shuffle every 8s
    return () => clearInterval(interval);
  }, [data.images]);

  const fadeTransition = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 1.2 },
  };

  return (
    <div className="relative h-[750px] md:h-[900px]">
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background: `linear-gradient(to top, ${data.theme}, rgba(228, 255, 229, 0))`,
        }}
      ></div>
      <div className="w-full">
        <div className=" overflow-hidden">
          <div className="relative h-[60vh] w-full">
            <Image
              src={images[1]}
              alt="Couple"
              className="w-full"
              objectFit="cover"
            />
          </div>
        </div>
        {isHindu && (
          <div className="absolute flex items-center justify-center bottom-6 inset-x-0 z-10">
            <Image
              src={ganesh}
              alt="Ganesha"
              className="w-40 h-auto object-contain"
            />
          </div>
        )}
        <div className="absolute bottom-0 flex h-[600px] w-full lg:h-[800px] overflow-hidden pt-[100px]">
          {/* Left Column (2 stacked images) */}
          <div className="w-1/3 flex flex-col pt-[100px]">
            <Image
              src={images[2]}
              alt="Image 1"
              className="w-full h-1/2 object-cover"
              width={500}
              height={300}
            />
            <Image
              src={images[3]}
              alt="Image 2"
              className="w-full h-1/2 object-cover"
              width={500}
              height={300}
            />
          </div>

          {/* Center Column (1 full-height image) */}
          <div className="w-2/3 md:1/3">
            <Image
              src={images[4]}
              alt="Image 3"
              className="w-full h-full object-cover"
              width={600}
              height={900}
            />
          </div>

          {/* Right Column (2 stacked images) */}
          <div className="w-1/3 flex flex-col pt-[100px]">
            <Image
              src={images[5]}
              alt="Image 4"
              className="w-full h-1/2 object-cover"
              width={500}
              height={300}
            />
            <Image
              src={images[6]}
              alt="Image 5"
              className="w-full h-1/2 object-cover"
              width={500}
              height={300}
            />
          </div>
        </div>

        <div
          className={`absolute ${
            isHindu ? "bottom-[200px]" : "bottom-[80px]"
          } left-1/2 -translate-x-1/2 text-center w-full z-10`}
          style={{ color: "#fff" }}
        >
          <p
            className={
              isMalayalamPage ? "text-lg md:text-2xl md:mb-10" : "text-md mb-6"
            }
          >
            {getHeading(data)}
          </p>
          <h1
            className={
              isMalayalamPage
                ? "text-3xl lg:text-[70px]"
                : "text-4xl lg:text-6xl"
            }
            style={{
              fontFamily: isMalayalamPage ? "Goodnewsj" : "Fleur De Leah",
            }}
          >
            {data?.groom} & {data?.bride}
          </h1>
        </div>
        {/* <div className="-mt-[80px]">
          <Image
            src={aom}
            alt="Couple"
            width={200}
            height={200}
            className="relative z-1 mx-auto"
          />
        </div> */}
        {/* <div className="mt-10 pb-6">
          <p className="text-lg w-3/4 mx-auto text-center text-black">
            Join us in celebrating our live at our engagement ceremony!
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default EternitySpotlight;
