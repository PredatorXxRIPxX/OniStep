"use server"

export default async function Container({props}:{props:{header:string,description:string,videoUrl:string,imageRight:boolean}}){
    return (
        <div className="w-full h-full grid grid-rows-1 mt-6 mb-6 grid-cols-5 rounded-3xl p-4 relative overflow-x-hidden border-4 border-solid border-[#ABAFDF] before:content-[''] before:absolute before:inset-0 before:backdrop-blur-xl before:from-[#6C67F2]/50 before:to-[#709E6E]/50 before:z-[-1] before:bg-gradient-to-r">
            <div className={`rounded-lg bg-gradient-to-bl ${props.imageRight&&"order-2"} from-[#170D44] to-[#EB48A2] m-2 col-span-3`}>
                <video className="w-full h-auto" autoPlay loop muted>
                    <source src={props.videoUrl} type="video/mp4" />
                </video>
            </div>
            <div className={`flex-col h-full w-full items-center font-fjalla justify-around  ${props.imageRight&&"order-1"} text-center col-span-2`}>
                <h1 className="text-white text-4xl font-bold mt-5 mb-5">{props.header}</h1>
                <p className="text-white font-xl font-semibold font-varela">{props.description}</p>
            </div>
        </div>
    )
}