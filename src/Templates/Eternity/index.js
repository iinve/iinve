import EternityBanner from "Components/EternityBanner/EternityBanner";
import EternityCoupleDetails from "Components/EternityCoupleDetails/EternityCoupleDetails";
import EternityInviteQuote from "Components/EternityInviteQuote/EternityInviteQuote";
import EternitySpotlight from "Components/EternitySpotlight/EternitySpotlight";
import Footer from "Components/Footer";
import Map from "Components/Map";
import React from "react";

const index = ({ data }) => {
  return (
    <div
      className="bg-[#BDC8AB]"
      style={{
        "--theme-color": data?.theme,
        "--content-color": data?.default_color,
        "--highlight-color": data?.highlight_color,
      }}
    >
      <EternitySpotlight data={data} />
      <EternityCoupleDetails data={data} />
      <EternityInviteQuote data={data} />
      <EternityBanner />
      <Map data={data} />
      {/* <Footer data={data} /> */}
    </div>
  );
};

export default index;
