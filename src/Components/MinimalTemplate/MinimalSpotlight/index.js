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

const MinimalSpotlight = () => {
  const handleOpenGoogleMaps = () => {
    const location = "Crown Convention Centre";
    const query = encodeURIComponent(location);
    const googleMapsUrl = `https://maps.app.goo.gl/8VueYp1Aj8M9L1KQ7`;

    window.open(googleMapsUrl, "_blank");
  };

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0 },
  };
  return (
    <div className="ansar-asna">
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
                Anzar Nazeer<span>&amp;</span> Asna
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
              With joyful hearts, Ansar Nazeer and Asna S, together with their
              families, invite you to celebrate their union. Please join us for
              the wedding ceremony on Sunday, June 30, 2024, at 11:00 AM at
              Crown Convention Center, Pathanapuram. Reception to follow at the
              same venue. We eagerly await your presence to share in this
              special day.
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
                //   effect={"fade"}
                speed={500}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                // roundLengths={true}
                modules={[EffectFade, Autoplay]}
                // center
                breakpoints={{
                  // when window width is >= 640px
                  640: {
                    slidesPerView: 1,
                  },
                  // when window width is >= 768px
                  768: {
                    slidesPerView: 2,
                  },
                  // when window width is >= 1024px
                  1024: {
                    slidesPerView: 3,
                  },
                }}
              >
                {ansar_asna?.images?.map((item, i) => (
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
          <div class="date">
            <h4>30 June</h4>
            <span>Sunday</span>
            <div className="timing">
              <div className="item">
                <h5>Wedding</h5>
                <p>
                  At 11 AM <br /> Crown Convention
                </p>
              </div>
              <div className="item">
                <h5>Reception</h5>
                <p>
                  At 06 PM <br /> Groom&apos;s Residence
                </p>
              </div>
            </div>
          </div>
          <small>Crown Convention center, Pathanapuram</small>
          <span>Add event to your calendar</span>
          <button>
            <add-to-calendar-button
              name="Ansar Nazeer & Asna's Wedding Ceremony"
              title="Ansar & Asna's Wedding Ceremony"
              startDate="2024-06-30"
              location="Pathanapuram"
              startTime="11:00"
              endTime="20:00"
              timeZone="Asia/Calcutta"
              description="Celebrate the wedding of Ansar & Asna!"
              options="'Apple','Google','iCal','Outlook.com','Yahoo'"
              buttonsList
              hideTextLabelButton
              buttonStyle="round"
              lightMode="bodyScheme"
            ></add-to-calendar-button>
            {/* <add-to-calendar-button
              name="Ansar & Asna's Wedding Ceremony"
              options="'Apple','Google'"
              location="Pathanapuram"
              startDate="2024-06-30"
              description="Celebrate the wedding of Ansar & Asna!"
              endDate="2024-06-30"
              startTime="11:00"
              endTime="20:00"
              timeZone="Asia/Calcutta"
            >
              Add to your calendar
            </add-to-calendar-button> */}
          </button>
        </div>
        <div className="wrapper">
          <div class="location">
            <div class="gmap">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.685942121755!2d76.85043851043893!3d9.092347390933922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0672e61bf2183b%3A0xb448813ca4dca6b5!2sCrown%20Convention%20Centre!5e0!3m2!1sen!2sin!4v1719455916775!5m2!1sen!2sin"
                width="600"
                height="450"
                // style="border:0;"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
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
            <Image src={Assets?.Created_by} alt="logo" width={50} height={50} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default MinimalSpotlight;
