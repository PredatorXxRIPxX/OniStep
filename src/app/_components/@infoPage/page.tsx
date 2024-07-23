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
      Onistep leverages a specially curated database and advanced algorithms to provide guidance that&apos;s twice as accurate as other AI solutions. Unlike general-purpose AIs, Onistep is dedicated to software instruction, ensuring you get precise, relevant answers every time. From basic tasks to complex operations, our accuracy means you can trust the guidance you receive. Experience the difference with Onistep&apos;s unparalleled precision.
      </p>
    </>
  );
  const descriptionMajor2 = (
    <>
      <p>
      Navigating new software can be challenging, but with Onistep, you get real-time, interactive guides that make learning a breeze. No more switching tabs or searching for tutorials; Onistep shows you exactly where to click and what to do. Whether you&apos;re diving into Photoshop for the first time or exploring advanced features in Blender, our guides ensure you never feel lost. Experience the ease of mastering any software with precise, step-by-step instructions right within your application.
      </p>
    </>
  )

  return (
    <>
      <div className=" w-full flex items-center justify-center  overflow-x-hidden">
        <VideoSection props={{url:"./videos/Unity_Final.mp4"}} />
      </div>
      <AppSlider />
      <div className="p-10">
          <Container props={{videoUrl:"/assets/bonnertaille.png", header:"Never leave your window", description:descriptionMajor2 ,imageRight:false }}/>
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
            <Container props={{videoUrl:"./assets/bonnertaille.png", header:"Twice more accurate than GPT-4o", description:descriptionMajor ,imageRight:true }}/>

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
