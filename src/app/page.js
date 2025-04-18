"use client";
import Categories from "@/components/Categories/Categories";
import StepContainer from "@/components/StepContainer/StepContainer";
import Bento from "../components/Bento/Bento";
import FAQs from "../components/FAQs/FAQs";
import GetADemo from "../components/GetADemo/GetADemo";
import Spotlight from "../components/Spotlight/Spotlight";
import TemplateSlider from "../components/TemplateSlider/TemplateSlider";

export default function Home() {
  return (
    <>
      <Spotlight />
      <Bento />
      <Categories />
      <StepContainer />
      <TemplateSlider />
      {/* <Pricing/> */}
      <FAQs />
      {/* <Testimonials /> */}
      <GetADemo />
      {/* <GetADemoSheet
        isOpen={sheetsVisibility?.[SHEETS.GET_DEMO] || false}
        handleClose={handleCloseDemoSheet}
        isCompleted={isCompleted}
        setIsCompleted={setIsCompleted}
      /> */}
    </>
  );
}
