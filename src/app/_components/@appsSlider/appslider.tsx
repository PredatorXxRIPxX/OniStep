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
    slidesToShow: 12,
    slidesToScroll: 1, 
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    arrows: false,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 6, // Adjust based on the number of slides visible at this breakpoint
                slidesToScroll: 1, // Scroll one slide at a time for smooth scrolling
                infinite: true,
                cssEase:"Linear",
                autoplay:true,
                dots: false,
                autoplayspeed: 0,
            }
        },
        {
            breakpoint: 600,
            settings: {
              slidesToShow: 4, 
              slidesToScroll: 1, 
              infinite: true,
              cssEase:"Linear",
              autoplay:true,
              dots: false,
              autoplayspeed: 0,

            }
        },
        {
            breakpoint: 480,
            settings: {
              slidesToShow: 4, 
              slidesToScroll: 1, 
              infinite: true,
              cssEase:"Linear",
              autoplay:true,
              dots: false,
              autoplayspeed: 0,
            }
        }
    ]
};


  return (
    <div className="w-full flex flex-col items-center justify-center mt-10">
      <Slider {...settings} className="mb-10 flex items-center w-3/4 lg:h-3/4">
        {imageList.map((url: string, index: number) => (
          <div
            key={index}
            className="relative w-[50px] h-[50px] grid items-center justify-center p-4"
          >
            <div className="ml-5 mr-5"></div>
            <div className=" h-full ml-2 mr-2 w-3/4 lg:w-full">
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
      <p className="font-bold text-white text-4xl text-center font-varela">
        More than <span className="text-3xl text-[#E97B4D] font-bold font-FjallaOne">20+</span> supported Software
      </p>
    </div>
  );
};

export default AppSlider;
