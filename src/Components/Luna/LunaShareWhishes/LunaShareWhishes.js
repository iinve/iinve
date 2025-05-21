import React from "react";
import styles from "./LunaShareWhishes.module.scss";

const LunaShareWhishes = () => {
  return (
    <div className={styles.lunaContainer}>
      <div className={styles.lunaBackground}>
        <div className={styles.overlay}></div>
      </div>

      <div className={styles.content}>
        <h2 className="text-3xl md:text-4xl font-semibold text-white drop-shadow-md">
          Share your wishes
        </h2>
        <button className="mt-6 px-8 py-3 bg-[#927C68] text-white font-semibold rounded-full border-2 border-white hover:bg-[#7e6958] transition">
          Send Wishes
        </button>
      </div>
    </div>
  );
};

export default LunaShareWhishes;
