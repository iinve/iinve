

import ImageWithLoader from "Components/ImageWithLoader/ImageWithLoader";
import ProIcon from "ProUI/Icons/icons";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Keyboard, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const HorizonImageSliderWithPreview = ({ images, ...props }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleImageClick = (img, idx) => {
    setSelectedImage(img);
    setSelectedIndex(idx);
  };

  const handleCloseSwiper = () => {
    setSelectedImage(null);
  };

  const downloadImage = (url) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = "image.jpg";
    link.click();
  };

  return (
    <>
      <Swiper
        modules={[Autoplay]}
        {...props}
      >
        {images?.map((image, idx) => (
          <SwiperSlide key={idx}>
            <div
              onClick={() => handleImageClick(image, idx)}
              style={{
                aspectRatio: "4 / 3",
                width: "100%",
                position: "relative",
                cursor: "pointer",
              }}
            >
             <ImageWithLoader src={image.url} alt={image.alt} objectFit="cover" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Fullscreen Preview Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-[999] overflow-y-hidden">
          <div className="absolute top-4 right-4 flex justify-center items-center">
            <div
              className="flex items-center justify-center p-2 rounded-full cursor-pointer border border-[#fff] w-[40px] h-[40px] z-50 mr-4 hover:opacity-50 transition-all"
              onClick={() => downloadImage(selectedImage.url)}
            >
              <ProIcon name="LuDownload" size={20} color="#fff" />
            </div>
            <div
              className="flex items-center justify-center p-2 rounded-full cursor-pointer border border-[#fff] w-[40px] h-[40px] z-50 hover:opacity-50 transition-all"
              onClick={handleCloseSwiper}
            >
              <ProIcon name="IoMdClose" size={20} color="#fff" />
            </div>
          </div>

          <Swiper
            spaceBetween={10}
            navigation={{
              prevEl: ".swiper-button-prev",
              nextEl: ".swiper-button-next",
            }}
            initialSlide={selectedIndex}
            modules={[Navigation, Keyboard]}
            keyboard={{
              enabled: true,
              onlyInViewport: true,
            }}
            className="w-full h-full backdrop-blur-xl bg-black/30"
          >
            {images?.map((image, index) => (
              <SwiperSlide key={index}>
                <ImageWithLoader src={image.url} alt={image.alt} objectFit="contain" />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="swiper-button-prev absolute left-4 top-1/2 transform -translate-y-1/2 z-50 !w-[30px] !h-[60px] flex items-center justify-center">
            <FaChevronLeft size={30} color="#fff" />
          </div>
          <div className="swiper-button-next absolute right-4 top-1/2 transform -translate-y-1/2 z-50 !w-[30px] !h-[60px] flex items-center justify-center">
            <FaChevronRight size={30} color="#fff" />
          </div>
        </div>
      )}
    </>
  );
};

export default HorizonImageSliderWithPreview;
