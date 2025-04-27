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
import confetti from "canvas-confetti";
import { DigitalWallHeader } from "../DigitalWallHeader/DigitalWallHeader";


const WallLayout = ({ children, background }) => {
  const [showUI, setShowUI] = useState(true);
  const [userData, setUserData] = useState(null);
  const { t } = useTranslation();

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  useEffect(() => {
    const data = getMayooriData(t);
    setUserData(data);
    i18n.changeLanguage("ml");
    localStorage.setItem("i18nextLng", "ml");
    const handleScroll = () => {
      setShowUI(false);
      clearTimeout(window.scrollTimeout);
      window.scrollTimeout = setTimeout(() => {
        setShowUI(true);
      }, 1000);
    };
    // rebon-effect
    confetti({
      angle: randomInRange(55, 125),
      spread: randomInRange(50, 70),
      particleCount: randomInRange(50, 100),
      origin: { y: 0.6 },
    });

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(window.scrollTimeout);
    };
  }, []);


  const handleClickContact = () => {
    if (userData?.whatsApp) {
      window.open(userData.whatsApp, "_self");
    }
  };

  const handleClickPhone = () => {
    if (userData?.phone1) {
      const phoneUrl = `tel:${userData.phone1}`;
      window.open(phoneUrl, "_self");
    }
  };

  const handleLanguageSwitch = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("language", lang);
  };

  const currentFont =
    i18n.language === "ml"
      ? "'sans-serif', Times New Roman, serif"
      : "Times New Roman, serif";

  return (
    <div
      className={Style.WallLayout}
      style={{ "--backgroundColor": background, fontFamily: currentFont }}
    >
     <DigitalWallHeader />

      {children}

      <div className={`${Style.footer} ${!showUI ? Style.hidden : ""}`}>
        <Image
          src={Assets.mayoori_logo}
          alt="mayoori_logo"
          height={100}
          width={150}
        />
        <div className="flex justify-between items-center gap-2">
          <button onClick={handleClickContact}>
            <ProIcon name="FaWhatsapp" color="#fff" size={20} />
          </button>
          <button className="!bg-blue-800" onClick={handleClickPhone}>
            <ProIcon name="FaPhoneAlt" color="#fff" size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default WallLayout;
