'use client'
import { useWhatsAppMessage } from "hooks/useWhatsAppMessage";
import Style from "./Footer.module.scss";

import { Assets } from "assets/assets";
import Image from "next/image";
import Link from "next/link";
import ActionButton from "ProUI/ActionButton/ActionButton";
import ProIcon from "ProUI/Icons/icons";
import useWindowDimensions from "utils/useWindowDimensions";


const Footer = ({ data }) => {
  const { handleSendWhatsAppMessage } = useWhatsAppMessage()
  const { isMobile } = useWindowDimensions()
  return (
    <>
      {/* <div className={Style.thanks}>
        <h3>Thank You</h3>
      </div> */}
      <footer
        className={Style.footer}
        style={{ "--theme": data?.highlight_color }}
      >
        <div className='flex items-center justify-center mb-8'>
          <Link href={"/"}>
            <Image src={Assets?.Created_by} alt="Logo" priority width={isMobile ? 130 : 150} />
          </Link>
        </div>
        <div className="flex gap-4 items-center justify-center mt-4 mb-4">
          {/* <li className="cursor-pointer bg-white h-[40px] w-[40px] rounded-full flex justify-center items-center">
          
        </li> */}
          <ActionButton isIconOnly>
            <Link
              href="https://iinve.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* <ProIcon name="BsStars" size={22} color="#000" /> */}
              <Image src={Assets?.Logo?.icon_outline_lg} alt="Logo" height={20} width={20} />
            </Link>
          </ActionButton>
          <ActionButton isIconOnly>
            <Link
              href="https://www.instagram.com/hi.iinve"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ProIcon name="FaInstagram" size={22} color="#000" />
            </Link>
          </ActionButton>
          <ActionButton isIconOnly>
            <Link
              href="https://x.com/iinve_ai"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ProIcon name="RiTwitterXFill" size={22} color="#000" />
            </Link>
          </ActionButton>
        </div>
        <p className=" w-[60%] md:w-full mx-auto text-base text-white mb-4">
          Are you loved? Let’s Create one for your event
        </p>
        <ActionButton className='bg-gradient-to-tr from-[#153BA6] to-[#0D9DC6] text-white shadow-lg px-6' size="md" color="primary" onClick={() => handleSendWhatsAppMessage('invite')}>
          Create Yours
        </ActionButton>
      </footer>
    </>
  );
};

export default Footer;
