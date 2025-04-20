"use client";
import React from "react";
import Style from "./GalexyGallery.module.scss";
import Image from "next/image";
import { Assets } from "assets/assets";

const GalexyGallery = () => {
  return (
    <div className={Style.galexy_gallery}>
      <div className={Style.gallery_list}>
        <div className={Style.gallery_item}>
          <Image
            src={Assets.jwellery}
            width={300}
            height={300}
            alt="jewellery"
          />
        </div>
        <div className={Style.gallery_item}>
          <Image
            src={Assets.jwellery}
            width={300}
            height={300}
            alt="jewellery"
          />
        </div>
        <div className={Style.gallery_item}>
          <Image
            src={Assets.jwellery}
            width={300}
            height={300}
            alt="jewellery"
          />
        </div>
      </div>
    </div>
  );
};

export default GalexyGallery;
