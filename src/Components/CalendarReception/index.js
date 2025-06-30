"use client";

import "add-to-calendar-button";
import { AddToCalendarButton } from "add-to-calendar-button-react";
import { Assets } from "assets/assets";
import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import Style from "../Calendar/Calendar.module.scss";

const Calendar = ({ data }) => {
  const CalendarData =
    window?.innerWidth <= 1050
      ? data?.dateReception?.slice(1, -1)
      : data?.dateReception;
  // const { handleAddEvent } = useCalendar();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  console.log(CalendarData);
  //TODO: REMOVE EVENT_TYPE CHECK
  const eventName =
    data.event_type === "wedding_ml"
      ? "Karthiksurya & Varsha's Wedding Ceremony"
      : `${data?.bride} & ${data?.groom}'s Wedding Ceremony`;
  const description =
    data.event_type === "wedding_ml"
      ? "Celebrate the wedding of Karthiksurya & Varsha"
      : `Celebrate the wedding of ${data?.bride} & ${data?.groom}`;

  return (
    <div className={Style.calendarWrapper}>
      <span className={Style.Starttime}>
        {data?.name_starter || "Celebration Begins at "}
        <span className="font-serif">{data?.reception_begin_time}</span>
      </span>
      <ul className={Style.calendar} ref={ref}>
        {CalendarData.map((item, index) => (
          <motion.li
            key={index}
            className={item.active ? Style.active : ""}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
          >
            <span>{data?.month}</span>
            <h5>{item.date}</h5>
            <span>{item.day}</span>
            {item.active && (
              <Image src={Assets?.round} className={Style.round} alt="Round" />
            )}
          </motion.li>
        ))}
      </ul>
      <div className={Style.exactTime}>
        {data?.muhurtham && (
          <p className={Style.time}>
            {/* Muhurtham - */}
            <span
              dangerouslySetInnerHTML={{ __html: data?.reception_muhurtham }}
            ></span>
          </p>
        )}
        {/* <Image src={Assets?.divider} alt="Divider" /> */}
      </div>

      <div className={Style.destination}>
        <h5 className="!font-serif">at</h5>
        <h2>
          {data?.reception_venue}
          <br />
          {data?.reception_place}
        </h2>
      </div>

      <div className="p-4 flex justify-center flex-col items-center ">
        <h5 className={Style.addEventHead}>Add to your calendar</h5>
        <AddToCalendarButton
          name={eventName}
          title={eventName}
          startDate={data?.reception_date}
          endDate={data?.reception_date}
          location={`${data?.reception_place}`}
          startTime={data?.reception_begin_time}
          endTime="20:00"
          timeZone="Asia/Calcutta"
          description={description}
          options={["Apple", "Google"]}
          buttonsList
          hideTextLabelButton
          buttonStyle="round"
          lightMode="bodyScheme"
        ></AddToCalendarButton>
      </div>
    </div>
  );
};

export default Calendar;
