import Bride from "../assets/coffeePremium/Juliet-Nathaniel/bride-one.webp";
import image01 from "../assets/coffeePremium/Juliet-Nathaniel/one.webp";
import image02 from "../assets/coffeePremium/Juliet-Nathaniel/two.webp";
import image03 from "../assets/coffeePremium/Juliet-Nathaniel/three.webp";
import Groom from "../assets/coffeePremium/Juliet-Nathaniel/groom.webp";
import image04 from "../assets/coffeePremium/Juliet-Nathaniel/four.webp";
import image05 from "../assets/coffeePremium/Juliet-Nathaniel/five.webp";

export const juliet_nathaniel = {
  groom: "Juliet",
  bride: "Nathaniel",
  phone1: "",
  theme: "#161616",
  default_color: "#FEF3E2",
  send_wishes : true ,
  event_type:"wedding",
  highlight_color: "#ddae6b",
  phone2: "",
  begin_time: "11:30 AM",
  music: "/audio/audio1.mp3",
  quote:
    "invite you to join us as we celebrate the beginning of our forever. Surrounded by the blessings of family, friends, and well-wishers, we step into a new chapter of life together and your presence will make our day truly complete.",
  hide_info: false,
  couples_data: [
    {
      full_name: "Juliet",
      bio: "S/O   Eleanor and Sebastian",
      avatar: Groom,
    },
    {
      full_name: "Nathaniel",
      bio: "D/O Natalie and Lucas",
      avatar: Bride,
    },
  ],

  images: [
    image01,
    image02,
    image03,
    image04,
    image01,
    image05,
    image01,
    image03,
  ],
  dateData: [
    { date: "22", day: "Thu" },
    { date: "23", day: "Fri" },
    { date: "24", day: "Sat" },
    { date: "25", day: "Sun", active: true },
    { date: "26", day: "Mon" },
    { date: "27", day: "Tue" },
    { date: "28", day: "Wed" },
  ],
  month: "October",
  //   muhurtham: "11:50 AM",
  venue: "Las Vegas Convention Center ",
  place: "Las Vegas , America ",
  date: "2025-10-25",
  map: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3476.4883255629406!2d-115.29063900000001!3d36.174361000000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzbCsDEwJzI3LjciTiAxMTXCsDE3JzI2LjMiVw!5e1!3m2!1sen!2sin!4v1748062791942!5m2!1sen!2sin",
  // map_name: "Kalikavu",
  map_link: "https://maps.app.goo.gl/ALSCLcQtMS4oWNJr6",
};
