"use client";
import ProIcon from "@/ProUI/Icons/icons";
import Image from "next/image";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Importing React Icons
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import "swiper/css"; // Global import
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Keyboard, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const ImageMasonry = ({ data }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const selectedIndex = selectedImage ? data?.findIndex((image) => image?.url === selectedImage) : 0;
  // if (typeof window !== "undefined") return;
  const handleSelectImage = (image) => {
    setSelectedImage(image?.url);
      if (typeof window !== "undefined") { 
        document.body.classList.add("overflow-hidden");
      }
  };
  
  const handleCloseSwiper = () => {
    setSelectedImage(null);
      if (typeof window !== "undefined") { 
        document.body.classList.remove("overflow-hidden");
        }
  };

  const downloadImage = (imageUrl, fileName = 'viiew_download_image') => {
    if (typeof window === 'undefined' || typeof document === 'undefined') {
      console.error("downloadImage can only be used in the browser.");
      return;
    }
  
    if (imageUrl.startsWith('http') || imageUrl.startsWith('https')) {
      fetch(imageUrl)
        .then(response => response.blob())
        .then(blob => {
          const url = window.URL.createObjectURL(blob);
          const link = document.createElement("a"); // Create anchor element
          link.href = url;
          link.download = fileName;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          window.URL.revokeObjectURL(url);
        })
        .catch(err => console.error("Error downloading image:", err));
    } else {
      const link = document.createElement("a"); // Create anchor element
      link.href = imageUrl;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };  

  return (
    <div className="md:container md:mx-auto px-4">
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 2, 750: 2, 900: 3 }}>
        <Masonry>
          {data?.map((image, index) => (
            <div key={index} className="m-2 cursor-pointer" onClick={() => handleSelectImage(image)}>
              <Image src={image?.url} width={200} height={300} alt={`Image ${index + 1}`} className="w-full rounded-2xl block" />
            </div>
          ))} 
        </Masonry>
      </ResponsiveMasonry>

      {/* Swiper Slider (Lightbox) */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-[999] overflow-y-hidden">
          <div className="absolute top-4 right-4 flex justify-center items-center">
            <div className="flex items-center justify-center p-2 rounded-full cursor-pointer border border-[#fff] w-[40px] h-[40px] z-50 mr-4 hover:opacity-50 transition-all" onClick={() => downloadImage(selectedImage)}>
              <ProIcon name="LuDownload" size={20} color="#fff" />
            </div>
            <div className="flex items-center justify-center p-2 rounded-full cursor-pointer border border-[#fff] w-[40px] h-[40px] z-50 hover:opacity-50 transition-all" onClick={() => handleCloseSwiper()}>
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
            onSlideChange={(swiper) => console.log('Slide index:', swiper.realIndex)}
            className="w-full h-full backdrop-blur-xl bg-black/30"
          >
            {data?.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="flex items-center justify-center h-full">
                  <Image
                    src={image?.url}
                    width={800}
                    height={400}
                    alt={`Selected Image ${index + 1}`}
                    className="object-contain h-[650px] p-4"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <div className="swiper-button-prev absolute left-4 top-1/2 transform -translate-y-1/2 z-50">
            <FaChevronLeft size={30} color="#fff" />
          </div>
          <div className="swiper-button-next absolute right-4 top-1/2 transform -translate-y-1/2 z-50">
            <FaChevronRight size={30} color="#fff" />
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageMasonry;
