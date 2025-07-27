"use client";
import Calendar from "Components/Calendar";
import EternityCoupleDetails from "Components/EternityCoupleDetails/EternityCoupleDetails";
import EternityInviteQuote from "Components/EternityInviteQuote/EternityInviteQuote";
import EternitySpotlight from "Components/EternitySpotlight/EternitySpotlight";
import Footer from "Components/Footer";
import Map from "Components/Map";
import CalendarReception from "Components/CalendarReception";
import MapReception from "Components/MapReception";
import MusicPlayer from "Components/MusicPlayer/MusicPlayer";
import PhotoMessSwiper from "Components/PhotoMessSwiper/PhotoMessSwiper";
import Image from "next/image";
import { useEffect, useState } from "react";
import aom from "../../assets/images/ohm.png";
import gurudevan from "../../assets/images/gurudevan.png";
import Leaves from "../../assets/images/leaf.png";
import Subtract from "../../assets/images/Subtract.png";
import ScrollToTop from "Components/ScrollUp/ScrollUp";

const Index = ({ data, isHindu, showGuru = false }) => {
  const [isMalayalamPage, setIsMalayalamPage] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (location.pathname.includes("/ml/")) {
        console.log("URL contains /ml/");
        setIsMalayalamPage(true);
      }
    }
  }, []);

  return (
    <div
      style={{
        "--theme-color": data?.theme,
        "--content-color": data?.default_color,
        "--highlight-color": data?.highlight_color,
        background: data.theme,
        fontFamily: isMalayalamPage ? "Goodnewsj" : "",
      }}
    >
      <div className="relative z-10 mb-[320px]">
        <EternitySpotlight
          data={data}
          shuffle={false}
          isMalayalamPage={isMalayalamPage}
          isHindu={isHindu}
        />
        <ScrollToTop />

        <EternityCoupleDetails data={data} />
        <div className="relative py-6" style={{ background: data.theme }}>
          <Image
            src={Leaves}
            alt="Leaves Decoration"
            className="absolute top-0 left-0 w-32 h-auto object-cover"
          />
          {showGuru && (
            <div className="flex justify-center my-10">
              <Image
                src={gurudevan}
                alt="Gurudevan"
                className="w-24 h-auto rounded-full object-contain"
              />
            </div>
          )}
          <PhotoMessSwiper images={data.images} />
        </div>
        <EternityInviteQuote data={data} />
        <div
          className="flex items-center justify-center"
          style={{ background: data.theme }}
        >
          <Image
            src={aom}
            alt="Separator"
            width={80}
            height={100}
            className="object-contain"
          />
        </div>

        <Calendar data={data} />
        {/* <EternityBanner /> */}
        <div
          className=" py-6 rounded-b-[40px]"
          style={{ background: data.theme }}
        >
          <h3 className="text-center text-3xl">Wedding</h3>
          <Map data={data} />
          <div className="flex justify-center mb-12">
            <Image
              src={Subtract}
              alt="Separator"
              width={180}
              height={180}
              className="object-contain rotate-180"
            />
          </div>

          <MapReception data={data} />
          <CalendarReception data={data} />
          <MusicPlayer music={data.music} />
        </div>
      </div>
      <Footer data={data} />
    </div>
  );
};

export default Index;
