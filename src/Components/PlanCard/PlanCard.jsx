"use client";

import ActionButton from "../ActionButton/ActionButton";
import Icon from "../Icons/icons";
import Style from "./PlanCard.module.scss";

const PlanCard = ({ key, data }) => {
  const { name, offer, price, discription, features } = data;

  const className = `${Style.price_card} ${
    data.name === "Pro"
      ? Style.pro
      : data.name === "Premium"
      ? Style.premium
      : ""
  }`;
  return (
    <div key={key} className={className}>
      {/* offer chip */}
      {offer && <span className={Style.discount}>{offer}</span>}
      <div className={Style.icon_price}>
        <div className={Style.icon_container}>
          <Icon
            name={
              data?.name === "Free"
                ? "star"
                : data?.name === "Pro"
                ? "ai_star"
                : "diamond"
            }
            size={"4"}
            width={"24px"}
            fill={"#1E254E"}
          />
        </div>
        <span className={Style.price}>
          ₹{price}/<small>M</small>
        </span>
      </div>
      <h2 className={Style.plan_name}>{name}</h2>
      <span className={Style.discription}>{discription}</span>
      <ActionButton
        variant={"bordered"}
        size="md"
        className="bg-primary border border-primary w-full !px-10 !py-4"
      >
        Make yours{" "}
        <Icon
          name={"arrow"}
          size={"3"}
          fill={"#fff"}
          width={"20px"}
          height={"20px"}
        />
      </ActionButton>
      <ul className={Style.list}>
        {features.map((feature,idx) => (
          <li className={Style.items} key={`feature-${idx}`}>
            <div className={Style.tick_container}>
              <Icon
                name={"tick"}
                size="3"
                fill={name === "Premium" ? "#D1AF02" : "#485DDC"}
                width={"18px"}
                height={"20px"}
              />
            </div>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlanCard;
