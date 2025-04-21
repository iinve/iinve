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
      <h5 dangerouslySetInnerHTML={{ __html: data?.subHeading }}></h5>
    </div>
  );
};

export default Banner;
