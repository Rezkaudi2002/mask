"use client";

import { TImage } from "@/types/product.type";
import Image from "next/image";
import { useState } from "react";

// Import Swiper React components and modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

interface IImagesGalleryProps {
  images: TImage[];
}

const ImagesGallery = ({ images }: IImagesGalleryProps) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  return (
    <section className="py-8">
      {/* Main Image with Caption */}
      <div className="relative flex flex-col items-center mb-8 mx-auto w-full max-w-[50%]">
        <div
          className={`custom-prev absolute top-[50%] translate-y-[-50%] left-1 lg:left-[5%] z-10 w-[40px] lg:w-[52px] h-[40px] lg:h-[52px] gradient-navigation rounded-full border-0 text-white flex justify-center items-center ${
            selectedImageIndex > 0
              ? "opacity-100 cursor-pointer"
              : "opacity-50 cursor-not-allowed"
          }`}
          onClick={() =>
            selectedImageIndex > 0 && setSelectedImageIndex((prev) => prev - 1)
          }
        >
          <Image
            src="https://mac-hadis.s3.ap-northeast-1.amazonaws.com/icons/arrow-navigation.svg"
            alt="left-arrow"
            width={24}
            height={12}
            loading="lazy"
            className="rotate-180 w-[24px] lg:w-[31px] h-[12px] lg:h-[15px]"
          />
        </div>

        <div className="border-[#B81122] border-2 rounded-lg overflow-hidden p-8 bg-[#fff7f8] shadow-md min-h-[650px] flex flex-col items-center justify-center relative">
          <Image
            src={images[selectedImageIndex].imageSrc}
            width={350}
            height={350}
            alt={`${images[selectedImageIndex].title} image product`}
            className="max-w-full h-auto self-center"
          />
          <p className="absolute bottom-3 text-center text-[#B81122] font-semibold">
            {images[selectedImageIndex].title}
          </p>
        </div>

        <div
          className={`custom-next absolute top-[50%] translate-y-[-50%] right-1 lg:right-[5%] z-10 w-[40px] lg:w-[52px] h-[40px] lg:h-[52px] gradient-navigation rounded-full border-0 text-white flex justify-center items-center ${
            selectedImageIndex < images.length - 1
              ? "opacity-100 cursor-pointer"
              : "opacity-50 cursor-not-allowed"
          }`}
          onClick={() =>
            selectedImageIndex < images.length - 1 &&
            setSelectedImageIndex((prev) => prev + 1)
          }
        >
          <Image
            src="https://mac-hadis.s3.ap-northeast-1.amazonaws.com/icons/arrow-navigation.svg"
            alt="right-arrow"
            width={24}
            height={12}
            loading="lazy"
            className="w-[24px] lg:w-[31px] h-[12px] lg:h-[15px]"
          />
        </div>
      </div>

      {/* Thumbnails Carousel */}
      <div className="w-[80%] mx-auto">
        <Swiper
          modules={[Navigation]}
          spaceBetween={8}
          slidesPerView={6}
          breakpoints={{
            320: { slidesPerView: 4, spaceBetween: 8 },
            640: { slidesPerView: 4, spaceBetween: 16 },
            768: { slidesPerView: 6, spaceBetween: 16 },
            1024: { slidesPerView: 6, spaceBetween: 32 },
          }}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          className="swiper-container"
        >
          {images.map((image, index) => (
            <SwiperSlide key={image.title}>
              <div
                className={`flex justify-center items-center cursor-pointer group overflow-hidden transition duration-200 ease-in-out ${
                  selectedImageIndex === index
                    ? "border-[#B81122] border-2 rounded-md bg-[#fff7f8]"
                    : "border-2 border-gray-200 rounded-md"
                }`}
                onClick={() => setSelectedImageIndex(index)}
              >
                <Image
                  src={image.imageSrc}
                  width={100}
                  height={100}
                  alt={`${image.title} thumbnail`}
                  className="w-[100px] h-[100px] object-contain group-hover:scale-110 transition duration-200 ease-in-out"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ImagesGallery;
