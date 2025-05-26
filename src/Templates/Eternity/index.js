"use client";
import EternityCoupleDetails from "Components/EternityCoupleDetails/EternityCoupleDetails";
import EternityInviteQuote from "Components/EternityInviteQuote/EternityInviteQuote";
import EternitySpotlight from "Components/EternitySpotlight/EternitySpotlight";
import Footer from "Components/Footer";
import Map from "Components/Map";
import MusicPlayer from "Components/MusicPlayer/MusicPlayer";
import PhotoMessSwiper from "Components/PhotoMessSwiper/PhotoMessSwiper";
import Image from "next/image";
import ganesh from "../../assets/images/ganapathy.png";
import Leaves from "../../assets/images/leaf.png";

const index = ({ data }) => {
  return (
    <div
      style={{
        "--theme-color": data?.theme,
        "--content-color": data?.default_color,
        "--highlight-color": data?.highlight_color,
        background: data.theme,
      }}
    >
      <div className="relative z-10 mb-[320px]">
        <EternitySpotlight data={data} shuffle={false} />
        <EternityCoupleDetails data={data} />
        <div className="relative py-6" style={{ background: data.theme }}>
          <Image
            src={Leaves}
            alt="Leaves Decoration"
            className="absolute top-0 left-0 w-32 h-auto object-cover"
          />
          <PhotoMessSwiper data={data} />
        </div>
        <EternityInviteQuote data={data} />
        {/* <EternityBanner /> */}
        <div className="bg-white py-6 rounded-b-[40px]">
          <div className="flex items-center justify-center">
            <Image
              src={ganesh}
              alt="Ganesha"
              className="w-60 h-auto object-contain"
            />
          </div>
          <Map data={data} />
          <MusicPlayer music={data.music} />
        </div>
      </div>
      <Footer data={data} />
    </div>
  );
};

export default index;
