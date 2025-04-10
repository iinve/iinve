"use client";
import { Assets } from "@/assets/assets";
import "add-to-calendar-button";
import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import Style from "./Calendar.module.scss";
import { useCalendar } from "./useCalendar";

const Calendar = ({ data }) => {
  const CalendarData =
    window?.innerWidth <= 1050 ? data?.dateData?.slice(1, -1) : data?.dateData;
  const { handleAddEvent } = useCalendar();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  return (
    <div className={Style.calendarWrapper}>
      <span className={Style.Starttime}>
        Celebration Begins at {data?.begin_time}
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
        {data?.muhurtham &&<span className={Style.time}>Muhurtham - {data?.muhurtham}</span>}
        <Image src={Assets?.divider} alt="Divider" />
      </div>

      <div className={Style.destination}>
        <h5>at</h5>
        <h2>
          {data?.venue}
          <br />
          {data?.place}
        </h2>
      </div>

      <div className="p-4 flex justify-center flex-col items-center ">
        <h5 className={Style.addEventHead}>Add to your calendar</h5>
        <add-to-calendar-button
          name={`${data?.bride} & ${data?.groom}'s Wedding Ceremony`}
          title={`${data?.bride} & ${data?.groom}'s Wedding Ceremony`}
          startDate={data?.date}
          location={`${data?.place}`}
          startTime={data?.begin_time}
          endTime="20:00"
          timeZone="Asia/Calcutta"
          description={`Celebrate the wedding of ${data?.bride} & ${data?.groom}`}
          options="'Apple','Google','iCal','Outlook.com','Yahoo'"
          buttonsList
          hideTextLabelButton
          buttonStyle="round"
          lightMode="bodyScheme"
        ></add-to-calendar-button>
      </div>
    </div>
  );
};

export default Calendar;
