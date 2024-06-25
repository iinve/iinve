import { saveAs } from "file-saver";

export const useCalendar = () => {
  const handleAddEvent = () => {
    const event = {
      title: "Anil weds Shakthi",
      description: "The wedding of Anil and Shakthi",
      start: new Date("2024-12-05T07:30:00"),
      end: new Date("2024-12-05T22:00:00"),
      location:
        "AALANKRITA RESORT & CONVENTION CENTRE | SHUBHAMASTU LAWN HYDERABAD,TELANGANA , INDIA",
    };

    const start = formatDate(event.start);
    const end = formatDate(event.end);
    const icsContent = `
    BEGIN
    VERSION:2.0
    PRODID:-//Your Organization//Your Product//EN
    BEGIN
    UID:${generateUID()}
    DTSTAMP:${formatDate(new Date())}
    DTSTART:${start}
    DTEND:${end}
    SUMMARY:${event.title}
    DESCRIPTION:${event.description}
    LOCATION:${event.location}
    END
    END
    `.trim();

    const blob = new Blob([icsContent], {
      type: "text/calendar;charset=utf-8",
    });
    saveAs(blob, "event.ics");
  };

  const formatDate = (date) => {
    return date.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
  };

  const generateUID = () => {
    return "uid" + Date.now() + "@iinve.com";
  };

  return { handleAddEvent };
};
