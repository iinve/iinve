"use client";

import Spotlight from "@/Components/Spotlight/Spotlight";
import TemplateSlider from "@/Components/TemplateSlider/TemplateSlider";



export default function Home() {
  return (
    <>
      <Spotlight />
      {/* <Bento /> */}
      {/* <Categories /> */}
      {/* <StepContainer /> */}
      <TemplateSlider />
      {/* <Pricing/> */}
      {/* <FAQs /> */}
      {/* <Testimonials /> */}
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
