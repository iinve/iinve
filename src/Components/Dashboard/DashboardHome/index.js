"use client";
import React, { useEffect } from "react";
import Style from "./DashboardHome.module.scss";
import useDashboard from "@/utils/DashboardUtils/useDashboard";
import InfoCard from "../InfoCard";
import { Assets } from "@/assets/assets";
import DashboardTable from "../DashboardTable";
import Image from "next/image";

const DashboardHome = () => {
  const { getGreeting, timeLeft, comments, fetchComments, isloading } =
    useDashboard();
  useEffect(() => {
    if (comments?.length === 0) {
      fetchComments();
    }
  }, []);

  const infoData = [
    {
      content: timeLeft,
      subheading: "Remaining",
      icon: Assets?.calendar,
    },
    {
      content:
        comments.length < 10
          ? `0${comments.length}`
          : comments.length.toString(),
      subheading: "Guests",
      icon: Assets?.star,
    },
  ];

  return (
    <div className={Style.DashboardHome}>
      <div className={Style.DashboardHome_container}>
        <div className={Style.icon}>
          <Image src={Assets?.icon} />
        </div>
        <div className={Style.head}>
          <h4>{getGreeting()} Anil!</h4>
        </div>

        <div className={Style.infocards}>
          {infoData?.map((info, i) => (
            <InfoCard key={i} info={info} />
          ))}
        </div>
        <DashboardTable comments={comments} isloading={isloading} />
      </div>
    </div>
  );
};

export default DashboardHome;
