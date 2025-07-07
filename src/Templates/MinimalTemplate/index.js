import MinimalSpotlight from "Components/MinimalTemplate/MinimalSpotlight";
import { reception_karthik } from "../../DB/Reception-karthik";

const MinimalTemplate = ({ data }) => {
  const {
    bride,
    groom,
    reception_date,
    time,
    reception_venue,
    slideData,
    day,
    receptionTime,
    startDate,
    reception_place,
    endTime,
    reception_link,
  } = data;

  console.log(data, "================================================");
  return (
    <div>
      <MinimalSpotlight
        groomName={groom}
        brideName={bride}
        date={reception_date}
        time={time}
        place={reception_venue}
        slideData={reception_karthik}
        day={day}
        receptionTime={receptionTime}
        startDate={startDate}
        location={reception_place}
        mapLink={reception_link}
        data={data}
      />
    </div>
  );
};

export default MinimalTemplate;
