'use client'
import Image from "next/image";
import React, { useEffect, useState } from "react";
import aom from "../../assets/images/aoom1.png";

const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const EternitySpotlight = ({ data }) => {

  const [images, setImages] = useState(data.images);

  useEffect(() => {
    const interval = setInterval(() => {
      setImages(shuffleArray(data.images));
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
    <div className="  bg-[#BDC8AB] flex items-center justify-center flex-col h-screen relative">
      <div className="absolute h-screen inset-0 bg-gradient-to-t from-[#BDC8AB]/50 to-[#E4FFE5]/0 z-10 pointer-events-none" ></div>
      <div className="w-full h-screen">
        <div className="shadow-md overflow-hidden">
          <div className="relative h-screen w-full">
            <Image
              src={images[1]}
              alt="Couple"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <div className="absolute bottom-0 flex h-[600px] w-full lg:h-[800px] overflow-hidden pt-[100px]">
          {/* Left Column (2 stacked images) */}
          <div className="w-1/3 flex flex-col pt-[100px]">
            <Image
              src={images[1]}
              alt="Image 1"
              className="w-full h-1/2 object-cover"
              width={500}
              height={300}
            />
            <Image
              src={images[2]}
              alt="Image 2"
              className="w-full h-1/2 object-cover"
              width={500}
              height={300}
            />
          </div>

          {/* Center Column (1 full-height image) */}
          <div className="w-2/3 md:1/3">
            <Image
              src={images[3]}
              alt="Image 3"
              className="w-full h-full object-cover"
              width={600}
              height={900}
            />
          </div>

          {/* Right Column (2 stacked images) */}
          <div className="w-1/3 flex flex-col pt-[100px]">
            <Image
              src={images[4]}
              alt="Image 4"
              className="w-full h-1/2 object-cover"
              width={500}
              height={300}
            />
            <Image
              src={images[5]}
              alt="Image 5"
              className="w-full h-1/2 object-cover"
              width={500}
              height={300}
            />
          </div>

        </div>

        <div className="absolute bottom-[80px] left-1/2 -translate-x-1/2 text-center w-full z-10">
          <p className="text-sm text-black">The Engagement of</p>
          <h1 className="text-2xl text-black md:text-3xl font-bold">
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



