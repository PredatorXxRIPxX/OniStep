import React from "react"
import AppSlider from "../@appsSlider/appslider"
import CardContainer from "../@cardContainer/cardcontainer"
import Container from "../@container/container"
import VideoSection from "../@videosection/videosection"
import Btn from "../btn/btn"
import { cardData } from "../../_data/data"
import Link from 'next/link'

export default function InfoPages(){

  const descriptionMajor = (
    <>
      <p>
      Tried GPT-4 and felt lost when it came to software help? We&apos;ve all been there. Onistep is built different. Unlike general AI, our assistant is laser-focused on your tools. With a massive internal database tailored to your software, Onistep doesn’t hallucinate buttons or paths—it knows your version, your setup, and stays updated with the latest features. 
      </p>
    </>
  );
  const descriptionMajor2 = (
    <>
      <p>
      With Onistep, you get real-time guidance right inside your software. No more juggling between windows or losing focus by jumping to YouTube for a quick fix. Onistep shows you exactly where to click and explains why, all within your workspace. It’s like having a mentor right by your side, saving you time and keeping you in the flow! 
      </p>
    </>
  )

  return (
    <>
      <div className=" w-full flex items-center justify-center  overflow-x-hidden">
        <VideoSection />
      </div>
      <AppSlider />
      <div className="p-10">
          <Container props={{videoUrl:"./assets/ImageMain2.png", header:"Never leave your task again to watch a tutorial on another tab!", description:descriptionMajor2 ,imageRight:false }}/>
        <div className="text-white">
          <h1 className="font-bold text-center text-3xl font-FjallaOne">Take a look at our collection of Courses</h1>
          <div className="h-10"></div>
          <p className="font-medium text-center text-xl font-varela">They&apos;re tailor made for newcomer who want practice.</p>
          <div className=" grid grid-cols-1 lg:grid-cols-4 lg:grid-rows-1 gap-2 w-full p-4">
            {
              cardData.map(({id, title, imgUrl, iconUrl, level}, index) => {
                if (index > 3) return;
                return <CardContainer key={index} props={{id, title, imgUrl, iconUrl, level}}/>
              })
            }
          </div>
          <center>
            <Link href={"/courses"}>
              <Btn text="View all courses" />
            </Link>
          </center>
        </div>
            <Container props={{videoUrl:"./assets/ImageMain.png", header:"Onistep is Twice as Accurate as GPT-4 on Software-Related Questions!", description:descriptionMajor ,imageRight:true }}/>

      </div>
      <div className="text-center text-white">
        <p className="font-medium text-2xl font-varela">What are you waiting for?</p>
        <div className="h-10"></div>
        <p className="font-normal text-5xl font-FjallaOne mb-8">Try it yourself!</p>
        <div className="mt-15 bg-gradient-to-r from-[#6A30B2] to-[#170D44] relative p-6 rounded-t-full">
          <Btn text="Download now" />
        </div>
      </div>
    </>
  )
}
