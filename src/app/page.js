"use client";

import Bento from "Components/Bento/Bento";
import FAQs from "Components/FAQs/FAQs";
import GetADemo from "Components/GetADemo/GetADemo";
import Spotlight from "Components/Spotlight/Spotlight";
import StepContainer from "Components/StepContainer/StepContainer";
import TemplateSlider from "Components/TemplateSlider/TemplateSlider";
import VideoIntro from "Components/VideoIntro/VideoIntro";
import "../styles/global.css";
import Testimonials from "Components/Testimonials/Testimonials";
import FormSheet from "Components/FormSheet/FormSheet";
import { SHEETS, useToggleVisibility } from "utils/sheetUtils";
import { useRecoilState } from "recoil";
import { sheetVisibility } from "atoms/sheetAtom";
export default function Home() {
  return (
    <>
      <Spotlight />
      <VideoIntro />
      <TemplateSlider />
      <Bento />
      <StepContainer />

      {/* <Pricing/> */}
      {/* <BlogList /> */}
      <Testimonials />
      <FAQs />

      {/* <GetADemo /> */}
      {/* <GetADemoSheet
        isOpen={sheetsVisibility?.[SHEETS.GET_DEMO] || false}
        handleClose={handleCloseDemoSheet}
        isCompleted={isCompleted}
        setIsCompleted={setIsCompleted}
      /> */}
    </>
  );
}
