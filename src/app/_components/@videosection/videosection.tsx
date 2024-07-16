import ExempleImage from "../../../../public/bonne taille 2 amélioré 1 (1).png"
import Image from "next/image";
function VideoSection({props}:{props:{url:string}}) {
  return (
    <div className="w-3/4 h-full shadow-lg drop-shadow-lg shadow-black  border-4 border-solid border-[#ABAFDF] rounded-xl">
      {
        props.url === "45554" ?
          <Image src={ExempleImage} alt="Picture of the author" />
        :<video className="w-full h-auto rounded-md" autoPlay loop muted>
            <source src={props.url} type="video/mp4" />
        </video>
      }
    </div>
  );
}
export default VideoSection;