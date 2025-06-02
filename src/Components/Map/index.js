"use client";

import { motion } from "framer-motion";
import { FaMapLocationDot } from "react-icons/fa6";
import CommonButton from "../CommonButton";
import Style from "./Map.module.scss";
import { useMap } from "./useMap";

const Map = ({ data }) => {
  const { handleOpenGoogleMaps, mapOnLoad } = useMap(data);
  const fadeUp = {
    initial: { opacity: 0, y: 30, filter: "blur(6px)" },
    whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
    transition: { duration: 0.6, ease: "easeOut" },
    viewport: { once: false, amount: 0.5 },
  };

  return (
    <div className={Style.map}>
      <motion.p {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.1 }}
        dangerouslySetInnerHTML={{
          __html: data?.quote || "With great joy and heartfelt excitement, we invite you to share in our happiness as we exchange vows and embark on this beautiful journey together."
        }}
      ></motion.p>

      <motion.div
        className={Style.mapContainer}
        {...fadeUp}
        transition={{ ...fadeUp.transition, delay: 0.3 }}
      >
        <iframe
          src={data?.map}
          width="650"
          height={
            typeof window !== "undefined" && window.innerWidth >= 560
              ? "350"
              : "240"
          }
          className={Style.mapBox}
          allowFullScreen=""
          referrerPolicy="no-referrer-when-downgrade"
          onLoad={mapOnLoad}
        ></iframe>
      </motion.div>

      <motion.div
        className={Style.buttonBox}
        {...fadeUp}
        transition={{ ...fadeUp.transition, delay: 0.5 }}
      >
        <CommonButton
          style={{ fontFamily: "Arial" }}
          text={"Location"}
          icon={<FaMapLocationDot />}
          onClick={handleOpenGoogleMaps}
        />
      </motion.div>
    </div>
  );
};

export default Map;
