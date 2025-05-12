import DailyPrice from 'Components/DailyPrice/DailyPrice'
import VideoSpotlight from 'Components/DigitalWall/Galaxy/VideoSpotlight/VideoSpotlight'
import Slider from 'Components/DigitalWall/Galaxy/Slider/Slider'
import WallBanner from 'Components/DigitalWall/Galaxy/WallBanner/WallBanner'
import ProductSlider from 'Components/DigitalWall/ProductSlider/ProductSlider'
import WallLayout from 'Components/DigitalWall/WallLayout/WallLayout'
import HorizonImageSliderWithPreview from 'Components/HorizonImageSliderWithPreview/HorizonImageSliderWithPreview'

const HeroWall = ({ data }) => {
  return (
    <WallLayout background={data?.theme?.theme_color} data={data}>
      <VideoSpotlight data={data} />
      <DailyPrice price={data.daily_prices} color={data?.theme} />
      {/* <Offer data={data} /> */}
      <ProductSlider data={data} color={data?.theme}/>
      <WallBanner data={data} color={data?.theme}/>
      <div className='mt-20'></div>
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
    </WallLayout>
  )
}

export default HeroWall