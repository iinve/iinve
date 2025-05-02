import DailyPrice from "Components/DailyPrice/DailyPrice";
import Banner from "Components/DigitalWall/Galaxy/Banner/Banner";
import Slider from "Components/DigitalWall/Galaxy/Slider/Slider";
import Spotlight from "Components/DigitalWall/Galaxy/Spotlight/Spotlight";
import ProductSlider from "Components/DigitalWall/ProductSlider/ProductSlider";
import WallLayout from "Components/DigitalWall/WallLayout/WallLayout";
import HorizonImageSliderWithPreview from "Components/HorizonImageSliderWithPreview/HorizonImageSliderWithPreview";
import PageLoader from "Components/PageLoader/PageLoader";
import PageNotFound from "Components/PageNotFound/PageNotFound";

export const getTemplateComponent = (data, templateName, isLoading = false) => {
  if (isLoading) {
    return <PageLoader />;
  }
 console.log(data, '==data')
  switch (templateName) {
    case "hero_wall":
      return <WallLayout background="#922626">
      <Banner data={data} />
      <DailyPrice price={data.daily_prices} />
      {/* <Offer data={data} /> */}
      <ProductSlider data={data} />
      <Spotlight data={data} />
      <Slider data={data} />
      {/* <OfferContact data={data} /> */}
      <h2 className="text-center text-2xl my-4 text-white">Our Showcase</h2>
      {/* <ImageMasonry data={Imagedata} /> */}
      <HorizonImageSliderWithPreview
        images={data?.new_arrivals}
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
     {/* <LanguageSwitcher /> */}
    </WallLayout>;

    default:
      return <PageNotFound />;
  }
};
