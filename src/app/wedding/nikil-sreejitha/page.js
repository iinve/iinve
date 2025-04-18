
import dynamic from "next/dynamic";
import Head from "next/head";

import Bride from "../../../assets/coffeePremium/nikil_sreejitha/bride_avathar.JPG";
import Groom from "../../../assets/coffeePremium/nikil_sreejitha/groom_avathar.JPG";
import image01 from "../../../assets/coffeePremium/nikil_sreejitha/image01.JPG";
import image02 from "../../../assets/coffeePremium/nikil_sreejitha/image02.JPG";
import image03 from "../../../assets/coffeePremium/nikil_sreejitha/image03.JPG";
import image04 from "../../../assets/coffeePremium/nikil_sreejitha/image04.JPG";
import image05 from "../../../assets/coffeePremium/nikil_sreejitha/image05.JPG";
import image06 from "../../../assets/coffeePremium/nikil_sreejitha/image06.JPG";
import image07 from "../../../assets/coffeePremium/nikil_sreejitha/image07.JPG";
import image08 from "../../../assets/coffeePremium/nikil_sreejitha/image08.JPG";

const Nikil_Sreejitha = {
  bride: "Sreejitha",
  groom: "Nikil",
  phone1: "+918139894272",
  phone2: "+918139894272",
  begin_time: "11:30 AM",
  theme:"#fefbf3",
  default_color:"#333",
  highlight_color:"#ddae6b",
  quote:
    " We're so excited to celebrate our special day with you. Here, you'll find all the details you need about our wedding. We can't wait to share this moment with our closest family and friends.",
  couples_data: [
    {
      full_name: "Nikil",
      bio: "Son of Mr. Taji TK and Sheela Taji",
      avatar: Groom,
    },
    {
      full_name: "Sreejitha",
      bio: "D/o Chinnan MC and Syamala KM",
      avatar: Bride,
    },
  ],

  images: [
    image01,
    image08,
    image03,
    image04,
    image05,
    image06,
    image07,
    image02,
  ],
  dateData: [
    { date: "05", day: "Thu" },
    { date: "06", day: "Fri" },
    { date: "07", day: "Sat" },
    { date: "08", day: "Sun", active: true },
    { date: "09", day: "Mon" },
    { date: "10", day: "Tue" },
    { date: "11", day: "Wed" },
  ],
  month: "Sep",
  muhurtham: "11:50 AM",
  venue: "Sree Kumaramangalam Auditorium",
  place: "North Paravur",
  date: "2024-09-08",
  map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3927.287352772389!2d76.2368767!3d10.1572816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b081a900118aa8b%3A0xee6a9fe8635b5256!2sKumaramangalam%20Auditorium!5e0!3m2!1sen!2sin!4v1725642370995!5m2!1sen!2sin",
  map_name: "Kumaramangalam Auditorium",
};


// Determine the base URL of your application
const isProduction = process.env.NODE_ENV === "production";
const metadataBase = isProduction
  ? "https://iinve.com"
  : "http://localhost:3000";

export const metadata = {
  title: "Nikil & Sreejitha Wedding Invitation | iinve",
  description:
    "Nikil and Sreejitha are getting married and joyfully invite you to celebrate their wedding.",
  openGraph: {
    title: "Nikil & Sreejitha Wedding Invitation | iinve",
    description:
      "Nikil and Sreejitha are getting married and joyfully invite you to celebrate their wedding.",
    images: [
      {
        url: `${metadataBase}/MinimalTemplate/sreejitha_og_image.jpg`,
        alt: "Nikil & Sreejitha Wedding Invitation",
      },
    ],
  },
  metadataBase: metadataBase, // Add this line to set the metadataBase
};

const CoffeePremium = dynamic(() => import("Templates/CoffeePremium"), {
  ssr: false, // Ensure it only loads on the client side
});

const Page = () => {
  return (
    <div>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta
          property="og:description"
          content={metadata.openGraph.description}
        />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />

        {metadata.openGraph.images[0].alt && (
          <meta
            property="og:image:alt"
            content={metadata.openGraph.images[0].alt}
          />
        )}
      </Head>
      <CoffeePremium data={Nikil_Sreejitha} />
    </div>
  );
};

export default Page;
