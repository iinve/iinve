import image01 from "../assets/coffeePremium/imran-shifa/imran1.jpg";
import image02 from "../assets/coffeePremium/imran-shifa/imran2.jpg";
import image03 from "../assets/coffeePremium/imran-shifa/imran3.jpg";
import image04 from "../assets/coffeePremium/imran-shifa/imran4.jpg";
import image05 from "../assets/coffeePremium/imran-shifa/imran5.jpg";
import image06 from "../assets/coffeePremium/imran-shifa/imran6.jpg";
import Bride from "../assets/coffeePremium/imran-shifa/bride.png";
import Groom from "../assets/coffeePremium/imran-shifa/groom.png";

export const imran_shifa = {
  bride: "Shifa",
  groom: "Imran",
  phone1: "",
  theme: "#F2E3C6",
  default_color: "#3c4028",
  send_wishes: false,
  event_type: "nikkah",
  highlight_color: "#ddae6b",
  phone2: "",
  begin_time: "11:00 AM",
  music: "/audio/tamil_theme.mp3",
  quote:
    "invite you to join us as we celebrate the beginning of our forever. Surrounded by the blessings of family, friends, and well-wishers, we step into a new chapter of life together and your presence will make our day truly complete.",
  hide_info: false,
  couples_data: [
    {
      full_name: "Shifa Sherin",
      //   bio: "S/o  Saidali & Sajitha",
      avatar: Groom,
    },
    {
      full_name: "Imran bin Ummer",
      //   bio: "D/o Firos & Jaseena",
      avatar: Bride,
    },
  ],

  images: [image01, image04, image02, image05, image03, image06],

  dateData: [
    { date: "12", day: "Thu" },
    { date: "13", day: "Fri" },
    { date: "14", day: "Sat" },
    { date: "15", day: "Sun", active: true },
    { date: "16", day: "Mon" },
    { date: "17", day: "Tue" },
    { date: "18", day: "Wed" },
  ],
  month: "Nov",
  //   muhurtham: "11:50 AM",
  venue: "Kallan House",
  place: "Karuni, Wayanad",
  date: "2026-11-15",
  map: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d4248.145338046342!2d76.10516007505525!3d11.674827988533846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTHCsDQwJzI5LjQiTiA3NsKwMDYnMjcuOSJF!5e1!3m2!1sen!2sae!4v1793209247017!5m2!1sen!2sae",
  // map_name: "Kalikavu",
  map_link: "https://maps.app.goo.gl/QsRP8GYiaU9L7GgU8",
};
