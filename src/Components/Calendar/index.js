import Image from "next/image";
import Style from "./Calendar.module.scss";
import { Assets } from "@/assets/assets";
import CommonButton from "../CommonButton";
import { LuCalendarCheck2 } from "react-icons/lu";
import { useCalendar } from "./useCalendar";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "add-to-calendar-button";
import { AddToCalendarButton } from "add-to-calendar-button-react";

const Calendar = () => {
  const dateData = [
    { date: "02", day: "Mon" },
    { date: "03", day: "Tue" },
    { date: "04", day: "Wed" },
    { date: "05", day: "Thu", active: true },
    { date: "06", day: "Fri" },
    { date: "07", day: "Sat" },
    { date: "08", day: "Sun" },
  ];

  const CalendarData =
    window?.innerWidth <= 1050 ? dateData?.slice(1, -1) : dateData;
  const { handleAddEvent } = useCalendar();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  return (
    <div className={Style.calendarWrapper}>
      <span className={Style.Starttime}>Celebration Begins at 07:30 AM</span>
      <ul className={Style.calendar} ref={ref}>
        {CalendarData.map((item, index) => (
          <motion.li
            key={index}
            className={item.active ? Style.active : ""}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
          >
            <span>Dec</span>
            <h5>{item.date}</h5>
            <span>{item.day}</span>
            {item.active && (
              <Image src={Assets?.round} className={Style.round} alt="Round" />
            )}
          </motion.li>
        ))}
      </ul>
      <div className={Style.exactTime}>
        <span className={Style.time}>Muhurtham - 09 : 50 AM</span>
        <Image src={Assets?.divider} alt="Divider" />
      </div>

      <div className={Style.destination}>
        <h5>at</h5>
        <h2>
          AALANKRITA RESORT & CONVENTION CENTRE | SHUBHAMASTU LAWN
          <br />
          HYDERABAD,TELANGANA , INDIA
        </h2>
      </div>

      <div className="p-4 flex justify-center flex-col items-center ">
        <h5 className={Style.addEventHead}>Add to your calendar</h5>
        <add-to-calendar-button
          name="Anil & Shakthi's Wedding Ceremony"
          title="Anil & Shakthi's Wedding Ceremony"
          startDate="2024-12-05"
          location="Alankritha Resort & Convention Center Shubhamastu lawn, Hyderabad Telangana"
          startTime="07:30"
          endTime="20:00"
          timeZone="Asia/Calcutta"
          description="Celebrate the wedding of Anil & Shakthi!"
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
