import AppSlider from "../@appsSlider/appslider"
import CardContainer from "../@cardContainer/cardcontainer"
import Container from "../@container/container"
import VideoSection from "../@videosection/videosection"
import Btn from "../btn/btn"
import { cardData } from "../../_data/data"

export default function InfoPages(){
    return (
        <>
          <div className=" w-full flex items-center justify-center  overflow-x-hidden">
        <VideoSection props={{url:"/videos/Unity_Final.mp4"}} />
      </div>
      <AppSlider />
      <div className="p-10">
        <Container props={{videoUrl:"/videos/Unity_Final.mp4", header:"Never leave your window", description:`Onistep brings all the guidance you need right in your software.\n No more endless searches.\n Get the answers you need instantly.` ,imageRight:false }}/>
        <div className="text-white">
          <h1 className="font-bold text-center text-3xl font-FjallaOne">Take a look at our collection of Courses</h1>
          <div className="h-10"></div>
          <p className="font-medium text-center text-xl font-varela">They’re tailor made for newcomer who want practice.</p>
          <div className=" grid grid-cols-4 grid-rows-1 gap-2 w-full p-4">
            {
              cardData.map(({title,imgUrl,iconUrl,level},index:any)=>{
                return <CardContainer key={index} props={{title,imgUrl,iconUrl,level}}/>
              })
            }
          </div>
        </div>
        <Container props={{videoUrl:"/videos/Unity_Final.mp4", header:"Twice more accurate than GPT-4o", description:`Onistep brings all the guidance you need right to your screen.\n No more endless searches.\n Get the answers you need instantly.Onistep brings all the guidance you need right to your screen.\n No more endless searches.\n Get the answers you need instantly.Onistep brings all the guidance you need right to your screen.\n No more endless searches.\n Get the answers you need instantly.Onistep brings all the guidance you need right to your screen.\n No more endless searches.` ,imageRight:true }}/>
      </div>
      <div className="text-center text-white">
        <p className="font-medium text-2xl font-varela">What are you waiting for?</p>
        <div className="h-10"></div>
        <p className="font-bold text-5xl font-FjallaOne">Try it yourself!</p>
        <div className="mt-20 bg-gradient-to-r from-[#6A30B2] to-[#170D44] relative p-6 rounded-t-full">
          <Btn text="Download now" />
        </div>
      </div>
        </>
    )
}