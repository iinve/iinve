import React from "react";
import Style from "./Offer.module.scss";

const Offer = ({data}) => {
  const handleBookNow = () => {
    window.open(data?.whatsApp, "_self");
  }
  return (
    <div className={Style.offer}>
      <div className={Style.offer_text}>
        <h6 dangerouslySetInnerHTML={{ __html: data?.quote }}></h6>
      </div>
      <div className={Style.offer_button}>
        <button className={Style.offer_btn} onClick={handleBookNow}>Book Now</button>
      </div>
    </div>
  );
};

export default Offer;
