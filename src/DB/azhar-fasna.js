import Bride from "../assets/coffeePremium/Azhar-Fasna/bride.webp";
import image01 from "../assets/coffeePremium/Azhar-Fasna/one.webp";
import image02 from "../assets/coffeePremium/Azhar-Fasna/two.webp";
import image03 from "../assets/coffeePremium/Azhar-Fasna/three.webp";
import Groom from "../assets/coffeePremium/Azhar-Fasna/groom.webp";
import image04 from "../assets/coffeePremium/Azhar-Fasna/four.webp";
import image05 from "../assets/coffeePremium/Azhar-Fasna/five.webp";
import image06 from "../assets/coffeePremium/Azhar-Fasna/six.webp";

export const azhar_fasna = {
  groom: "Azhar",
  bride: "Fasna",
  phone1: "",
  send_wishes: false ,
  theme: "#181C14",
  event_type:"reception",
  default_color: "#FEF3E2",
  highlight_color: "#ddae6b",
  phone2: "",
  begin_time: "05:00 PM",
  music: "/audio/audio1.mp3",
  quote:
    "invite you to join us as we celebrate the beginning of our forever. Surrounded by the blessings of family, friends, and well-wishers, we step into a new chapter of life together and your presence will make our day truly complete.",
  hide_info: false,
  couples_data: [
    {
      full_name: "Azhar",
      bio: "S/O Nizam",
      avatar: Groom,
    },
    {
      full_name: "Fasna",
      bio: "D/O Ali",
      avatar: Bride,
    },
  ],

  images: [
    image02,
    image01,
    image03,
    image04,
    image02,
    image05,
    image01,
    image06,
  ],
  dateData: [
    { date: "24", day: "Sat" },
    { date: "25", day: "Sun" },
    { date: "26", day: "Mon" },
    { date: "27", day: "Tue", active: true },
    { date: "28", day: "Wed" },
    { date: "29", day: "Thu" },
    { date: "30", day: "Fri" },
  ],
  month: "May",
  //   muhurtham: "11:50 AM",
  venue: "Anugraha Auditorium",
  place: "Mukhathala",
  date: "2025-05-27",
  map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4254.944688107619!2d76.6723252!3d8.893100999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05e31a70fb6771%3A0xdde186c31d8b7dd!2sAnugraha%20Auditorium!5e1!3m2!1sen!2sin!4v1747910731948!5m2!1sen!2sin",
  // map_name: "Kalikavu",
  map_link: "https://maps.app.goo.gl/5o475TDgjCyw1J7R8",
};
