"use client"
import Image from "next/image"
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { imagesUrl } from "@/app/_data/data";

const AppSlider = () => {
  const imageList = imagesUrl


  const settings = {
    dots: false,
    infinite: true,
    speed: 16000,
    slidesToShow: imageList.length,
    slidesToScroll: imageList.length,
    autoplay: true,
    autoplaySpeed:0,
    cssEase: 'linear'
  };

  return (
    <div className="w-full flex-col items-center justify-center mt-10">
      <Slider {...settings} className="p-6 flex items-center w-full">
        {
          imageList.map((url:string)=>{
            return (
              <div className="w-full h-full">
                <Image src={url} alt={"image"} width={50} height={50} layout="responsive"/>
              </div>
              )
            }
          )
        }
      </Slider>
      <p className="font-bold text-white text-4xl text-center">
        More than <span className=" text-3xl text-[#E97B4D] font-bold">20+</span> supported Software
      </p>
    </div>
  );
};

export default AppSlider;
