"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { LuMapPin, LuNavigation } from "react-icons/lu";
import Style from "./LocationSection.module.scss";

const LocationSection = ({ data }) => {
  const [loaded, setLoaded] = useState(false);

  const openDirections = () => {
    const link = data?.map_link;
    if (!link) return;
    window.open(link, "_blank", "noopener,noreferrer");
  };

  return (
    <div className={Style.wrapper}>
      <motion.span
        className={Style.eyebrow}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Find Us Here
      </motion.span>

      <motion.div
        className={Style.frame}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <iframe
          src={data?.map}
          className={Style.map}
          loading="lazy"
          allowFullScreen=""
          referrerPolicy="no-referrer-when-downgrade"
          onLoad={() => setLoaded(true)}
        />
        {!loaded && <div className={Style.mapSkeleton} />}

        <div className={Style.card}>
          <LuMapPin size={18} />
          <div>
            <h5>{data?.venue}</h5>
            <span>{data?.place}</span>
          </div>
        </div>

        <button className={Style.directions} onClick={openDirections}>
          <LuNavigation size={16} />
          Get Directions
        </button>
      </motion.div>
    </div>
  );
};

export default LocationSection;
