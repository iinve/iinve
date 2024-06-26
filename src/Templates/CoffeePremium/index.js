"use client";

import CouplesDetails from "@/Components/CouplesDetails";
import MeshMasonrySpotlight from "@/Components/MeshMasonrySpotlight";
import Style from "./CoffeePremium.module.scss";
import { anilShakthiData } from "@/Data/Anil-Shakthi";
import { useEffect } from "react";
import Quote from "@/Components/Quotes";
import Calendar from "@/Components/Calendar";
import Map from "@/Components/Map";
import Comments from "@/Components/Comments";
import Footer from "@/Components/Footer";
import DrawerSheet from "@/Components/Drawer";
import useLenis from "@/utils/useLenis";

function CoffeePremium() {
  useLenis();
  return (
    <div className={Style.CoffeWrapper}>
      <MeshMasonrySpotlight />
      {anilShakthiData?.couples_data?.map((item, i) => (
        <CouplesDetails
          key={i}
          full_name={item?.full_name}
          bio={item?.bio}
          avatar={item?.avatar}
        />
      ))}
      <Quote />
      <Calendar />
      <MeshMasonrySpotlight isNotSpotlight={true} />
      <Map />
      <DrawerSheet />
      <Comments data={anilShakthiData?.wishes} />
      <Footer />
    </div>
  );
}

export default CoffeePremium;
