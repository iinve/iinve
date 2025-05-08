import { Button } from '@heroui/react'
import { Assets } from 'assets/assets'
import DailyPrice from 'Components/DailyPrice/DailyPrice'
import Slider from 'Components/DigitalWall/Galaxy/Slider/Slider'
import WallBanner from 'Components/DigitalWall/Galaxy/WallBanner/WallBanner'
import ProductSlider from 'Components/DigitalWall/ProductSlider/ProductSlider'
import Footer from 'Components/Footer'
import HorizonImageSliderWithPreview from 'Components/HorizonImageSliderWithPreview/HorizonImageSliderWithPreview'
import Image from 'next/image'
import Link from 'next/link'
import ProIcon from 'ProUI/Icons/icons'
import ReactPlayer from 'react-player'
import Style from './GridMax.module.scss'
import { useEffect, useState } from 'react'


function VideoControl({toggleMute, isMuted}){
  return (
    <Button
    onPress={toggleMute} 
    isIconOnly
    color='primary'
    variant='faded'
    className='rounded-full'
    size='sm'
  >
    {isMuted ? <ProIcon name={'FaVolumeMute'}  size={20}/>: <ProIcon name={'FaVolumeUp'} size={20}/>}
  </Button>
  )
}

const GridMax = ({ data }) => {
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    setIsMuted(prev => !prev);
  };


  const handleSocialIcons = (icon) => {
    if (!data?.company_details) return;

    let phoneNumber = '';
    let message = '';

    if (icon === 'phone') {
      phoneNumber = data.company_details.phone_number || '';
    } else if (icon === 'whatsapp') {
      phoneNumber = data.company_details.whatsapp_number || '';
      message = data.company_details.whatsapp_message || ''; // <-- pull message from data
    }

    if (!phoneNumber) return;

    // Ensure phone number has country code
    if (!phoneNumber.startsWith('+')) {
      phoneNumber = '+91' + phoneNumber; // Change country code if needed
    }

    if (icon === 'whatsapp') {
      const cleanNumber = phoneNumber.replace(/\D/g, '');

      // Encode the message for URL
      const encodedMessage = encodeURIComponent(message);

      // Build WhatsApp link
      const whatsappLink = `https://wa.me/${cleanNumber}${message ? `?text=${encodedMessage}` : ''}`;

      window.open(whatsappLink, '_blank');
    } else {
      window.open(`tel:${phoneNumber}`, '_self');
    }
  };
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className='min-h-screen bg-[#FFE4B3] py-6'>
      <div className='container mx-auto px-6'>
        <div className="text-center flex justify-center items-center mb-10">
          <div>
            <Image src={data.company_details.logo} alt="grid-max" width={80} height={80} className='rounded' />
          </div>
          {/* <h2 className="text-2xl font-bold ml-6 text-black">{data.company_details.name}</h2> */}
        </div>
        <div className="relative rounded-3xl md:h-[400px] h-[200px] overflow-hidden">
          {/* Background image */}
          <div className='absolute right-2 top-2 z-[999]'>
            <VideoControl toggleMute={toggleMute} isMuted={isMuted}/>
          </div>
          <div className={`absolute inset-0 bg-cover bg-center opacity-70 w-full`} />
          <div className={`h-full absolute inset-0 opacity-60 w-full`}>
            {/* <Image src={data?.spotlight?.imagePreview} alt='Spotlight' className='object-cover' fill /> */}
            {/* <video src={'https://res.cloudinary.com/viiewme/video/upload/v1746692702/WhatsApp_Video_2025-05-08_at_13.43.27_h14y4y.mp4'} autoPlay controls={false} loop/> */}
             <ReactPlayer
              url="https://res.cloudinary.com/viiewme/video/upload/v1746692702/WhatsApp_Video_2025-05-08_at_13.43.27_h14y4y.mp4"
              playing
              autoplay
              muted={isMuted}
              loop
              playsinline
              controls={false}
              width="100%"
              height="100%"
              className={Style.video}
            />
          </div>
          {/* Content */}
          <div className="relative z-10 p-4 h-full flex items-center justify-center bg-gradient-to-b  from-transparent to-[#000]/70">
            <h2 className="text-xl md:text-3xl text-[#e39912] font-bold absolute bottom-4 w-3/4 mx-auto text-center z-10">{data?.spotlight?.text}</h2>
          </div>
        </div>
      </div>
      <DailyPrice price={data.daily_prices} style='table' isLightTheme />
      <ProductSlider data={data} color='#FFD700' isLightTheme />
      <div className='mb-8'>
        <WallBanner data={data} color='#FFE4B3' isLightTheme />
      </div>
      <div className='flex flex-col gap-2 justify-center w-fit px-6 mx-auto fixed bottom-4 right-2 z-10'>
        <Button color='primary' isIconOnly className='w-fit ml-2 text-black' onPress={() => handleSocialIcons('phone')}><ProIcon name={'FaPhone'} color='#fff' size={20} /></Button>
        <Button color='success' isIconOnly className='w-fit ml-2 text-black' onPress={() => handleSocialIcons('whatsapp')}><ProIcon name={'FaWhatsapp'} color='#fff' size={20} /></Button>
      </div>
      <Slider data={data} type='card' isLightTheme />
      <div className='mt-12'>
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
      </div>
      <div className='flex items-center justify-center mt-10'>
        <Link href={"/"}>
          <Image src={Assets?.Created_by} alt="Logo" width={100} height={100} />
        </Link>
      </div>
    </div>
  )
}

export default GridMax
