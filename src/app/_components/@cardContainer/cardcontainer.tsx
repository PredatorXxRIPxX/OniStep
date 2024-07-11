import React from "react";
import { levelTypes } from "@/app/_types/levelTypes";
import Image from "next/image";
const CardContainer = ({props}:{props:{imgUrl:string,title:string,iconUrl:string,level:levelTypes}})=>{
    return(
        <div>
            <div className="rounded-3xl bg-white m-4 flex-col justify-around shadow-lg shadow-black drop-shadow-lg">
                <div className={`h-full w-full p-6 mb-2 bg-cover bg-center bg-no-repeat`} style={{ backgroundImage: `url(${props.imgUrl})` }}>
                    
                </div>
                <div className="h-1/4 pl-2">
                    <Image src={props.iconUrl} alt="icon Course" className="w-8 h-8" width={10} height={10}/>
                </div>
                <h1 className="text-black text-xl font-bold pl-4 mt-2 mb-2">{props.title}</h1>
                <div className="flex items-center ">
                    <p className="text-gray-400 font-semibold text-left pl-4 mt-2 mb-2 font-lg">{props.level}.courses</p>
                </div>
            </div>
        </div>
    )
}

export default CardContainer;