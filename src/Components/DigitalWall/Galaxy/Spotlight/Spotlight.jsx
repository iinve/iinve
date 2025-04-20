"use client";
import React from "react";
import Style from "./Spotlight.module.scss";
import Image from "next/image";
import { Assets } from "assets/assets";

const Spotlight = () => {
  const data = [26, 27, 28, 29];

  return (
    <div className={Style.spotlight}>
      <div className={Style.mesh}>
        <Image
          src={Assets.galaxy_spot_mesh}
          height={300}
          width={300}
          alt="mesh"
        />
      </div>

      <h3>BIG OFFER SALE 2025</h3>

      <div className={Style.date_wrapper}>
        {data.map((item, index) => (
          <div className={Style.date_box} key={index}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Spotlight;
