import React from "react";
import ReactPlayer from "react-player/vimeo";
import Style from "./Banner.module.scss";

const Banner = ({ data }) => {
  return (
    <div className={Style.banner}>
      <ReactPlayer
        url="https://player.vimeo.com/video/1077063863?h=5043d53d91"
        playing
        muted
        loop
        playsinline
        controls={false}
        width="100%"
        height="100%"
        className={Style.video}
        config={{
          vimeo: {
            playerOptions: {
              title: 0,
              byline: 0,
              portrait: 0,
              autopause: 0,
            },
          },
        }}
      />
      {/* <h5 dangerouslySetInnerHTML={{ __html: data?.subHeading }}></h5> */}
      <div className={Style.spotlight_content}>
        {/* <h5 dangerouslySetInnerHTML={{ __html: data?.subHeading }}></h5> */}
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

export default Banner;
