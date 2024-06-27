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

  const event = {
    title: "Ansar & Asna's Wedding",
    start: "20240630T110000",
    end: "20240630T200000",
    location: "Pathanapuram",
    description: "Join us to celebrate the wedding of Ansar and Asna.",
  };

  const googleCalendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    event.title
  )}&dates=${event.start}/${event.end}&details=${encodeURIComponent(
    event.description
  )}&location=${encodeURIComponent(event.location)}`;
  const outlookCalendarUrl = `https://outlook.live.com/owa/?path=/calendar/action/compose&rru=addevent&subject=${encodeURIComponent(
    event.title
  )}&startdt=${event.start}&enddt=${event.end}&body=${encodeURIComponent(
    event.description
  )}&location=${encodeURIComponent(event.location)}`;
  const appleCalendarUrl = `data:text/calendar;charset=utf8,BEGIN:VCALENDAR%0AVERSION:2.0%0ABEGIN:VEVENT%0ASUMMARY:${encodeURIComponent(
    event.title
  )}%0ADTSTART:${event.start}%0ADTEND:${
    event.end
  }%0ADESCRIPTION:${encodeURIComponent(
    event.description
  )}%0ALOCATION:${encodeURIComponent(
    event.location
  )}%0AEND:VEVENT%0AEND:VCALENDAR`;

  const getCalendarUrl = () => {
    const userAgent = window.navigator.userAgent;
    if (
      userAgent.includes("Mac") ||
      userAgent.includes("iPhone") ||
      userAgent.includes("iPad")
    ) {
      return appleCalendarUrl;
    } else if (userAgent.includes("Windows") || userAgent.includes("Linux")) {
      return outlookCalendarUrl;
    } else {
      return googleCalendarUrl;
    }
  };

  const handleAddToCalendar = () => {
    const calendarUrl = getCalendarUrl();
    window.open(calendarUrl, "_blank");
  };
  return (
    <div className="ansar-asna">
      <section className="spotlight">
        <div class="wrapper">
          <div class="main">
            <div class="name">
              <h2>
                Anzar <span>&amp;</span> Asna
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
                  At 06 PM <br /> Groom&apos;s Residence
                </p>
              </div>
            </div>
          </div>
          <small>Crown Convention center, Pathanapuram</small>
          <button onClick={handleAddToCalendar}>Add to calender</button>
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
