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
import aom from "../../assets/images/om_tamil.png";
import gurudevan from "../../assets/images/gurudevan.png";
import Leaves from "../../assets/images/leaf.png";
import Subtract from "../../assets/images/Subtract.png";
import haldiBg from "../../assets/coffeePremium/mahesh-megha/haldi.jpg";
import ScrollToTop from "Components/ScrollUp/ScrollUp";

const Index = ({ data }) => {
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
        // fontFamily: isMalayalamPage ? "Goodnewsj" : "",
        // fontFamily: "'Patrick Hand', cursive",
      }}
    >
      <div className="relative z-10 mb-[320px]">
        <EternitySpotlight
          data={data}
          shuffle={false}
          isMalayalamPage={isMalayalamPage}
        />
        <ScrollToTop />

        <EternityCoupleDetails data={data} showMap />
        <div className="relative py-6" style={{ background: data.theme }}>
          <Image
            src={Leaves}
            alt="Leaves Decoration"
            className="absolute top-0 left-0 w-32 h-auto object-cover"
          />
          <div className="flex items-center justify-center scale-[0.7] md:scale-1">
            <div className="mx-4">
              <PhotoMessSwiper images={data.imageOne} />
            </div>
            <div className="mx-4">
              <PhotoMessSwiper images={data.imageTwo} />
            </div>
          </div>
        </div>
        <EternityInviteQuote data={data} />

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
          <section className="relative rounded-3xl overflow-hidden w-[95%] mx-auto">
            {/* Background Image as <img> */}
            <img
              src={
                "https://res.cloudinary.com/dttvg5xil/image/upload/v1753702425/Group_1934_mae2et.jpg"
              }
              alt="Haldi Background"
              className="absolute inset-0 w-full h-full object-cover opacity-80"
            />

            {/* Overlay for yellow gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-yellow-100 to-yellow-500 opacity-20" />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center text-center min-h-[400px] px-4 py-12">
              <h2 className="text-4xl font-bold text-white drop-shadow-lg mb-6">
                Haldi
              </h2>
              <p
                className="text-lg sm:text-xl md:text-2xl font-medium text-white drop-shadow-lg max-w-2xl mx-auto"
                // style={{ fontFamily: "'Patrick Hand', cursive" }}
              >
                We also invite you to join us for the joyous Haldi ceremony,
                filled with fun, colors, and blessings, on{" "}
                <span className="font-semibold text-yellow-800">
                  8-September-2025
                </span>{" "}
                at contour convention Center, changanassery 4pm onwards.
              </p>
            </div>
          </section>

          <section className="relative rounded-3xl overflow-hidden w-[95%] mx-auto mt-10 mb-12">
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center opacity-70"
              style={{
                // Replace with your reception-themed image path
                backgroundImage:
                  "url('https://caratsandcake.com/_images/cache/wedding-news-40-252938-1682958507.jpg')",
              }}
            />
            {/* Overlay for grape wine & cream gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#4E1B2E]  to-cream-100 opacity-80" />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center text-center min-h-[400px] px-4 py-12">
              <h2 className="text-4xl font-bold text-white drop-shadow-lg mb-6">
                Reception
              </h2>
              <p
                className="text-lg sm:text-xl md:text-2xl font-medium text-white drop-shadow-lg max-w-2xl mx-auto"
                // style={{ fontFamily: "'Patrick Hand', cursive" }}
              >
                We also invite you to join us on our wedding reception, a small
                evening get together for friends and family to make memories
                together on the evening of{" "}
                <span className="font-bold text-red-900">
                  11 September 2025 6pm onwards
                </span>{" "}
                at Marthoma church Auditorium, Vettiyar
              </p>
            </div>
          </section>
          {/* <MapReception data={data} />
          <CalendarReception data={data} /> */}
          <MusicPlayer music={data.music} />
        </div>
      </div>
      <Footer data={data} />
    </div>
  );
};

export default Index;
