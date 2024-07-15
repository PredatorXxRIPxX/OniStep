import Mainpage from "./_components/@mainpage/mainpage";
import VideoSection from "./_components/@videosection/videosection";
import AppSlider from "./_components/@appsSlider/appslider";
import Container from "./_components/@container/container";
import { cardData } from "./_data/data";
import CardContainer from "./_components/@cardContainer/cardcontainer";
import Footer from "./_components/@footer/footer";
import Btn from "./_components/btn/btn";

export default function Home() {
  return (
    <>
      <Mainpage />
      <div className=" w-full flex items-center justify-center  overflow-x-hidden">
        <VideoSection props={{url:"45554"}} />
      </div>
      <AppSlider />
      <div className="p-10">
        <h1 className="text-3xl text-white font-bold text-center font-FjallaOne">HEllo HEllo helloooooo</h1>
        <Container props={{videoUrl:"", header:"Never leave your window", description:"Onistep brings all the guidance you need right in your software.No more endless searches.Get the answers you need instantly." ,imageRight:false }}/>
        <div className="text-white">
          <h1 className="font-bold text-center text-3xl font-FjallaOne">Take a look at our collection of Courses</h1>
          <div className="h-10"></div>
          <p className="font-semibold text-center text-xl font-varela">They’re tailor made for newcomer who want practice.</p>
          <div className=" grid grid-cols-4 grid-rows-1 gap-2 w-full p-4">
            {
              cardData.map(({title,imgUrl,iconUrl,level}:any)=>{
                return <CardContainer props={{title,imgUrl,iconUrl,level}}/>
              })
            }
          </div>
        </div>
        <h1 className="text-3xl text-white font-bold text-center font-FjallaOne ">HEllo HEllo helloooooo</h1>
        <Container props={{videoUrl:"", header:"Twice more accurate than GPT-4o", description:"Onistep brings all the guidance you need right to your screen. No more endless searches.Get the answers you need instantly." ,imageRight:true }}/>
      </div>
      <div className="text-center text-white">
        <p className="font-semibold text-2xl font-varela">What are you waiting for?</p>
        <div className="h-10"></div>
        <p className="font-bold text-5xl font-FjallaOne">Try it yourself!</p>
        <div className="mt-20 bg-gradient-to-r from-[#6A30B2] to-[#170D44] relative p-6 rounded-t-full">
          <Btn text="Download now" />
        </div>
      </div>
      <Footer />
    </>
  );
}
