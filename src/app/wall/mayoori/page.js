"use client";

import DailyPrice from "Components/DailyPrice/DailyPrice";
import Banner from "Components/DigitalWall/Galaxy/Banner/Banner";
import Offer from "Components/DigitalWall/Galaxy/Offer/Offer";
import OfferContact from "Components/DigitalWall/Galaxy/OfferContact/OfferContact";
import Slider from "Components/DigitalWall/Galaxy/Slider/Slider";
import Spotlight from "Components/DigitalWall/Galaxy/Spotlight/Spotlight";
import ProductSlider from "Components/DigitalWall/ProductSlider/ProductSlider";
import WallLayout from "Components/DigitalWall/WallLayout/WallLayout";
import HorizonImageSliderWithPreview from "Components/HorizonImageSliderWithPreview/HorizonImageSliderWithPreview";
import LanguageSwitcher from "Components/LanguageSwitcher/LanguageSwitcher";
import { getMayooriData } from "DB/DigitaWall/mayoori_data";
import { useTranslation } from "react-i18next";


const Page = () => {
  const { t } = useTranslation();
  const Imagedata = [
    {
      id: 1,
      url: "/assets/images/digital-wall/mayoori/wall-01.jpg",
      alt: "Elegant Necklace",
    },
    {
      id: 2,
      url: "/assets/images/digital-wall/mayoori/wall-02.jpg",
      alt: "Elegant Necklace",
    },
    {
      id: 3,
      url: "/assets/images/digital-wall/mayoori/wall-03.jpg",
      alt: "Elegant Necklace",
    },
    {
      id: 4,
      url: "/assets/images/digital-wall/mayoori/wall-04.jpg",
      alt: "Elegant Necklace",
    },
    {
      id: 5,
      url: "/assets/images/digital-wall/mayoori/wall-05.jpg",
      alt: "Elegant Necklace",
    },
    {
      id: 6,
      url: "/assets/images/digital-wall/mayoori/wall-06.jpg",
      alt: "Elegant Necklace",
    },
    {
      id: 7,
      url: "/assets/images/digital-wall/mayoori/wall-07.jpg",
      alt: "Elegant Necklace",
    },
    {
      id: 8,
      url: "/assets/images/digital-wall/mayoori/wall-08.jpg",
      alt: "Elegant Necklace",
    },
    {
      id: 9,
      url: "/assets/images/digital-wall/mayoori/wall-09.jpg",
      alt: "Elegant Necklace",
    },

    ,

  ];
  const data = getMayooriData(t);
  const dailyPrice = [
    {
      label: "1 Gram",
      price: "9,009",
    },
    {
      label: "8 Gram",
      price: "72,040",
    },
  ];
  return (
    <WallLayout background="#922626">
      <Banner data={data} />
      <DailyPrice price={dailyPrice} />
      <Offer data={data} />
      <ProductSlider data={data} />
      <Spotlight data={data} />
      <Slider data={data} />
      <OfferContact data={data} />
      <h2 className="text-center text-2xl mb-4">Our Showcase</h2>
      {/* <ImageMasonry data={Imagedata} /> */}
      <HorizonImageSliderWithPreview
        images={Imagedata}
        spaceBetween={10}
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        speed={8000}
        slidesPerView={1.5}
      />
      <LanguageSwitcher />
    </WallLayout>
  );
};

export default Page;
