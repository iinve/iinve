"use client";
import { useOutEffect } from "@/hooks/useOutEffect";
import { motion } from "framer-motion";
import { useRef } from "react";
import Icon from "../../ProUI/Icons/icons";
import PlanCard from "../../ProUI/PlanCard/PlanCard";
import InfoChip from "../InfoChip/InfoChip";
import Style from "./Pricing.module.scss";
import { Carousel } from "./Carousel";

const Pricing = () => {
  const card = planData?.map((plan, i) => <PlanCard key={i} data={plan} />);
  const sliderRef = useRef(null);
  const { blur, opacity, scale } = useOutEffect(sliderRef);
  return (
    <div className={Style.pricing_container}>
      <motion.div
        className={Style.head}
        style={{ opacity, scale, filter: `blur(${blur}px)` }}
      >
        <InfoChip
          icon={<Icon name={"crown"} size={"2"} />}
          name={"Our Pricing"}
        />
        <h2 className="heading">
          Empower Your Links with <br /> the Right Plan
        </h2>
        <span className={Style.hint}>
          Unlock your potential—choose your digital journey!
        </span>
      </motion.div>
      <div
        ref={sliderRef}
        className="flex justify-center gap-16 mt-20 relative z-50"
      >
        {/* {planData?.map((plan, i) => (
          <PlanCard key={i} data={plan} />
        ))} */}

        <Carousel items={card} />
      </div>
    </div>
  );
};

export default Pricing;
