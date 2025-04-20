"use client";
import { useEffect, useState } from "react";
import { WallLogo } from "../WallLogo/WallLogo";
import Style from "./WallLayout.module.scss";
import Image from "next/image";
import { Assets } from "assets/assets";
import i18n from "i18n";
import ProIcon from "ProUI/Icons/icons";
import { getMayooriData } from "DB/DigitaWall/mayoori_data";
import { useTranslation } from "react-i18next";

const WallLayout = ({ children, background, data }) => {
  const [showUI, setShowUI] = useState(true);
  const { t } = useTranslation();
  const userData = getMayooriData(t);
  let scrollTimeout;
  useEffect(() => {
    const handleScroll = () => {
      setShowUI(false);

      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setShowUI(true);
      }, 1000);
    };
    if (userData?.lang) {
      i18n.changeLanguage(userData.lang);
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);



  const handleClickContact = () => {
    window.open(data?.whatsApp, "_self");
  }

  const currentFont =
    i18n.language === "ml" ? "'sans-serif', Times New Roman, serif" : "Times New Roman, serif";


  return (
    <div
      className={Style.WallLayout}
      style={{ "--backgroundColor": background, fontFamily: currentFont, }}
    >
      <div className={`${Style.badge}`}>
        <WallLogo width={120} height={120} />
      </div>

      {children}

      <div className={`${Style.footer} ${!showUI ? Style.hidden : ""}`}>
        <Image
          src={Assets.mayoori_logo}
          alt="mayoori_logo"
          height={100}
          width={150}
        />
       <div className="flex justify-between items-center gap-2">
       <button className="w-full" onClick={handleClickContact}><ProIcon name={'FaWhatsapp'} color="#fff" size={20} /></button>
       <button className="!bg-blue-800" onClick={handleClickContact}><ProIcon name={'FaPhoneAlt'} color="#fff" size={20} /></button>
       </div>
      </div>
    </div>
  );
};

export default WallLayout;
