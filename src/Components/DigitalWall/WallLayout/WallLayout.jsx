"use client";
import { useEffect, useState } from "react";
import { WallLogo } from "../WallLogo/WallLogo";
import Style from "./WallLayout.module.scss";

const WallLayout = ({ children, background }) => {
  const [showUI, setShowUI] = useState(true);
  let scrollTimeout;

  useEffect(() => {
    const handleScroll = () => {
      setShowUI(false);

      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setShowUI(true);
      }, 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  return (
    <div
      className={Style.WallLayout}
      style={{ "--backgroundColor": background }}
    >
      <div className={`${Style.badge} ${!showUI ? Style.hidden : ""}`}>
        <WallLogo width={120} height={120} />
      </div>

      {children}

      <div className={`${Style.footer} ${!showUI ? Style.hidden : ""}`}>
        <h1 className="text-black">Logo of the company</h1>
        <button>Contact us</button>
      </div>
    </div>
  );
};

export default WallLayout;
