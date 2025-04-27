"use client";
import React from "react";
import Style from "./Spotlight.module.scss";
import Image from "next/image";
import { Assets } from "assets/assets";

const Spotlight = ({ data }) => {
  console.log(data?.dates);
  return (
    <div className={Style.spotlight}>
      <div className={Style.mesh}>
        <Image
          src={Assets.galaxy_spotlight_mesh}
          height={300}
          width={300}
          alt="mesh"
        />
      </div>
      <div className={Style.spotlight_content}>
        <h5 dangerouslySetInnerHTML={{ __html: data?.subHeading }} className="text-white"></h5>
        {/* <h3 dangerouslySetInnerHTML={{ __html: data?.heading }}></h3> */}
        {/* <div className={Style.date_wrapper}>
        {data?.dates?.map((item, index) => (
          <div className={Style.date_box} key={index}>
            {item.date}
          </div>
        ))}
      </div> */}
      </div>
    </div>
  );
};

export default Spotlight;
