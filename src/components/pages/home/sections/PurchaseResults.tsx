"use client";
// import Swiper core and required modules
import { Navigation } from "swiper/modules";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import data from "@/content/home/PurchaseResults.json";
import Image from "next/image";

interface IPurchaseResultsProps {}

const PurchaseResults = ({}: IPurchaseResultsProps) => {
  return (
    <section className="py-[50px] pl-[20px] bg-[url(/images/home-page/dot-bg-results.svg)] bg-auto font-noto relative">
      <h2 className="mb-[40px] text-[30px] leading-[45px] text-[#D51A16] text-center font-black">
        買取実績
      </h2>
      {/* sliders buttons */}
      <div className="custom-prev absolute top-[65%] translate-y-[-65%] left-1 z-10 w-[40px] h-[40px] gradient-navigation rounded-full border-0 text-white flex justify-center items-center cursor-pointer">
        <Image
          src="/images/icons/arrow-navigation.svg"
          alt="right-arrow"
          width={24}
          height={12}
          className="rotate-180"
        />
      </div>
      <div className="custom-next absolute top-[65%] translate-y-[-65%] right-1 z-10 w-[40px] h-[40px] gradient-navigation rounded-full border-0 text-white flex justify-center items-center cursor-pointer">
        <Image
          src="/images/icons/arrow-navigation.svg"
          alt="right-arrow"
          width={24}
          height={12}
        />
      </div>
      {/* sliders */}
      <Swiper
        modules={[Navigation]}
        spaceBetween={16}
        slidesPerView={1.3}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
      >
        {data.map((slider) => (
          <SwiperSlide key={slider.id}>
            <div className="p-4 rounded border-2 bg-[#FFF7F8] border-[#B81122] flex space-x-2">
              <Image
                src={slider.image}
                alt={slider.title}
                width={150}
                height={150}
                className="w-[100px] h-[100px]"
              />
              <div className="text-[12px] leading-[18px] text-[#111111] font-bold">
                <span className="py-[3px] lg:py-1 px-2 mb-1 lg:mb-2 text-[10px] leading-[15px] text-white block w-fit bg-[#B81122]">
                  カテゴリー1
                </span>
                <p>{slider.title}</p>
                <p>{slider.model}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default PurchaseResults;
