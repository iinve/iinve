import chroma from "chroma-js";
import AboutMe from "../components/AboutMe/AboutMe";
import GalaxyFeature from "../components/GalaxyFeature/GalaxyFeature";
import GalaxySpot from "../components/GalaxySpot/GalaxySpot";
import PoweredBy from "../components/PoweredBy/PoweredBy";
import SocialMediaLinks from "../components/SocialMediaLinks/SocialMediaLinks";


const Galaxy = ({ data }) => {
  const isWhiteBackground = chroma("#fff").luminance() > 0.5;
  return (
    <>
      <GalaxySpot data={data} />
      <div className=" bg-white w-full">
        <div className="md:w-[60%] mx-auto">
        <AboutMe showButton={data?.show_collaboration} about={data?.about} isLightMode connect={data?.connect_details} />
        </div>
        <div className="md:w-[60%] mx-auto">
          <GalaxyFeature data={data} />
          {/* <GalaxyWork data={data}/> */}
          <SocialMediaLinks data={data} />
          <PoweredBy isWhiteBackground={isWhiteBackground} />
        </div>
      </div>
    </>
  );
};

export default Galaxy;
