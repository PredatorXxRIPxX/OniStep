import ExempleImage from "../../../../public/bonne taille 2 amélioré 1 (1).png"
import Image from "next/image";
function VideoSection({props}:{props:{url:string}}) {
  return (
    <div className="w-3/4 h-full rounded-lg shadow-lg drop-shadow-lg shadow-black">
      {
        props.url === "45554" ?
          <Image src={ExempleImage} alt="Picture of the author" />
        :<video className="w-full h-auto" autoPlay loop muted>
            <source src={props.url} type="video/mp4" />
        </video>
      }
    </div>
  );
}
export default VideoSection;