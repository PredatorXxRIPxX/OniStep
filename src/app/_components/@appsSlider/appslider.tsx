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
    speed: 10000,
    slidesToShow: imageList.length,
    slidesToScroll: imageList.length,
    autoplay: true,
    autoplaySpeed:0,
    cssEase: 'linear'
  };

  return (
    <div className="w-full flex-col items-center justify-center mt-10  border-2 border-solid border-red-950">
      <center>

      <Slider {...settings} className="mb-10 flex items-center w-3/4 ">
        {
          imageList.map((url:string)=>{
            return (
              <div className="w-[100px] h-[100px] flex items-center justify-center border-2 border-green-800 border-solid">
                <Image src={url} alt={"image"} width={50} height={50} layout="responsive"/>
              </div>
              )
            }
          )
        }
      </Slider>
      </center>
      <p className="font-bold text-white text-4xl text-center">
        More than <span className=" text-3xl text-[#E97B4D] font-bold">20+</span> supported Software
      </p>
    </div>
  );
};

export default AppSlider;
