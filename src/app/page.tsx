import Image from "next/image";
import Mainpage from "./_components/@mainpage/mainpage";
import VideoSection from "./_components/@videosection/videosection";

export default function Home() {
  return (
    <>
      <Mainpage />
      <div className=" w-full flex items-center justify-center bg-[#6C67F2] mt-5 overflow-x-hidden">
        <VideoSection props={{url:"45554"}} />
      </div>
    </>
  );
}
