import { FaMapLocationDot } from "react-icons/fa6";
import CommonButton from "../CommonButton";
import Style from "./Map.module.scss";
import { useMap } from "./useMap";
const Map = ({ data }) => {
  const { handleOpenGoogleMaps, mapOnLoad, isLoaded } = useMap(data);
  return (
    <div className={Style.map}>
      <p>
        With great joy and heartfelt excitement, we invite you to share in our
        happiness as we exchange vows and embark on this beautiful journey
        together.
      </p>
      <div className={Style.mapContainer}>
        <iframe
          src={data?.map}
          width="650"
          height={window?.innerWidth >= 560 ? "350" : "240"}
          className={Style.mapBox}
          allowFullScreen=""
          referrerPolicy="no-referrer-when-downgrade"
          onLoad={mapOnLoad}
        ></iframe>
      </div>
      <div className={Style.buttonBox}>
        <CommonButton
          text={"Location"}
          icon={<FaMapLocationDot />}
          onClick={handleOpenGoogleMaps}
        />
      </div>
    </div>
  );
};

export default Map;
