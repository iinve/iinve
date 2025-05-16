import Image from "next/image";
import { useRef } from "react";
import Style from "./InfoCard.module.scss";


const InfoCard = ({ info }) => {
  const cardRef = useRef();

  return (
    <div
      className={Style.infocard}
      ref={cardRef}
      //   style={{ width: cardRef?.current?.clientWidth + 50 }}
    >
      <div className={Style.contents}>
        <h4>{info?.content}</h4>
        <span>{info?.subheading}</span>
      </div>
      <Image src={info?.icon} alt="Icon" />
    </div>
  );
};

export default InfoCard;
