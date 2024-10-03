import Image from "next/image";
function VideoSection() {
  return (
    <div className="w-3/4 h-full shadow-lg drop-shadow-lg shadow-black  border-4 border-solid border-[#ABAFDF] rounded-xl">        
          <Image src={'/assets/ImageMain3.gif'} layout="responsive" width={200} height={200} alt="Picture of the author" />
    </div>
  );
}
export default VideoSection;