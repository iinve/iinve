"use client";
import DashboardSidebar from "@/Components/Dashboard/DashboardSidebar";
import useDashboard from "@/utils/DashboardUtils/useDashboard";
import React, { useEffect, useState } from "react";
import Style from "./Layout.module.scss";
import Image from "next/image";
import { Assets } from "@/assets/assets";

const Layout = ({ children }) => {
  const { handleSidebar, isSidebar } = useDashboard();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsClient(true);
    }
  }, []);

  return (
    <>
      {isClient && window.innerWidth > 660 && (
        <DashboardSidebar handleSidebar={handleSidebar} isSidebar={isSidebar} />
      )}

      <div className={`${isSidebar && Style.side_bar_active} ${Style.layout}`}>
        <div className={Style.gradient}>
          <Image src={Assets?.gradient} alt="Gradient" />
        </div>
        {children}
        <div className={Style.bottom_gradient}>
          <Image src={Assets?.gradient} alt="Gradient" />
        </div>
      </div>
    </>
  );
};

export default Layout;
