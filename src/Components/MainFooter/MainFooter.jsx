"use client";
import Link from "next/link";
import useWindowDimensions from "../../utils/useWindowDimensions";
import { Logo } from "../Logo/Logo";
import Style from "./MainFooter.module.scss";
import Image from "next/image";
import { Assets } from "assets/assets";
import ActionButton from "ProUI/ActionButton/ActionButton";
import ProIcon from "ProUI/Icons/icons";
import { useWhatsAppMessage } from "hooks/useWhatsAppMessage";

const MainFooter = () => {
  const { isMobile } = useWindowDimensions();
  const {handleSendWhatsAppMessage} = useWhatsAppMessage()

  const navItems = [
    {
      name: "Privacy and policy",
      link: "/privacy-policy",
    },
    {
      name: "Terms and Conditions",
      link: "/terms-conditions",
    },
  ];
  return (
    <footer className={`${Style.footer} flex justify-center flex-col items-center py-10 relative overflow-hidden`}>
      <div className="flex gap-4 items-center justify-center mt-4 mb-4 relative z-10">
          <ActionButton isIconOnly onPress={()=>handleSendWhatsAppMessage('contact')}>
              <ProIcon name="FaWhatsapp" size={22} color="#000" />
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
        <div>
        <nav className={`flex gap-10 px-10 py-6 text-base text-center relative z-10`}>
          {navItems.map((item, index) => (
            <Link
              href={item.link}
              key={index}
              className="hover:text-primary transition-all"
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <span className="w-full flex justify-center">
          &copy; iinve {new Date().getFullYear()} | All Right Reserved.
        </span>
      </div>
        <div className="logo-box -mb-[40px] opacity-25 mt-6">
          <Link href={"/"}>
            <Image src={Assets?.Logo.white} alt="Logo" priority width={isMobile ? 500 : 600} height={400} />
          </Link>
      </div>
      
    </footer>
  );
};

export default MainFooter;
