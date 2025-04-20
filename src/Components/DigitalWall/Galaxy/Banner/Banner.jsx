import React from "react";
import Style from "./Banner.module.scss";

const Banner = ({ data }) => {

  return (
    <div className={Style.banner}>
      {data?.backgroundVideo && (
        <video
          className={Style.video}
          autoPlay
          loop
          muted
          playsInline
          width={100}
          height={100}
          src={data.backgroundVideo}
        />
      )}
      <h5 dangerouslySetInnerHTML={{ __html: data?.subHeading }}></h5>
    </div>
  );
};

export default Banner;
