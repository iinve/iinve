import photo1 from "../assets/coffeePremium/Jinsha-Ashim/01.jpg";
import photo2 from "../assets/coffeePremium/Jinsha-Ashim/2.jpg";
import photo3 from "../assets/coffeePremium/Jinsha-Ashim/3.jpg";
import photo4 from "../assets/coffeePremium/Jinsha-Ashim/4.jpg";
import photo5 from "../assets/coffeePremium/Jinsha-Ashim/5.jpg";
import introBg from "../assets/coffeePremium/Jinsha-Ashim/bg.png";
import introEnvelope from "../assets/coffeePremium/Jinsha-Ashim/envelop.png";
import introFlower from "../assets/coffeePremium/Jinsha-Ashim/flower.png";

export const jinshaAshimData = {
  bride: "Jinsha Ashraf",
  groom: "Ashim Akbar",
  event_type: "nikkah",
  theme: "#FFFFFF",
  default_color: "#132361",
  highlight_color: "#4870AB",
  phone1: "",
  phone2: "",
  begin_time: "10:30 AM",
  music: "/audio/arabic.mp3",
  hide_info: false,
  send_wishes: true,
  quote:
    "With great joy, we invite you and your family to celebrate the nikkah ceremony of our beloved daughter.",
  wdn_quote:
    "With great joy and heartfelt excitement, we invite you to share in our happiness as we exchange vows and embark on this beautiful journey together.",
  bismillah: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",

  parents_data: [
    {
      role: "Bride",
      name: "Jinsha Ashraf",
      relation: "D/O",
      parents: "Ashraf Erambath & Jaseena Kalathingal",
      house: "Erambath House, Kalikavu",
    },
    {
      role: "Groom",
      name: "Ashim Akbar",
      relation: "S/O",
      parents: "Akbar Muthangayil & Nisara",
      house: "Muthangayil House, Pookkottumpadam",
    },
  ],

  images: [photo1, photo4, photo2, photo3, photo5],
  intro_background: introBg,
  intro_envelope: introEnvelope,
  intro_flower: introFlower,

  dateData: [
    { date: "16", day: "Wed" },
    { date: "17", day: "Thu" },
    { date: "18", day: "Fri" },
    { date: "19", day: "Sat", active: true },
    { date: "20", day: "Sun" },
    { date: "21", day: "Mon" },
    { date: "22", day: "Tue" },
  ],
  month: "September",
  muhurtham: "10:30 AM &nbsp;-&nbsp; 3:00 PM",
  venue: "KT CONVENTION CENTRE",
  place: "Wandoor",
  date: "2026-09-19",
  end_time: "15:00",
  map: "https://www.google.com/maps?q=KT+Convention+Centre+Wandoor&output=embed",
  map_link:
    "https://www.google.com/maps/search/?api=1&query=KT+Convention+Centre+Wandoor",
};
