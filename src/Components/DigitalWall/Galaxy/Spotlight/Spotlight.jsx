"use client";
import React from "react";
import Style from "./Spotlight.module.scss";
import Image from "next/image";
import { Assets } from "assets/assets";

const Spotlight = ({data}) => {

console.log(data?.dates)
  return (
    <div className={Style.spotlight}>
      <div className={Style.mesh}>
        <Image
          src={Assets.galaxy_spot_mesh}
          height={400}
          width={300}
          alt="mesh"
        />
      </div>
      <div className={Style.spotlight_content}>
      <h3 dangerouslySetInnerHTML={{ __html: data?.heading }}></h3>
      <div className={Style.date_wrapper}>
        {data?.dates?.map((item, index) => (
          <div className={Style.date_box} key={index}>
            {item.date}
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default Spotlight;
