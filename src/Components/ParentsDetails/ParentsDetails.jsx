"use client";

import { motion } from "framer-motion";
import Style from "./ParentsDetails.module.scss";

const ParentsDetails = ({ data }) => {
  const parents = data?.parents_data || [];
  if (!parents.length) return null;

  return (
    <div className={Style.wrapper}>
      {/* <span className={Style.eyebrow}>With the Blessings of</span> */}

      <div className={Style.split}>
        {parents.map((p, i) => (
          <motion.div
            className={`${Style.half} ${i === 0 ? Style.dark : Style.light}`}
            key={i}
            initial={{ opacity: 0, x: i === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className={Style.role}>{p.role}</span>
            <h4>{p.name}</h4>
            <p>
              {p.relation} {p.parents}
            </p>
            {p.house && <span className={Style.house}>{p.house}</span>}
          </motion.div>
        ))}

        <span className={Style.amp}>&amp;</span>
      </div>
    </div>
  );
};

export default ParentsDetails;
