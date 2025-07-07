"use client";
import Calendar from "Components/Calendar";
import Map from "Components/Map";
import MusicPlayer from "Components/MusicPlayer/MusicPlayer";
import PhotoMessSwiper from "Components/PhotoMessSwiper/PhotoMessSwiper";
import Image from "next/image";
import lotus from "../../assets/coffeePremium/Karthik-Varsha/lotus.png";
import lotus2 from "../../assets/coffeePremium/Karthik-Varsha/lotus-2.png";

export const Lotus = ({ reception_karthik }) => {
  return (
    <>
      <div className="h-screen w-full relative">
        <Image
          src={reception_karthik.images[3]}
          fill
          className="object-cover"
        />
        <div className="text-[#3F547A] absolute bottom-4 right-[50%] translate-x-[50%] z-10 text-center">
          <span className="text-center block mb-2 text-lg">
            The Reception of
          </span>
          <h3 className="md:text-6xl text-[46px] fleur">Karthik Surya</h3>
          <h3 className="md:text-6xl text-[46px] fleur">& Varsha</h3>
        </div>
        <div className="bg-gradient-to-b from-transparent to-[#D5E4EB] h-full w-full block relative z-4 absolute bottom-0"></div>
      </div>

      <div className="relative">
        <div className="bg-white md:p-4 py-14">
          <p className="text-center text-black md:w-1/2 w-2/3 mx-auto">
            Invite your esteemed presence to celebrate the joyous occasion of
            our Wedding Reception <br />
            <br />{" "}
            <b>
              {" "}
              On 13th July 2025 at{" "}
              <b>Travancore International convention centre</b>, Karyavattom
              (The Sports hub, Greenfield International stadium) from 5 PM
              onwards.
            </b>
            <br />
            <br /> Grace us with your love and support!
          </p>
        </div>
        {/* section-3*/}
        <PhotoMessSwiper data={reception_karthik} />
        <div className="w-full h-fit absolute -bottom-[50px] -left-[50px]">
          <Image
            src={lotus}
            width={200}
            height={100}
            alt="lotus"
            className="object-contain"
          />
        </div>
      </div>
      <div className="bg-[#D5E4EB] py-4 mt-[50px] !text-black relative overflow-hidden">
        <div className="w-fit h-fit absolute -bottom-[315px] -right-[240px] rotate-[50deg]">
          <Image
            src={lotus2}
            width={300}
            height={100}
            alt="lotus"
            className="object-contain"
          />
        </div>
        <Calendar data={reception_karthik} />
        <Map data={reception_karthik} isBlue />
        <MusicPlayer music={reception_karthik.music} />
      </div>
    </>
  );
};
