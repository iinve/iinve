import React, { useEffect } from "react";
import Style from "./CouplesDetails.module.scss";
import { Avatar } from "@nextui-org/react";

const CouplesDetails = ({ full_name, bio, avatar }) => {
  return (
    <div className={`${Style.couplesDetails}`}>
      <div className={Style.avatar}>
        <Avatar
          isBordered
          radius="full"
          src={avatar?.src}
          className={`${Style.avatar} w-16 h-16`}
        />
      </div>

      <div className={Style.ContentBox}>
        <h5>{full_name}</h5>
        <p>{bio}</p>
      </div>
    </div>
  );
};

export default CouplesDetails;
