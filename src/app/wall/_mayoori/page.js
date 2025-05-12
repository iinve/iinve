"use client";

import DailyPrice from "Components/DailyPrice/DailyPrice";
import Offer from "Components/DigitalWall/Galaxy/Offer/Offer";
import OfferContact from "Components/DigitalWall/Galaxy/OfferContact/OfferContact";
import Slider from "Components/DigitalWall/Galaxy/Slider/Slider";
import Banner from "Components/DigitalWall/Galaxy/VideoSpotlight/VideoSpotlight";
import Spotlight from "Components/DigitalWall/Galaxy/WallBanner/WallBanner";
import ProductSlider from "Components/DigitalWall/ProductSlider/ProductSlider";
import WallLayout from "Components/DigitalWall/WallLayout/WallLayout";
import HorizonImageSliderWithPreview from "Components/HorizonImageSliderWithPreview/HorizonImageSliderWithPreview";
import LanguageSwitcher from "Components/LanguageSwitcher/LanguageSwitcher";
import { getMayooriData } from "DB/DigitaWall/mayoori_data";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";


const Page = () => {
  const { t } = useTranslation();
  const [rate, setRate] = useState({ oneGram: '', eightGram: '', oneGram18K: '' });
  const Imagedata = [
    {
      id: 1,
      url: "/assets/images/digital-wall/mayoori/wall-01.webp",
      alt: "Elegant Necklace",
    },
    {
      id: 2,
      url: "/assets/images/digital-wall/mayoori/wall-02.webp",
      alt: "Elegant Necklace",
    },
    {
      id: 3,
      url: "/assets/images/digital-wall/mayoori/wall-03.webp",
      alt: "Elegant Necklace",
    },
    {
      id: 4,
      url: "/assets/images/digital-wall/mayoori/wall-04.webp",
      alt: "Elegant Necklace",
    },
    {
      id: 5,
      url: "/assets/images/digital-wall/mayoori/wall-05.webp",
      alt: "Elegant Necklace",
    },
    {
      id: 6,
      url: "/assets/images/digital-wall/mayoori/wall-06.webp",
      alt: "Elegant Necklace",
    },
    {
      id: 7,
      url: "/assets/images/digital-wall/mayoori/wall-07.webp",
      alt: "Elegant Necklace",
    },
    {
      id: 8,
      url: "/assets/images/digital-wall/mayoori/wall-08.webp",
      alt: "Elegant Necklace",
    },
    {
      id: 9,
      url: "/assets/images/digital-wall/mayoori/wall-09.webp",
      alt: "Elegant Necklace",
    },

    ,

  ];
  const data = getMayooriData(t);
  const dailyPrice = [
    {
      label: "1 Gram",
      price: rate?.oneGram || "---",
    },
    {
      label: "8 Gram",
      price: rate?.eightGram || "---",
    },
    {
      label: "1 Gram 18K",
      price: rate?.oneGram18K || "---",
    },
  ];

  useEffect(() => {
    fetch('/api/gold-rate')
      .then((res) => res.json())
      .then((data) => setRate(data));
  }, []);

  return (
    <WallLayout background="#922626">
      <Banner data={data} />
      <DailyPrice price={dailyPrice} />
      <Offer data={data} />
      <ProductSlider data={data} />
      <Spotlight data={data} />
      <Slider data={data} />
      <OfferContact data={data} />
      <h2 className="text-center text-2xl mb-4 text-white">Our Showcase</h2>
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
        breakpoints={{
          1280: {
            slidesPerView: 3.5,
          },
          1024: {
            slidesPerView: 2.5,
          },
          768: {
            slidesPerView: 1.5,
          },
      }}
      />
      <LanguageSwitcher />
    </WallLayout>
  );
};

export default Page;
