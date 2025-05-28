"use client";
import EternityCoupleDetails from "Components/EternityCoupleDetails/EternityCoupleDetails";
import EternityInviteQuote from "Components/EternityInviteQuote/EternityInviteQuote";
import EternitySpotlight from "Components/EternitySpotlight/EternitySpotlight";
import Footer from "Components/Footer";
import Map from "Components/Map";
import MusicPlayer from "Components/MusicPlayer/MusicPlayer";
import PhotoMessSwiper from "Components/PhotoMessSwiper/PhotoMessSwiper";
import Image from "next/image";
import Leaves from "../../assets/images/leaf.png";
import Calendar from "Components/Calendar";
import aom from "../../assets/images/aoom1.png";
import Subtract from "../../assets/images/Subtract.png";
import gurudevan from "../../assets/images/gurudevan.png";


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
          <div className="flex justify-center my-10">
            <Image
              src={gurudevan}
              alt="Gurudevan"
              className="w-24 h-auto rounded-full object-contain"
            />
          </div>
          <PhotoMessSwiper data={data} />
        </div>
        <EternityInviteQuote data={data} />
        <div
          className="flex items-center justify-center"
          style={{ background: data.theme }}
        >
          <Image
            src={aom}
            alt="Separator"
            width={140}
            height={180}
            className="object-contain"
          />
        </div>

        <Calendar data={data} />
        {/* <EternityBanner /> */}
        <div
          className=" py-6 rounded-b-[40px]"
          style={{ background: data.theme }}
        >
          <div className="flex justify-center mb-12">
            <Image
              src={Subtract}
              alt="Separator"
              width={180}
              height={180}
              className="object-contain rotate-180"
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
