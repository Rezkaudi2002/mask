"use client"

import React from "react";
import { Navigation, Pagination } from "swiper/modules";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";


interface IImageListTemplate {
    content: ImageListContent
}

const ImageListTemplate: React.FC<IImageListTemplate> = ({ content }) => {


    return (
        <section id={content.title} className="bg-white rounded-xl p-8 lg:p-12 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="relative mt-10">
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={16}
                    slidesPerView={3.5}
                    loop
                    centeredSlides
                    // preloads neighbors for smoother UX
                    lazyPreloadPrevNext={2}
                    // keep your existing selectors
                    navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev" }}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        320: { slidesPerView: 1.3, spaceBetween: 8 },
                        640: { slidesPerView: 2, spaceBetween: 16 },
                        768: { slidesPerView: 3.5, spaceBetween: 16 },
                        1024: { slidesPerView: 3.5, spaceBetween: 32 },
                    }}
                    className="!pb-10"
                >
                    {content.items.map(item => (
                        <SwiperSlide key={item.id}>
                            <div className="relative h-[400px] overflow-hidden rounded-xl bg-gray-200">
                                <Image
                                    src={item.imageSrc}
                                    alt={item.alt}
                                    fill
                                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 33vw"
                                    className="object-cover"
                                    loading="lazy"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Custom nav buttons (match your selectors) */}
                <button
                    className="custom-prev absolute -left-3 md:-left-6 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/90 backdrop-blur px-2.5 py-2 shadow hover:bg-white focus:outline-none focus:ring-2 focus:ring-factory-teal"
                    aria-label="前へ"
                    type="button"
                >
                    ‹
                </button>
                <button
                    className="custom-next absolute -right-3 md:-right-6 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/90 backdrop-blur px-2.5 py-2 shadow hover:bg-white focus:outline-none focus:ring-2 focus:ring-factory-teal"
                    aria-label="次へ"
                    type="button"
                >
                    ›
                </button>
            </div>
        </section>
    );
};

export default ImageListTemplate;