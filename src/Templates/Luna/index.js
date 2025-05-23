"use client";

import React from "react";
import Footer from "Components/Footer";
import LunaBanner from "Components/Luna/LunaBanner/LunaBanner";
import LunaCoupleDetails from "Components/Luna/LunaCoupleDetails/LunaCoupleDetails";
import LunaDateCard from "Components/Luna/LunaDateCard/LunaDateCard";
import LunaGallerySlider from "Components/Luna/LunaGallerySlider/LunaGallerySlider";
import LunaShareWhishes from "Components/Luna/LunaShareWhishes/LunaShareWhishes";
import LunaSpotlight from "Components/Luna/LunaSpotlight/LunaSpotlight";
import LunaWeddingMessage from "Components/Luna/LunaWeddingMessage/LunaWeddingMessage";
import Map from "Components/Map";
import MusicPlayer from "Components/MusicPlayer/MusicPlayer";

const Luna = ({ data }) => {
  return (
    <div
      className="bg-black"
      style={{
        "--theme-color": data?.theme,
        "--content-color": data?.default_color,
        "--highlight-color": data?.highlight_color,
      }}
    >
      <div className="relative z-10 bg-white rounded-b-[40px] mb-[200px]">
        <LunaSpotlight data={data} />
        <LunaDateCard data={data} />
        <LunaCoupleDetails data={data} />
        <LunaBanner data={data} />
        <LunaWeddingMessage data={data} />
        <LunaShareWhishes data={data} />
        <LunaGallerySlider data={data} />
        <Map data={data} />
        <MusicPlayer music={data?.music} />
      </div>
      <Footer data={data} />
    </div>
  );
};

export default Luna;
