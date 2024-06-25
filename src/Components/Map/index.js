import React from "react";
import Style from "./Map.module.scss";
import CommonButton from "../CommonButton";
import { FaMapLocationDot } from "react-icons/fa6";
import { useMap } from "./useMap";
import { Skeleton } from "@nextui-org/react";
const Map = () => {
  const { handleOpenGoogleMaps, mapOnLoad, isLoaded } = useMap();
  console.log(isLoaded);
  return (
    <div className={Style.map}>
      <p>
        With great joy and heartfelt excitement, we invite you to share in our
        happiness as we exchange vows and embark on this beautiful journey
        together.
      </p>
      <div className={Style.mapContainer}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3803.636167582606!2d78.55457806059405!3d17.572500683277127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb847d7e205b39%3A0x1a77c6ffc3f76e95!2sAalankrita%20Resort%20And%20Convention!5e0!3m2!1sen!2sin!4v1719249980414!5m2!1sen!2sin"
          width="650"
          height={window?.innerWidth >= 560 ? "350" : "240"}
          className={Style.mapBox}
          allowfullscreen=""
          referrerpolicy="no-referrer-when-downgrade"
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
