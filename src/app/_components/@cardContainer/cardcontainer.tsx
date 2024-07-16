"use client"
import React from "react";
import { levelTypes } from "@/app/_components/_types/levelTypes";
import Image from "next/image";
import Photoshop from "/public/assets/image 1.svg";
import { motion,useInView,useAnimation } from "framer-motion";
import { useEffect,useRef } from "react";

const CardContainer = ({props}:{props:{imgUrl:string,title:string,iconUrl:string,level:levelTypes}})=>{
    const currentContainer = useRef<any>(null);
    const currentContainerView = useInView(currentContainer,{once:true});
    const mainControl = useAnimation();

    useEffect(() => {
        if(currentContainerView){
            mainControl.start("visible");
        }
    }, [currentContainerView]);

    const animationVariant = {
        hidden:{
            opacity:0,
            x:-100
        },
        visible:{
            opacity:1,
            x:0,
            transition:{
                delay:0,
                duration:2,
                type:"spring",
                stiffness:260,
            }
        }
    }

    return(
        <motion.div variants={animationVariant} initial={animationVariant.hidden} animate={mainControl}>
            <div ref={currentContainer} className="rounded-xl bg-white m-4 flex-col justify-around shadow-lg shadow-black drop-shadow-lg transition-all duration-300 hover:scale-110">
                <div className={`h-full w-full p-2 mb-2 rounded-xl overflow-hidden`}>
                    <Image src={props.imgUrl} alt="image Course" className="w-full h-full rounded-2xl" layout="responsive" width={100} height={100}/>
                </div>
                <div className="h-1/4 pl-2">
                    <Image src={props.iconUrl} alt="icon Course" className="w-8 h-8" width={10} height={10}/>
                </div>
                <h1 className="text-black text-xl font-bold pl-4 mt-2 mb-2">{props.title}</h1>
                <div className="flex items-center ">
                    <p className="text-gray-400 font-semibold text-left pl-4 mt-2 mb-2 font-lg">{props.level}.courses</p>
                </div>
            </div>
        </motion.div>
    )
}

export default CardContainer;