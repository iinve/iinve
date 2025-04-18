import MinimalSpotlight from "@/Components/MinimalTemplate/MinimalSpotlight";
import { ansar_asna } from "@/data/Ansar_asna";

const MinimalTemplate = ({
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
  return (
    <div>
      <MinimalSpotlight
        groomName={groomName}
        brideName={brideName}
        date={date}
        time={time}
        place={place}
        slideData={ansar_asna}
        day={day}
        receptionTime={receptionTime}
        startDate={startDate}
        location={location}
        endTime={endTime}
        mapLink={mapLink}
      />
    </div>
  );
};

export default MinimalTemplate;
