import Mainpage from "./_components/@mainpage/mainpage";
import VideoSection from "./_components/@videosection/videosection";
import AppSlider from "./_components/@appsSlider/appslider";
import Container from "./_components/@container/container";
import { cardData } from "./_data/data";
import CardContainer from "./_components/@cardContainer/cardcontainer";
import Footer from "./_components/@footer/footer";
import Btn from "./_components/btn/btn";
import dynamic from "next/dynamic";

const CriticalComponents = dynamic(() => import("./@infoPage/page"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});



export default function Home() {
  return (
    <>
      <Mainpage />
      <CriticalComponents />
    </>
  );
}
