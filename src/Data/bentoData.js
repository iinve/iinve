import { Assets } from "assets/assets";


export const bentoData = [
  {
    heading: "Elegant templates.",
    sub_heading: "Next level unique templates.",
    image: {
      url: Assets.bento.template,
      style: { width: "clamp(280px, 50%, 400px)", right: "-20px", maxWidth: "100%" },
    },
    style: { gridColumn: "1", gridRow: "1 / span 5" },
  },
  {
    heading: "Your own personalization.",
    sub_heading: "Fully customizable Theme, color etc.",
    image: {
      url: Assets.bento.customize,
      style: { width: "clamp(300px, 60%, 450px)", right: "-40px", bottom: "-40px", maxWidth: "100%" },
    },
    style: { gridColumn: "2 / span 2", gridRow: "1 / span 2" },
  },
  {
    heading: "No-code pages.",
    sub_heading: "No coding required.",
    image: {
      url: Assets.bento.crown,
      style: { width: "clamp(200px, 50%, 200px)", right: "50%", marginRight:'-100px', bottom: "0", maxWidth: "100%" },
    },
    style: { gridColumn: "4 / span 2", gridRow: "1 / span 2" },
  },
  {
    heading: "Fast & Secure.",
    sub_heading: "High performance and secure.",
    image: {
      url: Assets.bento.performance,
      style: { 
        width: "clamp(180px, 50%, 250px)", 
        left: "50%", 
        bottom: "-40px", 
        maxWidth: "100%", 
        marginLeft: "-30%",
        position: "absolute",
      }
    },
    style: { gridColumn: "2 / span 1", gridRow: "3 / span 3" },
  },
  {
    heading: "Easy to customize.",
    sub_heading: "You can easly customize from viiew's editor.",
    image: {
      url: Assets.bento.cube,
      style: { width: "clamp(230px, 55%, 350px)", right: "-30px", bottom: "-30px", maxWidth: "100%" },
    },
    style: { gridColumn: "3 / span 3", gridRow: "3 / span 3" },
  },
];
