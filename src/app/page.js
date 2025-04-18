"use client";

import Bento from "@/Components/Bento/Bento";
import Categories from "@/Components/Categories/Categories";
import FAQs from "@/Components/FAQs/FAQs";
import GetADemo from "@/Components/GetADemo/GetADemo";
import Spotlight from "@/Components/Spotlight/Spotlight";
import StepContainer from "@/Components/StepContainer/StepContainer";
import TemplateSlider from "@/Components/TemplateSlider/TemplateSlider";



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
