export const getMayooriData = (t) => ({
  lang:"ml",
  company: "Mayoori",
  phone1: "+917560 857 916",
  phone2: "04931 257 857",
  whatsApp:"https://api.whatsapp.com/send?phone=917560857916&text=Hello!%20👋%0A%0AI%27m%20interested%20in%20your%20latest%20💍%20jewelry%20collections%20and%20offers.%20Could%20you%20please%20share%20the%20available%20discounts%20or%20special%20deals%3F%20💰%0A%0AThank%20you!%20🙏",
  whatsApp_1: "https://api.whatsapp.com/send?phone=917560857916&text=Hello!%20👋%0A%0AI%20heard%20about%20your%20amazing%20offer%20of%20₹10%2C000%20FREE%20💸%21%20I%27d%20love%20to%20know%20more%20details%20about%20this%20deal.%20Please%20share%20the%20info.%20😊%0A%0AThanks!%20🙏",
  theme: "#000",
  default_color: "#fff",
  highlight_color: "#ddae6b",
  begin_time: "11:30 AM",
  heading: t('heading'),
  offer: t('offer_1'),
  subHeading: t('subheading'),
  quote: t('quote'),
  dates: [
    { date: "26", day: "Mon" },
    { date: "27", day: "Tue" },
    { date: "28", day: "Wed" },
    { date: "29", day: "Thu" },
    { date: "30", day: "Thu" }
  ],
  products:[
    {
      title:"Ring",
      image: "/assets/images/digital-wall/mayoori/1.jpg",
      price:"10,000",
    },
    {
      title:"Ring",
      image: "/assets/images/digital-wall/mayoori/2.jpg",
      price:"6,399",
    },
  ],
  semi_quote: t('semi_quote'),
  backgroundVideo: "https://res.cloudinary.com/viiewme/video/upload/v1745144929/WhatsApp_Video_2025-04-19_at_18.58.08_online-video-cutter.com_rqpwgd.mp4",
  banner_slider: [
    { src: "https://www.youtube.com/watch?v=4Y6W0vH9k8g", text: "Video 1" },
    { src: "https://www.youtube.com/watch?v=4Y6W0vH9k8g", text: "Video 2" },
    { src: "https://www.youtube.com/watch?v=4Y6W0vH9k8g", text: "Video 3" },
  ],
  text_banner: [
    { text: t('text_banner_1') },
    { text: t('text_banner_2') },
    { text: t('text_banner_3') },
    { text: t('text_banner_4') },
  ],
  images: [
    { src: "https://www.youtube.com/watch?v=4Y6W0vH9k8g" },
    { src: "https://www.youtube.com/watch?v=4Y6W0vH9k8g" },
    { src: "https://www.youtube.com/watch?v=4Y6W0vH9k8g" },
  ],
});
