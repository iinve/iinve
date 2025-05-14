import React from "react";
import MainWallHeader from "./MainWallHeader/MainWallHeader";
import WallSearchBar from "./WallSearchBar/WallSearchBar";
import MainWallBanner from "./MainWallBanner/MainWallBanner";
import MainWallCategories from "./MainWallCategories/MainWallCategories";
import MainTopOffers from "./MainTopOffers/MainTopOffers";
import MainShopList from "./MainShopList/MainShopList";
import MainWallFooter from "./MainWallFooter/MainWallFooter";

const DigitalWall = () => {
  return (
    <div className="!bg-[#fff]">
      <div className="!bg-[#fff] px-4 sm:px-16">
        <MainWallHeader />
        <WallSearchBar />
        <MainWallBanner />
        <MainWallCategories />
        <MainTopOffers />
        <MainShopList />
      </div>
      <MainWallFooter />
    </div>
  );
};

export default DigitalWall;
