"use client"
import ReactAwesomeTypewriter from "react-awesome-typewriter";
import {motion} from "framer-motion";
import { Hidden } from "@mui/material";

function Mainpage() {
    const options = [

        [{ text: "Photoshop", classNames: "text-6xl font-bold font-FjallaOne" },],
        [{ text: "Unity" , classNames: "text-6xl font-bold font-FjallaOne" },],
        [{ text: "Blender" , classNames: "text-6xl font-bold font-FjallaOne" },],
        [{ text: "Premiere Pro" , classNames: "text-6xl font-bold font-FjallaOne" },],
    ];

    const introVariants = {
        hidden: {
            opacity: 0,
            y: -100,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.5,
                duration: 1,
                type: "spring",
                stiffness: 120,
            },
        },
    }

    const minidescVariants = {
        hidden:{
            opacity: 0,
            x: -100,
        },
        visible:{
            opacity: 1,
            x:0,
            transition:{
                delay: 1.5,
                duration: 1,
                type: "spring",
                stiffness: 120,
            }
        }
    }

    return (
        <div className="text-center mb-20 mt-20">
            <motion.h1 variants={introVariants} initial={introVariants.hidden} animate={introVariants.visible} className="font-bold font-FjallaOne text-6xl text-center text-white">
                Let us guide your clicks,<br /><br />
                in <span className="bg-clip-text text-transparent bg-gradient-to-r font-FjallaOne from-[#EB88F6] to-[#EB48A2]">
                    <ReactAwesomeTypewriter
                        options={options}
                        backwardSpeed={80}
                        forwardSpeed={60}
                        waitTime={2500}
                        cursorColor="#EB48A2"
                        cursorHeight="2.25rem"
                        cursorWidth="1.25rem"
                    />
                </span>
            </motion.h1>
            <motion.p variants={minidescVariants} initial={minidescVariants.hidden} animate={minidescVariants.visible}  className="text-2xl font-medium text-white mt-10 font-varela">
                Onistep is your Software Assistant. Ask it any question 
            </motion.p>
            <center>
                <motion.button initial={{opacity:0,scale:0}} animate={{opacity:1,scale:1,transition:{delay:2,duration:.25,type:"tween"}}}  className="flex items-center mt-10 px-6 py-3 font-bold text-white bg-opacity-20 bg-white rounded-lg shadow-lg backdrop-blur hover:bg-opacity-30 transition-all duration-300">Get it now <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 ml-2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" /></svg></motion.button>
            </center>
        </div>
    );
}

export default Mainpage;
