import Mainpage from "./_components/@mainpage/mainpage";
import VideoSection from "./_components/@videosection/videosection";
import AppSlider from "./_components/@appsSlider/appslider";
import Container from "./_components/@container/container";
import { cardData } from "./_data/data";
import CardContainer from "./_components/@cardContainer/cardcontainer";

export default function Home() {
  return (
    <>
      <Mainpage />
      <div className=" w-full flex items-center justify-center  overflow-x-hidden">
        <VideoSection props={{url:"45554"}} />
      </div>
      <AppSlider />
      <div className="p-10">
        <Container props={{videoUrl:"", header:"Never leave your window", description:"Onistep brings all the guidance you need right in your software.No more endless searches.Get the answers you need instantly." ,imageRight:false }}/>
        <div className=" grid grid-cols-4 grid-rows-1 gap-2 w-full p-4">
          {
            cardData.map(({title,imgUrl,iconUrl,level}:any)=>{
              return CardContainer({props:{title,imgUrl,iconUrl,level}})
            })
          }
        </div>
        <Container props={{videoUrl:"", header:"Twice more accurate than GPT-4o", description:"Onistep brings all the guidance you need right to your screen. No more endless searches.Get the answers you need instantly." ,imageRight:true }}/>
      </div>
    </>
  );
}
