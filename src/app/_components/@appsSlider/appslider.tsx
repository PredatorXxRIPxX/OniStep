"use client"
import Image from "next/image"
import Buffer from "../../../../public/assets/buffer_logo_icon_170445.webp"
import Excel from "../../../../public/assets/Excel-logo.png";
import Word from "../../../../public/assets/Microsoft-Word-Logo.png";
import Godot from "../../../../public/assets/Godot_icon.svg"
import Sketchup from "../../../../public/assets/SketchUp-logo.png"
import Vscode from "../../../../public/assets/Visual-Studio-Logo-2019.png"
import VS from "../../../../public/assets/vsc.png"
import Blender from "../../../../public/assets/Logo_Blender.svg.png"
import AndroidStudio  from "../../../../public/assets/image 6.svg"
import Gimp from "../../../../public/assets/image 9.svg"
import Photoshop from "../../../../public/assets/image 1.svg"
import Illustrator from "../../../../public/assets/image 3.svg"
import AfterEfect from "../../../../public/assets/image 7.svg"
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const AppSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 16000,
    slidesToShow: 13,
    slidesToScroll: 13,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear'
  };

  return (
    <div className="w-full flex-col items-center justify-center mt-10">
      <Slider {...settings} className="p-6 flex items-center w-full">
        <Image src={Buffer} alt="img" width={100} height={100} />
        <Image src={Excel} alt="img" width={100} height={100} />
        <Image src={Word} alt="img" width={100} height={100} />
        <Image src={Godot} alt="img" width={10} height={10} />
        <Image src={Sketchup} alt="img" width={100} height={100} />
        <Image src={Vscode} alt="img" width={100} height={100} />
        <Image src={VS} alt="img" width={100} height={100} />
        <Image src={Blender} alt="img" width={100} height={100} />
        <Image src={AndroidStudio} alt="img" width={100} height={100} />
        <Image src={Gimp} alt="img" width={100} height={100} />
        <Image src={Photoshop} alt="img" width={100} height={100} />
        <Image src={Illustrator} alt="img" width={100} height={100} />
        <Image src={AfterEfect} alt="img" width={100} height={100} />
      </Slider>
      <p className="font-bold text-white text-4xl text-center">
        More than <span className=" text-3xl text-[#E97B4D] font-bold">20+</span> supported Software
      </p>
    </div>
  );
};

export default AppSlider;
