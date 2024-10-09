"use client";
import ReactAwesomeTypewriter from "react-awesome-typewriter";
import {motion} from "framer-motion";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

function Mainpage() {
    const [isIntro, setIsIntro] = useState(true);
    const route = useRouter()
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsIntro(false);
        }, 1000);

        return () => clearTimeout(timer); 
    }, []);

    const options = [
        [{ text: "Photoshop", classNames: "text-5xl lg:text-7xl  font-medium font-FjallaOne" }],
        [{ text: "Unity", classNames: "text-5xl lg:text-7xl  font-medium font-FjallaOne" }],
        [{ text: "Blender", classNames: "text-5xl lg:text-7xl  font-medium font-FjallaOne" }],
        [{ text: "DaVinci Resolve", classNames: "text-5xl lg:text-7xl  font-medium font-FjallaOne" }],
    ];

    
    return (
        <div className="text-center mb-20 mt-18 font-FjallaOne">
            <motion.h1 className="text-5xl  lg:text-7xl lg:text-center text-white lg:font-medium">
                Let us guide your clicks,
                <br />
                <br />
                in{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#EB88F6] to-[#EB48A2] font-normal text-8xl">
                    {
                        isIntro ?
                        <p className="bg-clip-text text-transparent bg-gradient-to-r from-[#EB88F6] to-[#EB48A2] font-normal text-7xl inline">Photoshop</p>
                        :
                        <ReactAwesomeTypewriter
                            options={options}
                            backwardSpeed={80}
                            forwardSpeed={60}
                            waitTime={1000}
                            cursorColor="#EB48A2"
                            cursorHeight="2.25rem"
                            cursorWidth="1.25rem"
                        />
                    }
                </span>
            </motion.h1>
            <motion.p className="text-2xl font-medium text-white mt-10 font-varela">
                Onistep is your Software Assistant. Ask it any question.
            </motion.p>
            <center className="hidden lg:block">
                <motion.button
                    onClick={() => route.push('/onistepinstaller.exe')}
                    className="hidden lg:flex lg:items-center lg:mt-10 lg:px-6 lg:py-3 lg:font-bold lg:text-white lg:bg-opacity-20 lg:bg-white lg:rounded-lg lg:shadow-lg lg:backdrop-blur lg:hover:bg-opacity-30 lg:transition-all lg:duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    Get it now{" "}
                    <motion.svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6 ml-2"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                        />
                    </motion.svg>
                </motion.button>
            </center>
        </div>
    );
}

export default Mainpage;
