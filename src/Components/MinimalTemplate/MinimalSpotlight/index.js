"use client";
import React from "react";
import "./MinimalSpotlight.css";
import Image from "next/image";
import { ansar_asna } from "@/Data/Ansar_asna";
import { Assets } from "@/assets/assets";
import { EffectFade, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaMapLocationDot } from "react-icons/fa6";
import { motion } from "framer-motion";
import "add-to-calendar-button";
import { AddToCalendarButton } from "add-to-calendar-button-react";
import "swiper/css";
import "swiper/css/effect-fade";
import { Skeleton } from "@nextui-org/react";
import Link from "next/link";

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
}) => {
  const handleOpenGoogleMaps = () => {
    const location = "Kumaramangalam Auditorium";
    const query = encodeURIComponent(location);
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${query}`;
    window.open(googleMapsUrl, "_blank");

    window.open(googleMapsUrl, "_blank");
  };

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0 },
  };

  console.log(slideData, "data");
  return (
    <div className="minimal">
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
              <h2>
                {groomName}
                <span>&amp;</span>
                {brideName}
              </h2>
            </motion.div>
          </div>
          <small>Getting Married</small>
        </div>
      </section>
      <section id="bottom">
        <div class="weapper">
          <div class="content">
            <p>
              With joyful hearts, {groomName} and {brideName}, together with
              their families, invite you to celebrate their union. Please join
              us for the wedding ceremony on {date}, at {time} at {place}.
              Reception to follow at the same venue. We eagerly await your
              presence to share in this special day.
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
        <div class="venue">
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
        </div>
        <div className="wrapper">
          <div class="location">
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
          </div>
          <div class="logo">
            <Link href={"/"}>
              <Image
                src={Assets?.Created_by}
                alt="Logo"
                width={50}
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
