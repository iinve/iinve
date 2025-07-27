"use client";
import Calendar from "Components/Calendar";
import Map from "Components/Map";
import MusicPlayer from "Components/MusicPlayer/MusicPlayer";
import PhotoMessSwiper from "Components/PhotoMessSwiper/PhotoMessSwiper";
import Image from "next/image";
import lotus from "../../assets/coffeePremium/Karthik-Varsha/lotus.png";
import lotus2 from "../../assets/coffeePremium/Karthik-Varsha/lotus2.png";
import Footer from "Components/Footer";

export const Lotus = ({ reception_karthik }) => {
  return (
    <div>
      <div
        style={{
          "--highlight-color": reception_karthik?.highlight_color,
        }}
        className="relative z-10 mb-[350px] rounded-b-lg"
      >
        <div className="h-screen w-full relative">
          <Image
            src={reception_karthik.images[3]}
            fill
            className="object-cover"
          />
          <div className="text-[#fff] absolute bottom-4 right-[50%] translate-x-[50%] z-10 text-center w-full">
            <span className="text-center block mb-2 text-lg">
              Wedding Reception
            </span>
            <h3 className="md:text-6xl text-[46px] helena">Karthik Surya</h3>
            <h3 className="md:text-6xl text-[46px] helena">& Varsha</h3>
          </div>
          <div className="bg-gradient-to-b from-transparent to-[#eebebe] h-full w-full block relative z-4 absolute bottom-0"></div>
        </div>

        <div className="relative bg-white">
          <div className="bg-white md:p-4 py-14">
            <p className="text-center text-black md:w-1/2 w-2/3 mx-auto">
              We invite your esteemed presence to celebrate the joyous occasion
              of our Wedding Reception <br />
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
          <PhotoMessSwiper images={reception_karthik.images} />
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
        <div className="bg-[#eebebe] py-4 pt-[50px] !text-black relative overflow-hidden rounded-b-[50px]">
          <div className="w-fit h-fit absolute -bottom-[60px] -right-[50px] ">
            <Image
              src={lotus2}
              width={300}
              height={100}
              alt="lotus"
              className="object-contain"
            />
          </div>
          <Calendar data={reception_karthik} isBlue />
          <Map data={reception_karthik} isBlue />
          <MusicPlayer music={reception_karthik.music} />
        </div>
      </div>
      <Footer />
    </div>
  );
};
