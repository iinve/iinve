"use client";
import React from "react";
import "./MinimalSpotlight.css";
import Image from "next/image";
import { ansar_asna } from "@/Data/Ansar_asna";
import { Assets } from "@/assets/assets";
import { EffectFade, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaMapLocationDot } from "react-icons/fa6";
import "swiper/css";
import "swiper/css/effect-fade";

const MinimalSpotlight = () => {
  const handleOpenGoogleMaps = () => {
    const location = "Crown Convention Centre";
    const query = encodeURIComponent(location);
    const googleMapsUrl = `https://maps.app.goo.gl/8VueYp1Aj8M9L1KQ7`;

    window.open(googleMapsUrl, "_blank");
  };

  const addToGoogleCalendar = () => {
    const baseUrl = "https://calendar.google.com/calendar/r/eventedit";
    const details = {
      text: "Ansar & Asna Wedding Event",
      dates: "20240630T110000Z/20240630T200000Z",
      details: "Join us for our wedding!",
      location: "Crown Convention Center, Pathanapuram",
    };

    const queryString = new URLSearchParams(details).toString();
    const url = `${baseUrl}?${queryString}`;
    window.open(url, "_blank");
  };
  return (
    <div className="ansar-asna">
      <section className="spotlight">
        <div class="wrapper">
          <div class="main">
            <div class="name">
              <h2>
                Anzar <span>&</span> Asna
              </h2>
            </div>
          </div>
          <small>Getting Married</small>
        </div>
      </section>
      <section id="bottom">
        <div class="weapper">
          <div class="content">
            <p>
              With joyful hearts, Emily Davis and Michael Brown, together with
              their families, invite you to celebrate their union. Please join
              us for the wedding ceremony on Saturday, September 14, 2024, at
              4:00 PM at The Rose Garden, 5678 Elm Street, Greenwood. Reception
              to follow at The Evergreen Hall. We eagerly await your presence to
              share in this special day.
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
                  At 06 PM <br /> Groom's Residence
                </p>
              </div>
            </div>
          </div>
          <small>Crown Convention center, Pathanapuram</small>
          <button onClick={addToGoogleCalendar}>Add to calender</button>
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