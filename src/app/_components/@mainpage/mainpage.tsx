"use client"
import ReactAwesomeTypewriter from "react-awesome-typewriter";


function Mainpage() {
    const options = [

        [{ text: "Photoshop", classNames: "text-5xl font-bold" },],
        [{ text: "Illustrator" , classNames: "text-5xl font-bold" },],
        [{ text: "After Effects" , classNames: "text-5xl font-bold" },],
        [{ text: "Premiere Pro" , classNames: "text-5xl font-bold" },],
        [{ text: "Lightroom" , classNames: "text-5xl font-bold" },],
        [{ text: "Figma" , classNames: "text-5xl font-bold" },],
        [{ text: "Canva" , classNames: "text-5xl font-bold" },],
        [{ text: "And More ...", classNames: "text-5xl font-bold"  }]
    ];

    return (
        <div className="text-center mb-20 mt-20">
            <h1 className="font-bold text-6xl text-center text-white">
                Let us guide your clicks,<br /><br />
                in <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#EB88F6] to-[#EB48A2]">
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
            </h1>
            <p className="text-2xl font-medium text-white mt-10">
                Onistep is your Software Assistant. Ask it any question 
            </p>
            <center>
                <button className="flex items-center mt-10 px-6 py-3 font-bold text-white bg-opacity-20 bg-white rounded-lg shadow-lg backdrop-blur hover:bg-opacity-30 transition-all duration-300">Get it now <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 ml-2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" /></svg></button>
            </center>
        </div>
    );
}

export default Mainpage;
