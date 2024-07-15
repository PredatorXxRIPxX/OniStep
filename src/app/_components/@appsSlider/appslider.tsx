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
    slidesToShow: imageList.length,
    slidesToScroll: imageList.length,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows:false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="w-full flex flex-col items-center justify-center mt-10">
      <Slider {...settings} className="mb-10 flex items-center w-3/4">
        {imageList.map((url: string, index: number) => (
          <div
            key={index}
            className="relative w-[50px] h-[50px] grid items-center justify-center p-4"
          >
            <div className="ml-5 mr-5"></div>
            <div className="w-full h-full ml-2 mr-2">
              <Image
                src={url}
                alt="app"
                layout="fill"
              />          
            </div>
            <div className="ml-5 mr-5"></div>
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
