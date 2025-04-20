import React from "react";
import Style from "./Offer.module.scss";

const Offer = () => {
  return (
    <div className={Style.offer}>
      <div className={Style.offer_text}>
        <h6>Lorem ipsum dolor sit.</h6>
      </div>
      <div className={Style.offer_button}>
        <button className={Style.offer_btn}>Book Now</button>
      </div>
    </div>
  );
};

export default Offer;
