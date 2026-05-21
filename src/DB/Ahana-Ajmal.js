import Bride from "../assets/coffeePremium/Ahana-Ajmal/bride_avathar.jpeg";
import { default as image03, default as image04 } from "../assets/coffeePremium/Ahana-Ajmal/eight.jpeg";
import Groom from "../assets/coffeePremium/Ahana-Ajmal/groom_avathar.jpeg";
import { default as image07, default as image08 } from "../assets/coffeePremium/Ahana-Ajmal/one.jpeg";
import image06 from "../assets/coffeePremium/Ahana-Ajmal/seven.jpeg";
import image05 from "../assets/coffeePremium/Ahana-Ajmal/six.jpeg";
import image02 from "../assets/coffeePremium/Ahana-Ajmal/three.jpeg";
import image01 from "../assets/coffeePremium/Ahana-Ajmal/two.jpeg";

export const ahana_ajmal = {
  bride: "Ahana Khanisha",
  groom: "Ajmal Neerangadan",
  phone1: "",
  theme:"#121212",
  default_color:"#FEF3E2",
  highlight_color:"#ddae6b",
  phone2: "",
  begin_time: "12:00 PM",
  music: "/audio/arabic.mp3", 
  hide_info: true,
  quote: "Save the date! Love, laughter, and forever await as we tie the knot. Your presence will make our wedding day even more special!",
  couples_data: [
    {
      full_name: "Ajmal Neerangadan",
      bio: "Son of Mohammed Neerangadan",
      avatar: Groom,
    },
    {
      full_name: "Ahana Khanisha",
      bio: "Daughter of Hafis muhammed ibrahim",
      avatar: Bride,
    },
  ],

  images: [
    image01,
    image03,
    image04,
    image04,
    image05,
    image06,
    image07,
    image02,
  ],
  dateData: [
    { date: "27", day: "Wed" },
    { date: "28", day: "Thu" },
    { date: "29", day: "Fri" },
    { date: "30", day: "Sat", active: true },
    { date: "31", day: "Sun" },
    { date: "01", day: "Mon" },
    { date: "02", day: "Tue" },
  ],
  month: "May",
  // muhurtham: "11:50 AM",
  venue: "P V R METRO GRAND CONVENTION CENTER",
  place: "Peace Valley, Malamkulam, Manjeri",
  date: "2026-05-30",
  map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3802.6100748512918!2d76.13221031046731!3d11.13188423899361!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba637000c3b8ee7%3A0x272d117abd26a8f1!2sP%20V%20R%20METRO%20GRAND%20CONVENTION%20CENTER!5e1!3m2!1sen!2sin!4v1779367260951!5m2!1sen!2sin",
  // map_name: "Kalikavu",
  map_link:"https://maps.app.goo.gl/juNh9gGxrFAaZn9x9"
};
