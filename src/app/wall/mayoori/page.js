"use client";

import Banner from "Components/DigitalWall/Galaxy/Banner/Banner";
import Offer from "Components/DigitalWall/Galaxy/Offer/Offer";
import OfferContact from "Components/DigitalWall/Galaxy/OfferContact/OfferContact";
import Slider from "Components/DigitalWall/Galaxy/Slider/Slider";
import Spotlight from "Components/DigitalWall/Galaxy/Spotlight/Spotlight";
import ProductSlider from "Components/DigitalWall/ProductSlider/ProductSlider";
import WallLayout from "Components/DigitalWall/WallLayout/WallLayout";
import ImageMasonry from "Components/ImageMasonry/ImageMasonry";
import LanguageSwitcher from "Components/LanguageSwitcher/LanguageSwitcher";
import { getMayooriData } from "DB/DigitaWall/mayoori_data";
import { useTranslation } from "react-i18next";

const Page = () => {
  const { t } = useTranslation();
  const Imagedata = [
    {
      id: 1,
      url: "https://i.pinimg.com/736x/07/02/14/0702143151b3d399754caaf3e515f641.jpg",
      alt: "Elegant Necklace",
    },
    {
      id: 2,
      url: "https://i.pinimg.com/736x/11/49/c0/1149c0092d07b9208ac502e64218c25c.jpg",
      alt: "Gold Ring",
    },
    {
      id: 3,
      url: "https://i.pinimg.com/736x/f4/45/4b/f4454b925878c1fdaa82d76465e73e70.jpg",
      alt: "Diamond Earrings",
    },
    {
      id: 4,
      url: "https://i.pinimg.com/736x/98/ff/22/98ff22563cbaebc61f3b49aa1ea3c02a.jpg",
      alt: "Luxury Bracelet",
    },
    {
      id: 5,
      url: "https://i.pinimg.com/736x/30/64/d3/3064d3a12a663936255ba042acb31478.jpg",
      alt: "Vintage Pendant",
    },
    {
      id: 6,
      url: "https://i.pinimg.com/736x/7d/1a/89/7d1a89ef7c3ed249dc1356b9e50cde6a.jpg",
      alt: "Gemstone Bangle",
    },
  ];
  const data = getMayooriData(t);
  return (
    <WallLayout background="#922626">
      <Banner data={data} />
      <Offer data={data} />
      <ProductSlider data={data}/>
      <Spotlight data={data} />
      <Slider data={data} />
      <OfferContact data={data} />
      <h2 className="text-center text-2xl mb-4">Our Showcase</h2>
      <ImageMasonry data={Imagedata} />
      <LanguageSwitcher />
    </WallLayout>
  );
};

export default Page;
