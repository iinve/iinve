import { Assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import Style from "./DashboardSidebar.module.scss";
import { FaAngleLeft } from "react-icons/fa6";
import { MdOutlineDashboard } from "react-icons/md";

const DashboardSidebar = ({ handleSidebar, isSidebar }) => {
  return (
    <div
      className={`${isSidebar ? Style.sidebar_Collapse : ""} ${Style.sidebar}`}
    >
      <div
        className={`${isSidebar ? Style.icon_Collapse : ""} ${Style.icon}`}
        onClick={handleSidebar}
      >
        <FaAngleLeft />
      </div>

      {!isSidebar ? (
        <div className={Style.logo}>
          <Image src={Assets?.icon} alt="Logo" />
        </div>
      ) : (
        <div className={`${isSidebar ? Style.logo_icon : ""} ${Style.logo}`}>
          <Image src={Assets?.icon} alt="Logo" />
        </div>
      )}
      <div className={Style.menu}>
        <ul>
          <li>
            {!isSidebar ? (
              <>
                <MdOutlineDashboard /> <span>Dashboard</span>
              </>
            ) : (
              <MdOutlineDashboard />
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardSidebar;
