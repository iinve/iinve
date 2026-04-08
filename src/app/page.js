import dynamic from "next/dynamic";
import Spotlight from "Components/Spotlight/Spotlight";
import VideoIntro from "Components/VideoIntro/VideoIntro";
import "../styles/global.css";

const TemplateSlider = dynamic(
  () => import("Components/TemplateSlider/TemplateSlider"),
  { ssr: true },
);
const Bento = dynamic(() => import("Components/Bento/Bento"), { ssr: true });
const StepContainer = dynamic(
  () => import("Components/StepContainer/StepContainer"),
  { ssr: true },
);
const Testimonials = dynamic(
  () => import("Components/Testimonials/Testimonials"),
  { ssr: true },
);
const FAQs = dynamic(() => import("Components/FAQs/FAQs"), { ssr: true });

export default function Home() {
  return (
    <>
      <Spotlight />
      <VideoIntro />

      <TemplateSlider />
      <Bento />
      {/* <StepContainer /> */}
      <Testimonials />
      <FAQs />
    </>
  );
}
