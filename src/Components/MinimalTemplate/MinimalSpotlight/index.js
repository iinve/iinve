"use client";

import "add-to-calendar-button";
import { Assets } from "assets/assets";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaMapLocationDot } from "react-icons/fa6";
import "swiper/css";
import "swiper/css/effect-fade";
import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./MinimalSpotlight.css";
import CalendarReception from "Components/CalendarReception";
import MapReception from "Components/MapReception";
import Lotus from "../../../assets/images/lotus.png";
import LotusTwo from "../../../assets/images/lotus2.png";

const MinimalSpotlight = ({
  brideName,
  groomName,
  date,
  time,
  place,
  slideData,
  day,
  receptionTime,
  startDate,
  location,
  endTime,
  mapLink,
  data,
}) => {
  const handleOpenGoogleMaps = () => {
    const location = "Kumaramangalam Auditorium";
    const query = encodeURIComponent(location);
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${query}`;
    window.open(googleMapsUrl, "_blank");
  };

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="minimal ">
      <section className="spotlight">
        <div class="wrapper">
          <div class="main">
            <motion.div
              className="name"
              initial="hidden"
              animate="show"
              variants={fadeUpVariants}
              transition={{ duration: 0.5 }}
            >
              <h2 className="minimalhead">
                {groomName}
                <span>&amp;</span>
                {brideName}
              </h2>
            </motion.div>
          </div>
          <small>Wedding Reception</small>
          <div className="relative">
            <div className="absolute -right-[174px] top-[90px] -rotate-45">
              <Image src={LotusTwo} alt="Logo" width={300} height={100} />
            </div>
          </div>
        </div>
      </section>
      <section id="bottom">
        <div class="weapper">
          <div class="content">
            <p>
              Invite your esteemed presence to celebrate the joyous occasion of
              our Wedding Reception <br />
              <br />{" "}
              <b>
                {" "}
                On 13th July 2025 at Travancore International convention centre,
                Karyavattom (The Sports hub, Greenfield International stadium)
                from 5 PM onwards.
              </b>
              <br />
              <br /> Grace us with your love and support!
            </p>
          </div>
          <div class="slide-img">
            <ul>
              <Swiper
                className="mySwiper"
                slidesPerView={3}
                centeredSlides={true}
                spaceBetween={0}
                loop={true}
                draggable={false}
                speed={500}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                modules={[EffectFade, Autoplay]}
                breakpoints={{
                  640: {
                    slidesPerView: 1,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                  1024: {
                    slidesPerView: 3,
                  },
                }}
              >
                {slideData?.images?.map((item, i) => (
                  <SwiperSlide key={i}>
                    <li key={i}>
                      <Image src={item} alt="img" width={500} height={500} />
                    </li>
                  </SwiperSlide>
                ))}
              </Swiper>
            </ul>
          </div>
        </div>
        {/* <div class="venue">
          <span className="fixed-background"></span>
          <div class="date">
            <h4>{date}</h4>
            <span>{day}</span>
            <div className="timing">
              <div className="item">
                <h5>Wedding</h5>
                <p>
                  At {time} <br />
                </p>
              </div>
              <div className="item">
                <h5>Reception</h5>
                <p>
                  At {receptionTime} <br /> Groom&apos;s Residence
                </p>
              </div>
            </div>
          </div>
          <small>{place}</small>
          <span>Add event to your calendar</span>
          <button>
            <add-to-calendar-button
              name={`${groomName} & ${brideName}'s Wedding Ceremony`}
              title={`${groomName} & ${brideName}'s Wedding Ceremony`}
              startDate="2024-09-08"
              location={location}
              startTime="11:00"
              endTime={endTime}
              timeZone="Asia/Calcutta"
              description={`Celebrate the wedding of ${groomName} & ${brideName}!`}
              options="'Apple','Google','Outlook.com','Yahoo'"
              buttonsList
              hideTextLabelButton
              buttonStyle="round"
              lightMode="bodyScheme"
            ></add-to-calendar-button>
          </button>
        </div> */}

        <CalendarReception data={data} />
        <div className="relative">
          <div className="absolute -left-[240px] -top-[150px]">
            <Image src={LotusTwo} alt="Logo" width={500} height={150} />
          </div>
        </div>
        <MapReception data={data} />

        <div className="wrapper">
          {/* <div class="location">
            <div class="gmap">
              <iframe
                src={mapLink}
                width="600"
                height="450"
                // style="border:0;"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <button onClick={handleOpenGoogleMaps}>
              <a href="#">
                Get event location
                <FaMapLocationDot />
              </a>
            </button>
          </div> */}

          <div class="logo relative overflow-hidden">
            <div className="flex justify-center absolute -md:bottom-[140px] -bottom-[80px]">
              <Image src={Lotus} alt="Logo" width={500} height={150} />
            </div>
            <Link href={"/"} className="pb-[160px]">
              <Image
                src={Assets?.Created_by}
                alt="Logo"
                width={130}
                height={50}
              />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MinimalSpotlight;
