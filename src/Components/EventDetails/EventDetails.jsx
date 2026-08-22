"use client";

import "add-to-calendar-button";
import { AddToCalendarButton } from "add-to-calendar-button-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Style from "./EventDetails.module.scss";

const EventDetails = ({ data }) => {
  const activeDate = data?.dateData?.find((d) => d.active) || {};
  const eventName = `${data?.groom} & ${data?.bride}'s Wedding Ceremony`;
  const description = `Celebrate the wedding of ${data?.groom} & ${data?.bride}`;
  const weekday = data?.date
    ? new Date(`${data.date}T00:00:00`).toLocaleDateString("en-US", {
        weekday: "long",
      })
    : "";

  return (
    <div className={Style.wrapper}>
      <motion.div
        className={Style.panel}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {/* {data?.intro_flower && (
          <span className={Style.flowerWrap}>
            <Image
              src={data.intro_flower}
              alt=""
              className={Style.flowerImage}
              sizes="20vw"
            />
          </span>
        )} */}

        <span className={Style.eyebrow}>Save the Date</span>

        <div className={Style.dateRow}>
          <span className={Style.day}>{activeDate.date}</span>
          <div className={Style.dateMeta}>
            <span>{data?.month}</span>
            <span>{weekday}</span>
          </div>
        </div>

        <span className={Style.time}>{data?.begin_time} onwards</span>

        <div className={Style.divider} />

        <p className={Style.venue}>
          {data?.venue}
          <br />
          {data?.place}
        </p>

        <div className={Style.button}>
          <AddToCalendarButton
            name={eventName}
            title={eventName}
            startDate={data?.date}
            endDate={data?.date}
            location={data?.place}
            startTime={data?.begin_time}
            endTime={data?.end_time || "20:00"}
            timeZone="Asia/Calcutta"
            description={description}
            options={["Apple", "Google"]}
            buttonsList
            hideTextLabelButton
            buttonStyle="round"
            lightMode="dark"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default EventDetails;
