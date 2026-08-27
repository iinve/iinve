"use client";
import { useWhatsAppMessage } from "hooks/useWhatsAppMessage";
import Style from "./Footer.module.scss";

import { Assets } from "assets/assets";
import Image from "next/image";
import Link from "next/link";

import ProIcon from "ProUI/Icons/icons";
import useWindowDimensions from "utils/useWindowDimensions";
import Button from "ProUI/Button/Button";
import LeadGenerationForm from "Components/LeadGenerationForm/LeadGenerationForm";
import { useAtom } from "jotai";
import { sheetVisibility } from "atoms/sheetAtom";
import { SHEETS } from "utils/sheetUtils";

const Footer = ({ data }) => {
  const { handleSendWhatsAppMessage } = useWhatsAppMessage();
  const { isMobile } = useWindowDimensions();

  const [sheetsVisibility, setSheetsVisibility] = useAtom(sheetVisibility);

  const handleCloseDemoSheet = () => {
    setSheetsVisibility((prev) => ({
      ...prev,
      [SHEETS.LEAD_FORM]: false,
    }));
  };
  return (
    <>
      {/* <div className={Style.thanks}>
        <h3>Thank You</h3>
      </div> */}
      <footer
        className={Style.footer}
        style={{ "--theme": data?.highlight_color, fontFamily: "Afacad" }}
      >
        <div className="flex items-center justify-center mb-8">
          <Link href={"/"}>
            <Image
              src={Assets?.Created_by}
              alt="Logo"
              priority
              width={isMobile ? 130 : 150}
            />
          </Link>
        </div>
        <div className="flex gap-4 items-center justify-center mt-4 mb-4">
          {/* <li className="cursor-pointer bg-white h-[40px] w-[40px] rounded-full flex justify-center items-center">
          
        </li> */}
          <Button type="secondary" className="w-12 h-12 !p-0">
            <Link
              href="https://iinve.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* <ProIcon name="BsStars" size={22} color="#000" /> */}
              <Image
                src={Assets?.Logo?.icon_outline_lg}
                alt="Logo"
                height={20}
                width={22}
                className="invert"
              />
            </Link>
          </Button>
          <Button type="secondary" className="w-12 h-12 !p-0">
            <Link
              href="https://www.instagram.com/iinve.co"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ProIcon name="FaInstagram" size={22} color="#fff" />
            </Link>
          </Button>
          <Button type="secondary" className="w-12 h-12 !p-0">
            <Link
              href="https://x.com/hi_iinve"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ProIcon name="RiTwitterXFill" size={22} color="#fff" />
            </Link>
          </Button>
        </div>
        <p className=" w-[60%] md:w-full mx-auto text-base text-white mb-4">
          Are you loved? Let’s Create one for your event
        </p>
        <Button
          onClick={() =>
            setSheetsVisibility((prev) => ({
              ...prev,
              [SHEETS.LEAD_FORM]: true,
            }))
          }
        >
          Create Yours
        </Button>
        <LeadGenerationForm
          isOpen={sheetsVisibility?.[SHEETS.LEAD_FORM] || false}
          handleClose={handleCloseDemoSheet}
        />
      </footer>
    </>
  );
};

export default Footer;
