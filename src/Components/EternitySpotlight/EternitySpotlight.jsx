import Image from "next/image";
import React from "react";
import aom from "../../assets/images/aoom1.png";

const EternitySpotlight = ({ data }) => {
  return (
    <div className="  bg-[#BDC8AB] flex items-center justify-center flex-col ">
      <div className="bg-[#BDC8AB]  w-full">
        <div className=" bg-white border shadow-md rounded overflow-hidden">
          <div className="relative h-60 w-full">
            <Image
              src={data.images[2]}
              alt="Couple"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>

        <div className="flex  ">
          <div className="w-1/3">
            <div>
              <Image
                src={data.images[0]}
                alt="Couple"
                className="h-[200px] object-cover border-[2px] border-white border-solid"
              />
            </div>
            <div>
              <Image
                src={data.images[1]}
                alt="Couple"
                className="h-[200px] object-cover border-[2px] border-white border-solid"
              />
            </div>
          </div>
          <div className="w-2/3 -mt-[100px] relative z-1">
            <div className="">
              <Image
                src={data.images[3]}
                alt="Couple"
                className="h-[500px] object-cover"
              />
            </div>
            <div className="absolute bottom-[150px] left-1/2 -translate-x-1/2 text-center w-full">
              <p className="text-sm text-black">The Engagement of</p>
              <h1 className="text-2xl text-black md:text-3xl font-bold">
                {data?.groom} & {data?.bride}
              </h1>
            </div>
          </div>
          <div className="w-1/3">
            <div>
              <Image
                src={data.images[4]}
                alt="Couple"
                className="h-[100px] object-cover border-[2px] border-white border-solid"
              />
            </div>
            <div>
              <Image
                src={data.images[5]}
                alt="Couple"
                className="h-[300px] object-cover border-[2px] border-white border-solid"
              />
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#BDC8AB]/50 to-[#E4FFE5]/10"></div>
        </div>
        <div className="-mt-[80px]">
          <Image
            src={aom}
            alt="Couple"
            width={200}
            height={200}
            className="relative z-1 mx-auto"
          />
        </div>
        <div className="mt-10 pb-6">
          <p className="text-lg w-3/4 mx-auto text-center text-black">
            Join us in celebrating our live at our engagement ceremony!
          </p>
        </div>
      </div>
    </div>
  );
};

export default EternitySpotlight;
