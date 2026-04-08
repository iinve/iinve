"use client";

import ProHeading from "ProUI/ProHeading/ProHeading";
// import AccordionContainer from "../../ProUI/Accordion/Accordion";
import ProIcon from "../../ProUI/Icons/icons";
import InfoChip from "../InfoChip/InfoChip";
import Style from "./FAQs.module.scss";
import useWindowDimensions from "utils/useWindowDimensions";
import { Link } from "@heroui/react";
import AccordionContainer from "Components/Accordion/Accordion";

const FAQs = () => {
  const { isMobile } = useWindowDimensions();
  return (
    <div id="faq" className={`bg-[#050505] ${Style.faq_container}`}>
      <div className="container mx-auto">
        <div className={Style.faq}>
          <div className={Style.head}>
            <InfoChip
              icon={<ProIcon name="LuBadgeHelp" size={18} color="#fff" />}
              name={"FAQs"}
              className={"chip"}
              isLeft
            />
            <ProHeading>
              All You Need to Know,{!isMobile && <br />}at a Glance!
            </ProHeading>
          </div>
          <div className={Style.accordion}>
            <AccordionContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
