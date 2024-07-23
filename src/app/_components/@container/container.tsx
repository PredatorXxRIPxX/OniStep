"use client"
import {motion,useInView,useAnimation} from "framer-motion";
import { useEffect,useRef } from "react";
import Image from "next/image";


export default function Container({props}:{props:{header:string,description:React.ReactNode,videoUrl:string,imageRight:boolean}}){
    const currentContainer = useRef<any>(null);
    const isInView = useInView(currentContainer,{once:true});
    const mainControl = useAnimation();
    useEffect(() => {
        if(isInView){
            mainControl.start("visible");
        }    
    }, [isInView]); 
    
    const animationVarinat= {
        hidden:{
            opacity:0,
            x:-100           
        },
        hidden2:{
            opacity:0,
            x:100
        },
        visible:{
            opacity:1,
            x:0,
            transition:{
                delay:.5,
                duration:.5
            }
        }
    }

    return (
        <motion.div variants={animationVarinat} initial={props.imageRight?animationVarinat.hidden:animationVarinat.hidden2} animate={mainControl}>
            <div ref={currentContainer} className="w-full h-full grid grid-cols-1  lg:grid-rows-1 mt-6 mb-6 lg:grid-cols-5 rounded-3xl p-4 relative overflow-x-hidden border-4 border-solid border-[#ABAFDF] before:content-[''] before:absolute before:inset-0 before:backdrop-blur-xl before:from-[#6C67F2]/50 before:to-[#709E6E]/50 before:z-[-1] before:bg-gradient-to-r">

                <div className={`rounded-lg bg-gradient-to-bl ${props.imageRight&&"order-2"} from-[#170D44] to-[#EB48A2] m-2 col-span-3 border-4 border-solid border-[#ABAFDF] rounded-xl`}>
                    {/*<video className="w-full h-auto rounded-xl" autoPlay loop muted>
                            <source src={props.videoUrl} type="video/mp4" />
                        </video>*/}
                    <Image src={"/assets/bonnetaille.png"} alt="video" layout="responsive" width={16} height={9} className="rounded-xl"/>
                    
                </div>
                <div className={`flex-col h-full w-full items-center font-fjalla justify-around  ${props.imageRight&&"order-1"} text-center col-span-2`}>
                    <h1 className="text-white text-4xl mt-5 mb-5 font-FjallaOne font-medium">{props.header}</h1>
                    <center>
                        <p className="text-white font-xl font-medium font-varela tracking-wide">{props.description}</p>
                    </center>
                </div>
            </div>
        </motion.div>
    )
}
