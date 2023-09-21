"use client";

import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import styles from "../../../styles/homeSwiper.module.css";

interface Slides {
  id: number;
  title: string;
  description: string;
  image: string;
  category: { id: number; createdAt: Date; name: string } | null;
  createdAt: Date;
}

type Props = {
  slides: Slides[];
};

const HomeSliders = (slides: Props) => {
  const ArrSlides = slides.slides;
  const paginateStyles: any = {
    "--swiper-pagination-color": "#FFF",
    "--swiper-pagination-bullet-inactive-color": "#FFF",
    "--swiper-pagination-bullet-inactive-opacity": "0.25",
    "--swiper-pagination-bullet-size": "10px",
    "--swiper-pagination-bullet-horizontal-gap": "6px",
    "--swiper-pagination-bottom": "70px",
    "--swiper-pagination-top": "null",
    "--swiper-pagination-left:": "100px",
  };
  const swiperRef = useRef<any | null>(null);

  useEffect(() => {
    const swiperContainer = swiperRef.current;
    if (swiperContainer) {
      const paginationElement = swiperContainer.querySelector(
        ".swiper-pagination"
      ) as HTMLDivElement;

      if (paginationElement) {
        const width = swiperContainer.offsetWidth;
        paginationElement.style.textAlign = "left";
        if (width < 768) {
          paginationElement.style.left = "30px";
        } else {
          paginationElement.style.left = "70px";
        }
      }
    }
  }, []);

  const swiperOptions: Object = {
    spaceBetween: 0,
    loop: true,
    autoplay: true,
    delay: 3000,
    slidesPerView: 1,
  };
  return (
    <div>
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        {...swiperOptions}
        className={styles.swiper}
        style={paginateStyles}
        ref={swiperRef}
      >
        {ArrSlides.map((slide, index) => (
          <SwiperSlide>
            <div
              className="absolute  top-0 z-30 h-full md:h-4.75xl w-screen bg-cover bg-no-repeat bg-center"
              style={{
                backgroundImage: 'url("/assets/images/' + slide.image + '")',
              }}
            >
              <div className="relative h-full w-screen">
                <div className="flex flex-col md:top-64 top-28 left-4 md:left-20  absolute space-y-3 md:w-4.33xl w-full">
                  <div className="py-2 px-3 flex justify-center w-28 h-auto text-white font-Roboto text-sm font-bold bg-category rounded-xl">
                    <span>{slide.category?.name}</span>
                  </div>
                  <h1 className="font-Lora text-4xl font-bold text-white">
                    {slide.title}
                  </h1>
                  <div className="flex flex-col md:flex-row items-left md:items-center  md:w-full md:space-x-2 space-y-2">
                    <span className="text-white w-[25%] lg:w-[20%] font-Lora text-sm font-normal">
                      {slide.createdAt.toISOString().split("T")[0]}
                    </span>
                    <div className="w-8 h-[1px] bg-primary"></div>
                    <p className="font-Lora text-sm w-2/3 md:w-full text-primary font-normal">
                      {slide.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeSliders;
