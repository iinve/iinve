import { ProPlayer } from "@/ProUI/Media/Media";
import { generateColorVariants } from "@/utils/colorUtils";
import useWindowDimensions from "@/utils/useWindowDimensions";
import chroma from "chroma-js";
import { useEffect, useState } from "react";
import AboutMe from "../components/AboutMe/AboutMe";
import FadeHeroSection from "../components/FadeHeroSection/FadeHeroSection";
import ImageMasonry from "../components/ImageMasonry/ImageMasonry";
import PoweredBy from "../components/PoweredBy/PoweredBy";
import StellarLinkWithPreview from "../components/StellarLinkWithPreview/StellarLinkWithPreview";

const Stellar = ({ data }) => {
  const [color, setColor] = useState(null);
  const { width } = useWindowDimensions()
  useEffect(() => {
    setColor({
      theme: data?.template_theme_color || "#F8E4C1",
      variants: generateColorVariants(data?.template_theme_color || "#F8E4C1", 1.5)
    });
  }, [data?.template_theme_color])

  const isWhiteBackground = chroma(data?.template_theme_color).luminance() > 0.5;

  return (
    <div className="min-h-screen md:py-6" style={{ background: data?.template_theme_color || "#F8E4C1", '--contentColor':data?.template_content_color, color: 'var(--contentColor)' }}>
    <div className="w-full md:w-[45%] mx-auto">
        <FadeHeroSection data={data} color={color} />
        <AboutMe about={data?.about} showButton={data?.show_collaboration} connect={data?.connect_details} />
        <div className="px-6 md:px-0">
          {data?.links?.map((link, index) => (
            <StellarLinkWithPreview key={index} data={link} color={data?.template_theme_color} />
          ))}
          {data?.video_links?.map((item, index) => (
            <div key={`video-${index}`} className="mt-6">
              <ProPlayer url={item?.url} height={width > 500 ? 300 : 200} />
            </div>
          ))}
        </div>
          <div className="mt-6">
            <ImageMasonry data={data?.gallery}/>
          </div>
        <PoweredBy isWhiteBackground={isWhiteBackground}/>
      </div>
    </div>
  )
}

export default Stellar