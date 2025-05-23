"use client";
import Footer from "Components/Footer";
import LunaBanner from "Components/Luna/LunaBanner/LunaBanner";
import LunaCoupleDetails from "Components/Luna/LunaCoupleDetails/LunaCoupleDetails";
import LunaDateCard from "Components/Luna/LunaDateCard/LunaDateCard";
import LunaGallerySlider from "Components/Luna/LunaGallerySlider/LunaGallerySlider";
import LunaShareWhishes from "Components/Luna/LunaShareWhishes/LunaShareWhishes";
import LunaSpotlight from "Components/Luna/LunaSpotlight/LunaSpotlight";
import LunaWeddingMessage from "Components/Luna/LunaWeddingMessage/LunaWeddingMessage";
import Map from "Components/Map";

const Luna = () => {
  return (
    <div className="bg-black">
      <div className="relative z-10 bg-white rounded-b-[40px] mb-[250px]">
        <LunaSpotlight />
        <LunaDateCard />
        <LunaCoupleDetails />
        <LunaBanner />
        <LunaWeddingMessage />
        <LunaShareWhishes />
        <LunaGallerySlider />
        <Map />
        {/* <MusicPlayer /> */}
      </div>
      <Footer />
    </div>
  );
};

export default Luna;
