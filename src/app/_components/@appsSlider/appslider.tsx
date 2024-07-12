"use client";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { imagesUrl } from "@/app/_data/data";

const AppSlider = () => {
  const imageList = imagesUrl;

  const settings = {
    dots: false,
    infinite: true,
    speed: 10000,
    slidesToShow: imageList.length,
    slidesToScroll: imageList.length,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    arrows: false,
  };

  return (
    <div className="w-full flex flex-col items-center justify-center mt-10 ">
      <Slider {...settings} className="mb-10 flex items-center w-3/4">
        {imageList.map((url: string, index: number) => (
          <div
            key={index}
            className="relative  w-[50px] h-[50px] grid items-center "
          >
            <Image src={url} alt={`image-${index}`} layout="fill" objectFit="cover" />
          </div>
        ))}
      </Slider>
      <p className="font-bold text-white text-4xl text-center">
        More than <span className="text-3xl text-[#E97B4D] font-bold">20+</span> supported Software
      </p>
    </div>
  );
};

export default AppSlider;
